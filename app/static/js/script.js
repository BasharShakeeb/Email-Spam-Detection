document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const typingIndicator = document.getElementById('typingIndicator');
    const sendBtn = document.getElementById('sendBtn');

    input.focus();

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    sendBtn.addEventListener('click', handleSend);

    async function handleSend() {
        const text = input.value.trim();
        if (!text) return;

        // 1. Add User Message
        appendMessage(text, 'user-message');
        input.value = '';
        input.disabled = true;

        // 2. Show Typing Indicator
        showTyping(true);
        scrollToBottom();

        // Simulate network delay for UX
        const minDelay = new Promise(resolve => setTimeout(resolve, 800));

        try {
            const apiCall = fetch('/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });

            // Wait for both
            const [response] = await Promise.all([apiCall, minDelay]);
            const data = await response.json();

            showTyping(false);

            if (data.error) {
                appendMessage("⚠️ " + data.error, 'bot-message');
            } else {
                const isSpam = data.is_spam;
                const typeClass = isSpam ? 'spam' : 'ham';
                const icon = isSpam ? '🚫' : '✅';

                const resultHTML = `
                    <div style="font-weight:600; margin-bottom:4px;">${icon} Analysis Complete</div>
                    <div>${data.message}</div>
                    <div style="margin-top:8px; font-size:0.85em; opacity:0.8; padding-top:4px; border-top:1px solid rgba(0,0,0,0.1)">
                        Verdict: <strong>${data.prediction}</strong>
                    </div>
                `;
                appendMessage(resultHTML, `bot-message ${typeClass}`, true);
            }

        } catch (error) {
            showTyping(false);
            appendMessage("❌ Connection Failed. Check server.", 'bot-message');
            console.error(error);
        } finally {
            input.disabled = false;
            input.focus();
            scrollToBottom();
        }
    }

    function appendMessage(content, className, isHTML = false) {
        const div = document.createElement('div');
        div.className = `message ${className}`;

        if (isHTML) {
            div.innerHTML = content;
        } else {
            div.textContent = content;
        }

        chatBox.insertBefore(div, typingIndicator);
    }

    function showTyping(show) {
        typingIndicator.style.display = show ? 'block' : 'none';
        if (show) scrollToBottom();
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
