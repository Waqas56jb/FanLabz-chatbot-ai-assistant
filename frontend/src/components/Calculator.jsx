import React, { useState } from 'react';
import axios from 'axios';

const Calculator = ({ isOpen, onClose }) => {
    const [inputs, setInputs] = useState({
        subscribers: 1000,
        subPrice: 15,
        ppvSales: 25,
        tips: 500
    });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs(prev => ({ ...prev, [id]: value }));
    };

    const runCalc = async () => {
        try {
            const res = await axios.post('/api/calculate', inputs);
            setResult(res.data);
        } catch (error) {
            console.error('Calc error:', error);
        }
    };

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className={`calc-panel ${isOpen ? 'show' : ''}`} id="calcPanel">
            <div className="calc-header">
                <h3>💸 Earnings Calculator</h3>
                <button className="close-calc" onClick={onClose}>✕</button>
            </div>
            <div className="calc-body">
                <div className="calc-field">
                    <label className="calc-label">Subscribers</label>
                    <input className="calc-input" type="number" id="subscribers" value={inputs.subscribers} onChange={handleChange} min="0" />
                </div>
                <div className="calc-field">
                    <label className="calc-label">Monthly Sub Price ($)</label>
                    <input className="calc-input" type="number" id="subPrice" value={inputs.subPrice} onChange={handleChange} min="0" />
                </div>
                <div className="calc-field">
                    <label className="calc-label">PPV Sales/Month</label>
                    <input className="calc-input" type="number" id="ppvSales" value={inputs.ppvSales} onChange={handleChange} min="0" />
                </div>
                <div className="calc-field">
                    <label className="calc-label">Monthly Tips ($)</label>
                    <input className="calc-input" type="number" id="tips" value={inputs.tips} onChange={handleChange} min="0" />
                </div>
                <button className="calc-go" onClick={runCalc}>Calculate My Earnings 🚀</button>
            </div>
            {result && (
                <div className="calc-result show" id="calcResult">
                    <div className="result-compare">
                        <div className="result-box fl">
                            <div className="rb-label">FanLabz</div>
                            <span className="rb-amount" id="rFL">{formatCurrency(result.fanlabz)}</span>
                            <div className="rb-rate">88% kept</div>
                        </div>
                        <div className="result-box">
                            <div className="rb-label">Others</div>
                            <span className="rb-amount" id="rOT">{formatCurrency(result.other)}</span>
                            <div className="rb-rate">70-80% kept</div>
                        </div>
                    </div>
                    <div className="result-diff" id="rDiff">
                        🎯 You earn {formatCurrency(result.monthlyDiff)} MORE per month!
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calculator;
