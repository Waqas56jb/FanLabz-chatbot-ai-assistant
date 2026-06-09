import React from 'react';

const Sidebar = ({ onAsk, openCalc, openModal, narrow, drawerOpen, onCloseDrawer }) => {
    const asideClass = [
        'sidebar',
        narrow ? 'sidebar-drawer' : '',
        narrow && drawerOpen ? 'mobile-open' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <aside className={asideClass} aria-hidden={narrow ? !drawerOpen : undefined}>
            <div className="sidebar-brand">
                <div className="sidebar-brand-top">
                    <div className="brand-row">
                        <div className="brand-icon">💸</div>
                        <div className="brand-text">
                            <div className="brand-name">fanLabz</div>
                            <div className="brand-tagline">Elevate your brand</div>
                        </div>
                    </div>
                    {narrow && (
                        <button
                            type="button"
                            className="sidebar-drawer-close"
                            aria-label="Close menu"
                            onClick={onCloseDrawer}
                        >
                            ✕
                        </button>
                    )}
                </div>
                <span className="ai-online">
                    <span className="online-dot"></span>FanLabz AI Online
                </span>
            </div>

            {/* LIVE STATS SNAPSHOT */}
            <div className="earnings-snapshot">
                <div className="snapshot-label">💡 FanLabz vs Others</div>
                <div className="snapshot-stat">
                    <span className="snapshot-num">88%</span>
                    <span className="snapshot-unit">payout rate</span>
                </div>
                <div className="snapshot-desc">
                    Keep more of what you earn — higher than OnlyFans (80%), Fansly & Fanvue.
                </div>
                <div className="snapshot-badges">
                    <span className="sbadge pink">Instant Payouts</span>
                    <span className="sbadge purple">No Fee First $1K</span>
                    <span className="sbadge green">PCI Secure</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-section">For Creators</div>
                <div className="nav-item" onClick={() => onAsk('How do I start earning on FanLabz?')}>
                    <span className="ni">🚀</span> Get Started
                </div>
                <div className="nav-item" onClick={() => onAsk('How much can I earn on FanLabz vs OnlyFans?')}>
                    <span className="ni">💸</span> Earnings & Payouts
                </div>
                <div className="nav-item" onClick={() => onAsk('What are all the ways to earn money on FanLabz?')}>
                    <span className="ni">📦</span> Revenue Streams
                </div>
                <div className="nav-item" onClick={() => onAsk('How does FanLabz protect my content from piracy?')}>
                    <span className="ni">🛡️</span> Safety & DMCA
                </div>
                <div className="nav-item" onClick={openCalc}>
                    <span className="ni">📊</span> Earnings Calculator
                </div>
                <div className="nav-item" onClick={() => onAsk('What smart marketing tools does FanLabz offer?')}>
                    <span className="ni">🧠</span> Marketing Tools
                </div>
                <div className="nav-item" onClick={() => onAsk('How do instant and weekly payouts work?')}>
                    <span className="ni">⚡</span> Payout Options
                </div>
                <div className="nav-item" onClick={() => onAsk('What KYC verification is required to become a creator?')}>
                    <span className="ni">✅</span> KYC Verification
                </div>

                <div className="nav-section">Platform</div>
                <div className="nav-item" onClick={() => onAsk('How does the FanLabz agency dashboard work for talent managers?')}>
                    <span className="ni">🏢</span> Agency Dashboard
                </div>
                <div className="nav-item" onClick={() => onAsk('What content categories are available on FanLabz?')}>
                    <span className="ni">🎨</span> Categories
                </div>
                <div className="nav-item" onClick={() => onAsk('What are the terms of service and content rules?')}>
                    <span className="ni">📋</span> Policies & Terms
                </div>
                <div className="nav-item" onClick={() => onAsk('How does FanLabz compare to OnlyFans, Fansly, and Fanvue?')}>
                    <span className="ni">🆚</span> Platform Compare
                </div>
                <div className="nav-item" onClick={openModal}>
                    <span className="ni">💬</span> Talk to Team
                </div>
            </nav>

            <div className="sidebar-footer">
                <button className="start-btn" onClick={() => window.open('https://fanlabz.com/signup', '_blank')}>
                    🎯 Start Earning Free
                </button>
                <div className="contact-link">
                    Questions? <a href="mailto:info@fanlabz.com">info@fanlabz.com</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
