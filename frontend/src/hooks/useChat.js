import { useState, useCallback } from 'react';
import axios from 'axios';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [busy, setBusy] = useState(false);
    const [sessionId] = useState(() => 'fl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8));

    const addMessage = useCallback((role, content) => {
        setMessages((prev) => [...prev, { role, content, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }]);
    }, []);

    const sendMessage = async (text) => {
        if (!text.trim() || busy) return;

        setBusy(true);
        addMessage('user', text);

        try {
            const res = await axios.post('/api/chat', {
                messages: [...messages.map(m => ({ role: m.role, content: m.content })), { role: 'user', content: text }],
                sessionId
            });

            if (res.data && res.data.reply) {
                addMessage('bot', res.data.reply);
            }
        } catch (error) {
            console.error('Chat error:', error);
            addMessage('bot', 'Sorry, I encountered an error. Please try again.');
        } finally {
            setBusy(false);
        }
    };

    const clearChat = () => {
        setMessages([]);
    };

    return {
        messages,
        sendMessage,
        clearChat,
        busy,
        addMessage
    };
};

export default useChat;
