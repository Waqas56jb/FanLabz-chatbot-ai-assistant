import React, { useRef, useEffect } from 'react';

const ChatArea = ({
    messages,
    sendMessage,
    busy,
    onAsk,
    clearChat,
    openCalc,
    openModal,
    showHome,
    onGoHome,
    onContinue,
    narrow,
    onToggleMobileMenu,
    mobileMenuOpen,
}) => {
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, busy]);

    const handleSend = () => {
        const text = inputRef.current.value.trim();
        if (text) {
            onContinue();
            sendMessage(text);
            inputRef.current.value = '';
            inputRef.current.style.height = 'auto';
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const autoSize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight) + 'px';
    };

    const formatMessage = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code style="background:#f4f4f5;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:12px">$1</code>')
            .replace(/^### (.+)$/gm, '<strong style="font-size:13px;text-transform:uppercase;letter-spacing:0.5px;color:#4f46e5">$1</strong>')
            .replace(/^## (.+)$/gm, '<strong style="font-size:15px;color:#4f46e5">$1</strong>')
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            .split('\n').join('<br>');
    };

    return (
        <main className="main">
            <header className="chat-header">
                {narrow && (
                    <button
                        type="button"
                        className="mobile-menu-btn"
                        onClick={onToggleMobileMenu}
                        aria-label="Open navigation menu"
                        aria-expanded={Boolean(mobileMenuOpen)}
                    >
                        ☰
                    </button>
                )}
                <div className="chat-header-info">
                    {messages.length > 0 && showHome && (
                        <button type="button" className="back-home-btn" onClick={onContinue} title="Back to conversation">
                            ← Back
                        </button>
                    )}
                    {messages.length > 0 && !showHome && (
                        <button type="button" className="back-home-btn back-home-btn--home" onClick={onGoHome} title="Home">
                            ← Home
                        </button>
                    )}
                    <h1>LABZ — FanLabz AI Assistant</h1>
                    <p>Powered by GPT-4o · Responds in your language · fanlabz.com</p>
                </div>
                <div className="header-btns">
                    <button className="hbtn outline" onClick={clearChat}>🗑 Clear</button>
                    <button className="hbtn outline" onClick={openCalc}>📊 Calculator</button>
                    <button className="hbtn grad" onClick={() => window.open('https://fanlabz.com/signup', '_blank')}>
                        🚀 Get Started Free
                    </button>
                </div>
            </header>

            <div className="quick-bar">
                <div className="qtopic" onClick={() => onAsk('How does FanLabz work and how do I get started?')}>💡 How It Works</div>
                <div className="qtopic" onClick={() => onAsk('What is the FanLabz payout rate and how does it compare to OnlyFans?')}>💸 88% Payout</div>
                <div className="qtopic" onClick={() => onAsk('What are subscriptions, PPV, tips, and paid DMs on FanLabz?')}>📦 Revenue Streams</div>
                <div className="qtopic" onClick={() => onAsk('How does DMCA protection and safety work on FanLabz?')}>🛡️ Safety & DMCA</div>
                <div className="qtopic" onClick={() => onAsk('How does the agency dashboard work for managing multiple creators?')}>🏢 Agency Tools</div>
                <div className="qtopic" onClick={openCalc}>📊 Earnings Calc</div>
                <div className="qtopic" onClick={() => onAsk('How do instant and weekly payouts work and when will I get paid?')}>⚡ Payouts</div>
                <div className="qtopic" onClick={openModal}>💬 Get Help</div>
            </div>

            <div className="messages" id="messages">
                {(messages.length === 0 || showHome) && (
                    <div className="welcome-hero" id="welcomeHero">
                        <div className="hero-avatar" aria-hidden>✨</div>
                        <div className="hero-name">Hi, I'm LABZ!</div>
                        <p className="hero-desc">
                            Your AI assistant for <strong>FanLabz</strong> — the creator platform where you keep <strong>up to 88%</strong> of your earnings with instant payouts, smart mass DMs, and full DMCA protection. I can answer anything in <strong>any language</strong>.
                        </p>
                        <div className="hero-stats">
                            <div className="hstat">
                                <span className="hstat-num">88%</span>
                                <span className="hstat-label">Creator Payout</span>
                            </div>
                            <div className="hstat">
                                <span className="hstat-num">$24,372</span>
                                <span className="hstat-label">More/Year vs Others</span>
                            </div>
                            <div className="hstat">
                                <span className="hstat-num">72hr</span>
                                <span className="hstat-label">DMCA Takedown</span>
                            </div>
                            <div className="hstat">
                                <span className="hstat-num">$0</span>
                                <span className="hstat-label">Fee on First $1K</span>
                            </div>
                        </div>
                        <div className="hero-chips">
                            <div className="hchip" onClick={() => onAsk('How does FanLabz work step by step?')}>🚀 How it works</div>
                            <div className="hchip" onClick={() => onAsk('How much more can I earn on FanLabz vs OnlyFans?')}>💸 Earnings comparison</div>
                            <div className="hchip" onClick={() => onAsk('What are all the ways I can earn money on FanLabz?')}>📦 6 ways to earn</div>
                            <div className="hchip" onClick={() => onAsk('How does DMCA protection work on FanLabz?')}>🛡️ Content protection</div>
                            <div className="hchip" onClick={() => onAsk('How does the agency dashboard work?')}>🏢 Agency tools</div>
                            <div className="hchip" onClick={() => onAsk('What is required for KYC verification on FanLabz?')}>✅ KYC process</div>
                            <div className="hchip" onClick={() => onAsk('¿Cómo funciona FanLabz y cómo puedo ganar dinero?')}>🇪🇸 Español</div>
                            <div className="hchip" onClick={openCalc}>📊 Earnings calculator</div>
                        </div>
                        {messages.length > 0 && showHome && (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 16px' }}>
                                <button type="button" className="continue-chat-btn" onClick={onContinue}>
                                    💬 Continue Conversation →
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {!showHome && messages.map((msg, idx) => (
                    <div key={idx} className={`msg ${msg.role === 'user' ? 'user' : 'bot'}`}>
                        <div className={`msg-av ${msg.role === 'user' ? 'user-av' : 'bot'}`}>
                            {msg.role === 'user' ? '👤' : '💸'}
                        </div>
                        <div className="msg-body">
                            <div className={`bubble ${msg.role === 'user' ? 'user' : 'bot'}`} 
                                 dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}>
                            </div>
                            <div className="msg-time">{msg.time}</div>
                        </div>
                    </div>
                ))}

                {busy && !showHome && (
                    <div className="msg bot" id="typing">
                        <div className="msg-av bot">💸</div>
                        <div className="msg-body">
                            <div className="typing-bubble">
                                <div className="tdot"></div>
                                <div className="tdot"></div>
                                <div className="tdot"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="input-area">
                <div className="input-box">
                    <textarea 
                        ref={inputRef}
                        id="chatInput" 
                        rows="1"
                        placeholder="Ask about payouts, PPV, subscriptions, DMCA, agencies... in any language"
                        onKeyDown={handleKeyDown} 
                        onInput={autoSize}
                    ></textarea>
                    <button className="send-btn" id="sendBtn" onClick={handleSend} disabled={busy}>➤</button>
                </div>
                <div className="input-hint">
                    <span>Enter to send · Shift+Enter for new line · Auto-detects language</span>
                    <span>info@fanlabz.com · fanlabz.com</span>
                </div>
            </div>
        </main>
    );
};

export default ChatArea;
