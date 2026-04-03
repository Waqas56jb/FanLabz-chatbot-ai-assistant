import React, { useState } from 'react';
import axios from 'axios';
import API_BASE from '../config/api';

const LeadModal = ({ isOpen, onClose, sessionId }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'Creator (New)',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const submitLead = async () => {
        if (!formData.name || !formData.email) {
            alert('Name and email are required');
            return;
        }

        try {
            await axios.post(`${API_BASE}/api/lead`, { ...formData, sessionId });
            setSubmitted(true);
            setTimeout(() => {
                onClose();
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', type: 'Creator (New)', message: '' });
            }, 3000);
        } catch (error) {
            console.error('Lead error:', error);
            alert('Error sending message. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className={`overlay ${isOpen ? 'open' : ''}`} id="overlay">
            <div className="modal">
                <div className="modal-top">
                    <div>
                        <div className="modal-title">💸 Connect with FanLabz</div>
                        <div className="modal-sub">We'll get back to you within 24 hours</div>
                    </div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div style={{ fontSize: '40px', marginBottom: '10px' }}>✅</div>
                        <h3 style={{ color: 'var(--purple)' }}>Message Sent!</h3>
                        <p style={{ color: 'var(--text-soft)', marginTop: '8px' }}>We'll be in touch soon.</p>
                    </div>
                ) : (
                    <>
                        <div className="field">
                            <label>Full Name *</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                        </div>
                        <div className="field">
                            <label>Email *</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                        </div>
                        <div className="field">
                            <label>Phone</label>
                            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                        </div>
                        <div className="field">
                            <label>I am a...</label>
                            <select id="type" value={formData.type} onChange={handleChange}>
                                <option value="Creator (New)">Creator — Looking to join FanLabz</option>
                                <option value="Creator (Migrating)">Creator — Moving from another platform</option>
                                <option value="Agency/Manager">Agency or Talent Manager</option>
                                <option value="Fan">Fan — Support question</option>
                                <option value="Business">Business — Partnership inquiry</option>
                                <option value="Press/Media">Press or Media</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Message (Optional)</label>
                            <textarea id="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..."></textarea>
                        </div>
                        <button className="modal-submit" onClick={submitLead}>📤 Send Message</button>
                        <div className="modal-links">
                            Or email directly: <a href="mailto:info@fanlabz.com">info@fanlabz.com</a> · <a href="https://fanlabz.com/signup" target="_blank" rel="noreferrer">Sign Up Free →</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LeadModal;
