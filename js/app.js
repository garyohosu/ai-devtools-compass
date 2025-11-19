// AI Dev Tools Comparison Matrix - Main Application

// ==================== Global State ====================
let toolsData = [];
let filteredTools = [];
let currentFilters = {
    categories: ['all'],
    pricing: [],
    difficulty: [],
    search: ''
};
let currentSort = 'rating-desc';

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', async () => {
    await loadTools();
    initializeEventListeners();
    loadUserNotes();
    initializeDarkMode();
    renderTools();
});

// ==================== Data Loading ====================
async function loadTools() {
    try {
        const response = await fetch('data/tools.json');
        const data = await response.json();
        toolsData = data.tools;
        filteredTools = [...toolsData];
        updateStats();
    } catch (error) {
        console.error('Failed to load tools data:', error);
        showError('データの読み込みに失敗しました');
    }
}

// ==================== Event Listeners ====================
function initializeEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    searchInput.addEventListener('input', (e) => {
        currentFilters.search = e.target.value.toLowerCase();
        clearSearch.classList.toggle('hidden', !e.target.value);
        applyFilters();
    });
    
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        currentFilters.search = '';
        clearSearch.classList.add('hidden');
        applyFilters();
    });

    // Category filters
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value === 'all') {
                if (e.target.checked) {
                    currentFilters.categories = ['all'];
                    document.querySelectorAll('.category-filter').forEach(cb => {
                        cb.checked = cb.value === 'all';
                    });
                }
            } else {
                const allCheckbox = document.querySelector('.category-filter[value="all"]');
                allCheckbox.checked = false;
                
                if (e.target.checked) {
                    currentFilters.categories = currentFilters.categories.filter(c => c !== 'all');
                    currentFilters.categories.push(value);
                } else {
                    currentFilters.categories = currentFilters.categories.filter(c => c !== value);
                }
                
                if (currentFilters.categories.length === 0) {
                    currentFilters.categories = ['all'];
                    allCheckbox.checked = true;
                }
            }
            applyFilters();
        });
    });

    // Pricing filters
    document.querySelectorAll('.pricing-filter').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.pricing.push(e.target.value);
            } else {
                currentFilters.pricing = currentFilters.pricing.filter(p => p !== e.target.value);
            }
            applyFilters();
        });
    });

    // Difficulty filters
    document.querySelectorAll('.difficulty-filter').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                currentFilters.difficulty.push(e.target.value);
            } else {
                currentFilters.difficulty = currentFilters.difficulty.filter(d => d !== e.target.value);
            }
            applyFilters();
        });
    });

    // Sort
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFilters();
    });

    // Reset filters
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('resetAllFilters').addEventListener('click', resetFilters);

    // Filter panel toggle (mobile)
    document.getElementById('filterToggle').addEventListener('click', () => {
        document.getElementById('filterPanel').classList.toggle('active');
    });

    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    // Export/Import
    document.getElementById('exportButton').addEventListener('click', () => {
        document.getElementById('exportJsonButton').click();
    });
    document.getElementById('exportJsonButton').addEventListener('click', exportJSON);
    document.getElementById('exportCsvButton').addEventListener('click', exportCSV);
    document.getElementById('importButton').addEventListener('click', () => {
        document.getElementById('importModal').classList.add('active');
    });
    document.getElementById('cancelImport').addEventListener('click', () => {
        document.getElementById('importModal').classList.remove('active');
    });
    document.getElementById('confirmImport').addEventListener('click', importData);

    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('detailModal').addEventListener('click', (e) => {
        if (e.target.id === 'detailModal') closeModal();
    });

    // Close filter panel when clicking outside (mobile)
    document.addEventListener('click', (e) => {
        const filterPanel = document.getElementById('filterPanel');
        const filterToggle = document.getElementById('filterToggle');
        if (window.innerWidth < 1024 && 
            filterPanel.classList.contains('active') && 
            !filterPanel.contains(e.target) && 
            !filterToggle.contains(e.target)) {
            filterPanel.classList.remove('active');
        }
    });
}

// ==================== Filtering & Sorting ====================
function applyFilters() {
    filteredTools = toolsData.filter(tool => {
        // Search filter
        if (currentFilters.search) {
            const searchLower = currentFilters.search;
            const matchesSearch = 
                tool.name.toLowerCase().includes(searchLower) ||
                tool.description.toLowerCase().includes(searchLower) ||
                tool.features.some(f => f.toLowerCase().includes(searchLower));
            if (!matchesSearch) return false;
        }

        // Category filter
        if (!currentFilters.categories.includes('all')) {
            if (!currentFilters.categories.includes(tool.category)) {
                return false;
            }
        }

        // Pricing filter
        if (currentFilters.pricing.length > 0) {
            if (!currentFilters.pricing.includes(tool.pricingTier)) {
                return false;
            }
        }

        // Difficulty filter
        if (currentFilters.difficulty.length > 0) {
            if (!currentFilters.difficulty.includes(tool.difficulty)) {
                return false;
            }
        }

        return true;
    });

    // Apply sorting
    sortTools();
    renderTools();
    updateStats();
}

function sortTools() {
    const [field, order] = currentSort.split('-');
    
    filteredTools.sort((a, b) => {
        let aVal, bVal;
        
        switch (field) {
            case 'rating':
                aVal = a.rating;
                bVal = b.rating;
                break;
            case 'name':
                aVal = a.name.toLowerCase();
                bVal = b.name.toLowerCase();
                break;
            case 'date':
                aVal = new Date(a.updatedAt);
                bVal = new Date(b.updatedAt);
                break;
            default:
                return 0;
        }
        
        if (order === 'asc') {
            return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        } else {
            return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
        }
    });
}

function resetFilters() {
    // Reset search
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').classList.add('hidden');
    currentFilters.search = '';

    // Reset category
    currentFilters.categories = ['all'];
    document.querySelectorAll('.category-filter').forEach(cb => {
        cb.checked = cb.value === 'all';
    });

    // Reset pricing
    currentFilters.pricing = [];
    document.querySelectorAll('.pricing-filter').forEach(cb => {
        cb.checked = false;
    });

    // Reset difficulty
    currentFilters.difficulty = [];
    document.querySelectorAll('.difficulty-filter').forEach(cb => {
        cb.checked = false;
    });

    // Reset sort
    currentSort = 'rating-desc';
    document.getElementById('sortSelect').value = 'rating-desc';

    applyFilters();
}

// ==================== Rendering ====================
function renderTools() {
    const container = document.getElementById('toolsContainer');
    const noResults = document.getElementById('noResults');
    
    if (filteredTools.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    container.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
    
    // Add click listeners to cards
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', () => {
            const toolId = card.dataset.toolId;
            showToolDetail(toolId);
        });
    });
}

function createToolCard(tool) {
    const userNote = getUserNote(tool.id);
    const hasNote = userNote && userNote.trim() !== '';
    
    return `
        <div class="tool-card bg-white dark:bg-dark-card rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-all" data-tool-id="${tool.id}">
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${tool.name}</h3>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span class="badge badge-category">${tool.category}</span>
                        <span class="badge badge-${tool.pricingTier}">${getPricingLabel(tool.pricingTier)}</span>
                        <span class="badge badge-difficulty">${tool.difficulty}</span>
                    </div>
                </div>
                ${hasNote ? '<i class="fas fa-sticky-note text-yellow-500 text-xl" title="メモあり"></i>' : ''}
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                ${tool.description}
            </p>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-1">
                    ${tool.features.slice(0, 4).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                    ${tool.features.length > 4 ? `<span class="feature-tag">+${tool.features.length - 4}</span>` : ''}
                </div>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-border">
                <div class="rating-stars">
                    ${createStars(tool.rating)}
                    <span class="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">${tool.rating}</span>
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-500">
                    更新: ${formatDate(tool.updatedAt)}
                </div>
            </div>
        </div>
    `;
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star empty"></i>';
    }
    return stars;
}

// ==================== Tool Detail Modal ====================
function showToolDetail(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;
    
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    
    modalTitle.textContent = tool.name;
    
    const userNote = getUserNote(tool.id) || '';
    
    modalContent.innerHTML = `
        <div class="space-y-6">
            <!-- Basic Info -->
            <div>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="badge badge-category">${tool.category}</span>
                    <span class="badge badge-${tool.pricingTier}">${tool.pricing}</span>
                    <span class="badge badge-difficulty">${tool.difficulty}</span>
                </div>
                <p class="text-gray-700 dark:text-gray-300">${tool.description}</p>
            </div>
            
            <!-- Rating -->
            <div class="flex items-center gap-4">
                <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">評価</p>
                    <div class="rating-stars">
                        ${createStars(tool.rating)}
                        <span class="ml-2 text-lg font-bold text-gray-900 dark:text-white">${tool.rating}</span>
                    </div>
                </div>
                <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">最終更新</p>
                    <p class="font-semibold text-gray-900 dark:text-white">${formatDate(tool.updatedAt)}</p>
                </div>
            </div>
            
            <!-- Features -->
            <div>
                <h3 class="font-bold text-lg mb-3 text-gray-900 dark:text-white">主要機能</h3>
                <div class="flex flex-wrap gap-2">
                    ${tool.features.map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
            </div>
            
            <!-- Languages -->
            <div>
                <h3 class="font-bold text-lg mb-3 text-gray-900 dark:text-white">対応言語</h3>
                <div class="flex flex-wrap gap-2">
                    ${tool.languages.map(lang => 
                        `<span class="feature-tag">${lang}</span>`
                    ).join('')}
                </div>
            </div>
            
            <!-- Pros & Cons -->
            ${tool.pros && tool.pros.length > 0 ? `
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="font-bold text-lg mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                            <i class="fas fa-check-circle"></i>
                            メリット
                        </h3>
                        <ul class="space-y-2">
                            ${tool.pros.map(pro => 
                                `<li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <i class="fas fa-plus text-green-500 mt-1"></i>
                                    <span>${pro}</span>
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
                            <i class="fas fa-times-circle"></i>
                            デメリット
                        </h3>
                        <ul class="space-y-2">
                            ${tool.cons.map(con => 
                                `<li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <i class="fas fa-minus text-red-500 mt-1"></i>
                                    <span>${con}</span>
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
            ` : ''}
            
            <!-- Links -->
            <div>
                <h3 class="font-bold text-lg mb-3 text-gray-900 dark:text-white">リンク</h3>
                <div class="flex flex-wrap gap-3">
                    <a href="${tool.officialUrl}" target="_blank" rel="noopener" 
                       class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <i class="fas fa-external-link-alt"></i>
                        公式サイト
                    </a>
                    ${tool.tutorialUrl ? `
                        <a href="${tool.tutorialUrl}" target="_blank" rel="noopener" 
                           class="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2">
                            <i class="fas fa-book"></i>
                            チュートリアル
                        </a>
                    ` : ''}
                </div>
            </div>
            
            <!-- User Notes -->
            <div>
                <h3 class="font-bold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <i class="fas fa-sticky-note text-yellow-500"></i>
                    使用感メモ
                </h3>
                <textarea 
                    id="noteTextarea" 
                    class="w-full h-32 px-4 py-2 border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg rounded-lg focus:ring-2 focus:ring-primary resize-none"
                    placeholder="このツールの使用感や気づいたことをメモ..."
                >${userNote}</textarea>
                <div class="flex justify-end gap-2 mt-2">
                    <button 
                        onclick="saveNote('${tool.id}')" 
                        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                        <i class="fas fa-save"></i>
                        メモを保存
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('active');
}

// ==================== LocalStorage for Notes ====================
function getUserNote(toolId) {
    const notes = JSON.parse(localStorage.getItem('toolNotes') || '{}');
    return notes[toolId] || '';
}

function saveNote(toolId) {
    const noteTextarea = document.getElementById('noteTextarea');
    const notes = JSON.parse(localStorage.getItem('toolNotes') || '{}');
    notes[toolId] = noteTextarea.value;
    localStorage.setItem('toolNotes', JSON.stringify(notes));
    
    showNotification('メモを保存しました', 'success');
    renderTools(); // Re-render to show note indicator
}

function loadUserNotes() {
    // Notes are loaded on-demand when displaying tool details
}

// ==================== Dark Mode ====================
function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.documentElement.classList.add('dark');
    }
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
}

// ==================== Export/Import ====================
function exportJSON() {
    const dataToExport = {
        tools: toolsData,
        notes: JSON.parse(localStorage.getItem('toolNotes') || '{}'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-dev-tools-${formatDate(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('JSONファイルをエクスポートしました', 'success');
}

function exportCSV() {
    const headers = ['名前', 'カテゴリ', '料金', '難易度', '評価', '最終更新日', '公式URL'];
    const rows = toolsData.map(tool => [
        tool.name,
        tool.category,
        tool.pricing,
        tool.difficulty,
        tool.rating,
        tool.updatedAt,
        tool.officialUrl
    ]);
    
    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-dev-tools-${formatDate(new Date())}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('CSVファイルをエクスポートしました', 'success');
}

function importData() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        showNotification('ファイルを選択してください', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.tools && Array.isArray(data.tools)) {
                toolsData = data.tools;
                filteredTools = [...toolsData];
                if (data.notes) {
                    localStorage.setItem('toolNotes', JSON.stringify(data.notes));
                }
                renderTools();
                updateStats();
                document.getElementById('importModal').classList.remove('active');
                showNotification('データをインポートしました', 'success');
            } else {
                throw new Error('Invalid data format');
            }
        } catch (error) {
            showNotification('無効なファイル形式です', 'error');
        }
    };
    reader.readAsText(file);
}

// ==================== Stats ====================
function updateStats() {
    document.getElementById('displayCount').textContent = filteredTools.length;
    document.getElementById('totalCount').textContent = toolsData.length;
    
    const freeTools = toolsData.filter(t => t.pricingTier === 'free').length;
    document.getElementById('freeCount').textContent = freeTools;
    
    const avgRating = toolsData.reduce((sum, t) => sum + t.rating, 0) / toolsData.length;
    document.getElementById('avgRating').textContent = avgRating.toFixed(1);
}

// ==================== Utility Functions ====================
function getPricingLabel(tier) {
    const labels = {
        'free': '無料',
        'freemium': '無料/有料',
        'paid': '有料'
    };
    return labels[tier] || tier;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
}

function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showError(message) {
    showNotification(message, 'error');
}

// Make saveNote available globally for inline onclick
window.saveNote = saveNote;
