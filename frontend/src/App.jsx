import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import Calculator from './components/Calculator';
import LeadModal from './components/LeadModal';
import useChat from './hooks/useChat';
import './index.css';

function App() {
    const { messages, sendMessage, clearChat, busy } = useChat();
    const [isCalcOpen, setIsCalcOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAsk = (text) => {
        sendMessage(text);
    };

    return (
        <div className="app-container" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <Sidebar 
                onAsk={handleAsk} 
                openCalc={() => setIsCalcOpen(true)} 
                openModal={() => setIsModalOpen(true)} 
            />
            
            <ChatArea 
                messages={messages} 
                sendMessage={sendMessage} 
                busy={busy} 
                onAsk={handleAsk}
                clearChat={clearChat}
                openCalc={() => setIsCalcOpen(true)}
                openModal={() => setIsModalOpen(true)}
            />

            <Calculator 
                isOpen={isCalcOpen} 
                onClose={() => setIsCalcOpen(false)} 
            />

            <LeadModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}

export default App;
