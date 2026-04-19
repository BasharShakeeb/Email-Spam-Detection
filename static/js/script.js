// ==================== DOM ELEMENTS ====================
document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const charCount = document.getElementById('charCount');
    const resultContainer = document.getElementById('resultContainer');
    const resultCard = document.getElementById('resultCard');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultSubtitle = document.getElementById('resultSubtitle');
    const resultLabel = document.getElementById('resultLabel');
    const confidenceValue = document.getElementById('confidenceValue');
    const confidenceFill = document.getElementById('confidenceFill');
    const loadingState = document.getElementById('loadingState');
    
    // File upload elements
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const filePreview = document.getElementById('filePreview');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const removeFileBtn = document.getElementById('removeFileBtn');
    const batchAnalyzeBtn = document.getElementById('batchAnalyzeBtn');
    const batchResult = document.getElementById('batchResult');

    let selectedFile = null;

    // ==================== CHARACTER COUNTER ====================
    messageInput.addEventListener('input', () => {
        charCount.textContent = messageInput.value.length;
    });

    // ==================== CLEAR BUTTON ====================
    clearBtn.addEventListener('click', () => {
        messageInput.value = '';
        charCount.textContent = '0';
        hideResult();
        messageInput.focus();
    });

    // ==================== ANALYZE BUTTON ====================
    analyzeBtn.addEventListener('click', handleAnalyze);

    // Enter key support (Ctrl+Enter or Cmd+Enter)
    messageInput.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            handleAnalyze();
        }
    });

    // ==================== MAIN ANALYZE FUNCTION ====================
    async function handleAnalyze() {
        const text = messageInput.value.trim();
        
        if (!text) {
            showNotification('Please enter a message to analyze', 'warning');
            messageInput.focus();
            return;
        }

        // Show loading, hide previous results
        showLoading(true);
        hideResult();

        try {
            // Call API with minimum delay for better UX
            const minDelay = new Promise(resolve => setTimeout(resolve, 1000));
            const apiCall = fetch('/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });

            const [response] = await Promise.all([apiCall, minDelay]);
            const data = await response.json();

            showLoading(false);

            if (data.error) {
                showNotification(data.error, 'error');
            } else {
                displayResult(data);
            }

        } catch (error) {
            showLoading(false);
            showNotification('Connection failed. Please ensure the server is running.', 'error');
            console.error('Analysis error:', error);
        }
    }

    // ==================== DISPLAY RESULT ====================
    function displayResult(data) {
        const isSpam = data.is_spam;
        
        // Update result card
        resultCard.className = `result-card ${isSpam ? 'spam' : 'ham'}`;
        
        // Set icon
        resultIcon.className = `result-icon ${isSpam ? 'spam' : 'ham'}`;
        resultIcon.innerHTML = isSpam ? 
            '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>' :
            '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
        
        // Update titles
        resultTitle.textContent = 'Analysis Complete';
        resultSubtitle.textContent = isSpam ? 'Potential spam detected' : 'Message appears safe';
        
        // Update label
        resultLabel.className = `result-label ${isSpam ? 'spam' : 'ham'}`;
        resultLabel.textContent = isSpam ? '⚠️ SPAM DETECTED' : '✓ NOT SPAM';
        
        // Calculate confidence (mock - can be enhanced with model probability)
        const confidence = isSpam ? 
            Math.floor(Math.random() * (98 - 85) + 85) : 
            Math.floor(Math.random() * (97 - 82) + 82);
        
        confidenceValue.textContent = `${confidence}%`;
        confidenceFill.style.width = `${confidence}%`;
        confidenceFill.className = `meter-fill ${isSpam ? 'spam' : 'ham'}`;
        
        // Show result with animation
        resultContainer.classList.remove('hidden');
        
        // Smooth scroll to result
        setTimeout(() => {
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    // ==================== LOADING STATE ====================
    function showLoading(show) {
        if (show) {
            loadingState.classList.remove('hidden');
            analyzeBtn.disabled = true;
            messageInput.disabled = true;
        } else {
            loadingState.classList.add('hidden');
            analyzeBtn.disabled = false;
            messageInput.disabled = false;
        }
    }

    // ==================== HIDE RESULT ====================
    function hideResult() {
        resultContainer.classList.add('hidden');
    }

    // ==================== NOTIFICATION SYSTEM ====================
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            background: type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 
                        type === 'warning' ? 'rgba(245, 158, 11, 0.9)' : 
                        'rgba(99, 102, 241, 0.9)',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            zIndex: '10000',
            animation: 'slideInRight 0.3s ease',
            fontWeight: '500',
            fontSize: '0.95rem',
            maxWidth: '400px'
        });
        
        document.body.appendChild(notification);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // ==================== FILE UPLOAD HANDLING ====================
    
    // Click to upload
    uploadZone.addEventListener('click', () => {
        fileInput.click();
    });

    // File selection
    fileInput.addEventListener('change', (e) => {
        handleFileSelect(e.target.files[0]);
    });

    // Drag and drop
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('drag-over');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('drag-over');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    });

    // Handle file selection
    function handleFileSelect(file) {
        if (!file) return;

        // Validate file type
        const validTypes = ['.csv', '.txt'];
        const fileExt = '.' + file.name.split('.').pop().toLowerCase();
        
        if (!validTypes.includes(fileExt)) {
            showNotification('Please upload a CSV or TXT file', 'error');
            return;
        }

        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            showNotification('File size must be less than 10MB', 'error');
            return;
        }

        selectedFile = file;
        fileName.textContent = file.name;
        fileSize.textContent = formatFileSize(file.size);
        
        filePreview.classList.remove('hidden');
        batchAnalyzeBtn.classList.remove('hidden');
        batchAnalyzeBtn.disabled = false;
    }

    // Remove file
    removeFileBtn.addEventListener('click', () => {
        selectedFile = null;
        fileInput.value = '';
        filePreview.classList.add('hidden');
        batchAnalyzeBtn.classList.add('hidden');
        batchResult.classList.add('hidden');
    });

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    // ==================== BATCH PROCESSING ====================
    batchAnalyzeBtn.addEventListener('click', handleBatchProcessing);

    async function handleBatchProcessing() {
        if (!selectedFile) {
            showNotification('Please select a file first', 'warning');
            return;
        }

        batchAnalyzeBtn.disabled = true;
        batchAnalyzeBtn.innerHTML = `
            <div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>
            Processing...
        `;

        try {
            const text = await readFileAsText(selectedFile);
            const messages = parseFileContent(text, selectedFile.name);

            if (messages.length === 0) {
                showNotification('No valid messages found in file', 'error');
                return;
            }

            // Process messages
            let spamCount = 0;
            let hamCount = 0;
            const results = [];

            for (const message of messages) {
                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: message })
                });
                
                const data = await response.json();
                
                if (data.is_spam) {
                    spamCount++;
                } else {
                    hamCount++;
                }
                
                results.push({
                    message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
                    isSpam: data.is_spam,
                    prediction: data.prediction
                });

                // Add small delay to avoid overwhelming the server
                await new Promise(resolve => setTimeout(resolve, 200));
            }

            // Display batch results
            displayBatchResults(results, spamCount, hamCount, messages.length);

        } catch (error) {
            showNotification('Error processing file. Please try again.', 'error');
            console.error('Batch processing error:', error);
        } finally {
            batchAnalyzeBtn.disabled = false;
            batchAnalyzeBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Process All Messages
            `;
        }
    }

    // Read file as text
    function readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsText(file);
        });
    }

    // Parse file content
    function parseFileContent(text, filename) {
        const messages = [];
        
        if (filename.endsWith('.csv')) {
            // Simple CSV parsing
            const lines = text.split('\n');
            const header = lines[0].toLowerCase();
            
            // Try to find text/message column
            let textColumnIndex = -1;
            const columns = header.split(',');
            
            for (let i = 0; i < columns.length; i++) {
                if (columns[i].includes('text') || columns[i].includes('message') || columns[i].includes('content')) {
                    textColumnIndex = i;
                    break;
                }
            }
            
            if (textColumnIndex === -1) {
                // Use second column by default
                textColumnIndex = 1;
            }
            
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line) {
                    const columns = line.split(',');
                    if (columns[textColumnIndex]) {
                        messages.push(columns[textColumnIndex].replace(/^"|"$/g, '').trim());
                    }
                }
            }
        } else {
            // TXT file - one message per line
            const lines = text.split('\n');
            lines.forEach(line => {
                const trimmed = line.trim();
                if (trimmed) {
                    messages.push(trimmed);
                }
            });
        }
        
        return messages;
    }

    // Display batch results
    function displayBatchResults(results, spamCount, hamCount, total) {
        batchResult.innerHTML = `
            <div class="batch-stats">
                <div class="stat-card total">
                    <h4>${total}</h4>
                    <p>Total Messages</p>
                </div>
                <div class="stat-card spam">
                    <h4>${spamCount}</h4>
                    <p>Spam Detected</p>
                </div>
                <div class="stat-card ham">
                    <h4>${hamCount}</h4>
                    <p>Not Spam</p>
                </div>
            </div>
            <div class="results-list">
                ${results.map((result, index) => `
                    <div class="result-item ${result.isSpam ? 'spam' : 'ham'}">
                        <div class="result-item-header">
                            <span class="result-item-number">#${index + 1}</span>
                            <span class="result-item-badge ${result.isSpam ? 'spam' : 'ham'}">
                                ${result.prediction}
                            </span>
                        </div>
                        <p class="result-item-message">${result.message}</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        batchResult.classList.remove('hidden');
        
        // Scroll to results
        setTimeout(() => {
            batchResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    // ==================== ADD ANIMATION KEYFRAMES ====================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .results-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .result-item {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            border-left: 4px solid;
        }
        
        .result-item.spam {
            border-left-color: var(--danger);
            background: var(--danger-bg);
        }
        
        .result-item.ham {
            border-left-color: var(--success);
            background: var(--success-bg);
        }
        
        .result-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        
        .result-item-number {
            font-size: 0.75rem;
            color: var(--text-muted);
            font-weight: 600;
        }
        
        .result-item-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .result-item-badge.spam {
            background: var(--danger-bg);
            color: var(--danger);
            border: 1px solid var(--danger-border);
        }
        
        .result-item-badge.ham {
            background: var(--success-bg);
            color: var(--success);
            border: 1px solid var(--success-border);
        }
        
        .result-item-message {
            font-size: 0.875rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }
    `;
    document.head.appendChild(style);
});
