import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import Calculator from './components/Calculator';
import LeadModal from './components/LeadModal';
import useChat from './hooks/useChat';
import './index.css';

const DRAWER_BREAKPOINT = 1024;

function App() {
    const { messages, sendMessage, clearChat, busy } = useChat();
    const [isCalcOpen, setIsCalcOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [winW, setWinW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const narrow = winW <= DRAWER_BREAKPOINT;

    useEffect(() => {
        const onResize = () => setWinW(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        if (!narrow) setMobileMenuOpen(false);
    }, [narrow]);

    useEffect(() => {
        if (!narrow || !mobileMenuOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setMobileMenuOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [narrow, mobileMenuOpen]);

    const closeDrawer = useCallback(() => setMobileMenuOpen(false), []);

    const handleAsk = (text) => {
        setShowHome(false);
        sendMessage(text);
    };

    const sidebarAsk = (text) => {
        if (narrow) setMobileMenuOpen(false);
        handleAsk(text);
    };

    const sidebarOpenCalc = () => {
        if (narrow) setMobileMenuOpen(false);
        setIsCalcOpen(true);
    };

    const sidebarOpenModal = () => {
        if (narrow) setMobileMenuOpen(false);
        setIsModalOpen(true);
    };

    const handleClear = () => {
        clearChat();
        setShowHome(false);
    };

    return (
        <div
            className="app-container"
            style={{ display: 'flex', width: '100%', height: '100%', minHeight: '100dvh', position: 'fixed', inset: 0 }}
        >
            <Sidebar
                onAsk={sidebarAsk}
                openCalc={sidebarOpenCalc}
                openModal={sidebarOpenModal}
                narrow={narrow}
                drawerOpen={narrow && mobileMenuOpen}
                onCloseDrawer={closeDrawer}
            />

            <ChatArea
                messages={messages}
                sendMessage={sendMessage}
                busy={busy}
                onAsk={handleAsk}
                clearChat={handleClear}
                openCalc={() => setIsCalcOpen(true)}
                openModal={() => setIsModalOpen(true)}
                showHome={showHome}
                onGoHome={() => setShowHome(true)}
                onContinue={() => setShowHome(false)}
                narrow={narrow}
                onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
                mobileMenuOpen={mobileMenuOpen}
            />

            {narrow && mobileMenuOpen && (
                <button
                    type="button"
                    className="sidebar-backdrop"
                    aria-label="Close menu"
                    onClick={closeDrawer}
                />
            )}

            <Calculator isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />

            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default App;
