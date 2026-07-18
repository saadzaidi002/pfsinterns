import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './index.css';


        
        
        

        const NavBar = () => {
            const location = useLocation();
            const navigate = useNavigate();
            
            const isActive = (path) => location.pathname === path;

            return (
                <nav className="fixed top-0 left-0 w-full z-50 bg-surface dark:bg-surface-container-low border-b border-white/10">
                    <div className="flex justify-between items-center h-16 px-4 md:px-margin-desktop max-w-container-max mx-auto overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-6 min-w-max">
                            <Link to="/" className="font-headline-lg text-xl md:text-headline-lg font-bold text-primary dark:text-primary-fixed">SpamLens AI</Link>
                            <div className="flex gap-4 md:gap-6">
                                <Link 
                                    to="/" 
                                    className={`${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'} pb-1 font-bold text-sm md:text-body-md hover:text-primary transition-colors`}
                                >Overview</Link>
                                <Link 
                                    to="/analysis" 
                                    className={`${isActive('/analysis') ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'} pb-1 font-bold text-sm md:text-body-md hover:text-primary transition-colors`}
                                >Analysis</Link>
                                <Link 
                                    to="/about" 
                                    className={`${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'} pb-1 font-bold text-sm md:text-body-md hover:text-primary transition-colors`}
                                >Developer</Link>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-4 pl-4 min-w-max">
                            <button 
                                onClick={() => navigate('/analysis')}
                                className="bg-primary text-on-primary px-4 md:px-6 py-1.5 md:py-2 rounded text-sm md:text-body-md transition-all duration-200 ease-in-out active:scale-95 hover:brightness-110"
                            >Try Demo</button>
                        </div>
                    </div>
                </nav>
            );
        };

        const Footer = () => (
            <footer className="w-full py-8 px-4 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 bg-primary-container dark:bg-surface-container-lowest border-t border-white/5">
                <div className="flex flex-col gap-2">
                    <span className="font-label-mono text-label-mono font-black text-on-surface">SPAMLENS AI</span>
                    <p className="font-body-sm text-xs md:text-body-sm text-on-surface-variant dark:text-on-secondary-container">© 2024 SpamLens NLP Research. Built by Saad Hussain Zaidi.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <a className="font-label-mono text-xs md:text-label-mono text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="https://github.com/saadzaidi002/Spam-Detection-App#readme" target="_blank" rel="noreferrer">Documentation</a>
                    <a className="font-label-mono text-xs md:text-label-mono text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="https://github.com/saadzaidi002/Spam-Detection-App" target="_blank" rel="noreferrer">Source Code</a>
                    <a className="font-label-mono text-xs md:text-label-mono text-on-surface-variant dark:text-on-secondary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="https://www.linkedin.com/in/saad-hussain-zaidi/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </footer>
        );

        const OverviewPage = () => {
            const navigate = useNavigate();
            return (
                <div className="pt-24 md:pt-32 pb-16 px-4 md:px-margin-desktop max-w-container-max mx-auto">
                    <section className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <h1 className="font-headline-xl text-4xl md:text-headline-xl text-white mb-6 leading-tight">
                            SpamLens AI: Precision NLP for <span className="text-primary">Spam Detection</span>
                        </h1>
                        <p className="text-on-secondary-container font-body-md text-sm md:text-body-md max-w-xl mx-auto mb-8 md:mb-10">
                            Leveraging advanced Natural Language Processing to distinguish between legitimate communication and malicious spam with clinical precision. Built for transparency, performance, and enterprise-grade reliability.
                        </p>
                        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center px-4 sm:px-0">
                            <button onClick={() => navigate('/analysis')} className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-bold transition-all hover:brightness-110 active:scale-95 w-full sm:w-auto">Explore Model</button>
                            <a href="https://github.com/saadzaidi002/Spam-Detection-App" target="_blank" rel="noreferrer" className="inline-block border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/5 transition-all w-full sm:w-auto text-center">View Research Data</a>
                        </div>
                    </section>

                    <section className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                            <div className="md:col-span-2 card-gradient p-8 rounded-xl flex flex-col justify-between group overflow-hidden relative">
                                <div className="relative z-10">
                                    <span className="font-label-mono text-label-mono text-on-secondary-container block mb-2 uppercase tracking-widest">Model Precision</span>
                                    <h2 className="font-headline-lg text-headline-lg text-success-ham font-bold">98.2% Accuracy</h2>
                                    <p className="text-on-surface-variant mt-4 font-body-sm text-body-sm max-w-xs">High-fidelity classification achieving near-perfect scores on the standard SMS Spam Research dataset.</p>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings: "'FILL' 1"}}>target</span>
                                </div>
                            </div>
                            <div className="card-gradient p-8 rounded-xl flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-warning-spam text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>dangerous</span>
                                <span className="font-headline-lg text-headline-lg text-white font-bold">0.8%</span>
                                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-1">False Positives</span>
                            </div>
                            <div className="card-gradient p-8 rounded-xl flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>database</span>
                                <span className="font-headline-lg text-headline-lg text-white font-bold">5.5k+</span>
                                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-1">Samples Analyzed</span>
                            </div>
                        </div>
                    </section>

                    <section className="mb-24 max-w-4xl mx-auto">
                        <h2 className="font-headline-lg text-headline-lg text-white mb-6 text-center">Binary Classification Framework</h2>
                        <p className="text-on-secondary-container mb-6 text-center">SpamLens AI is an NLP-driven research project focused on binary classification. The goal is to mathematically determine the intent of a text message and categorize it into two distinct classes:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-lg bg-surface-container-high border-l-4 border-success-ham">
                                <span className="material-symbols-outlined text-success-ham">check_circle</span>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider">Class: Ham</h4>
                                    <p className="text-on-surface-variant font-body-sm text-body-sm">Legitimate, safe messages intended for genuine communication.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-surface-container-high border-l-4 border-warning-spam">
                                <span className="material-symbols-outlined text-warning-spam">report</span>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider">Class: Spam</h4>
                                    <p className="text-on-surface-variant font-body-sm text-body-sm">Unsolicited, malicious, or commercial bulk messages designed to deceive or annoy.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        };

        const AnalysisPage = () => {
            const [text, setText] = useState("");
            const [isAnalyzing, setIsAnalyzing] = useState(false);
            const [results, setResults] = useState<{isSpam: boolean, confidence: number} | null>(null);
            const [error, setError] = useState<string | null>(null);

            const handleAnalyze = async () => {
                if (!text.trim()) return;
                setIsAnalyzing(true);
                setResults(null);
                setError(null);
                
                try {
                    const res = await fetch('http://127.0.0.1:5003/predict', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message: text })
                    });
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.error || 'Failed to predict');
                    
                    const isSpam = data.prediction === 1;
                    const spamProb = isSpam ? data.spam_probability : (1 - data.spam_probability);
                    
                    setResults({ 
                        isSpam, 
                        confidence: Math.round(spamProb * 100) 
                    });
                } catch (e: any) {
                    setError(e.message);
                } finally {
                    setIsAnalyzing(false);
                }
            };

            return (
                <div className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-margin-desktop max-w-4xl mx-auto w-full flex flex-col gap-gutter">
                    <section className="w-full space-y-gutter">
                        <div className="glass-card p-6 md:p-8 rounded-xl min-h-[300px] md:min-h-[400px] flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="font-headline-lg text-2xl md:text-headline-lg text-primary">Live Inference</h1>
                                <div className="flex gap-2">
                                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors" onClick={() => setText("")}><span className="material-symbols-outlined">delete</span></button>
                                </div>
                            </div>
                            <textarea 
                                className="w-full flex-grow min-h-[200px] md:min-h-[300px] bg-surface-container-lowest border border-white/5 rounded-lg p-4 md:p-6 text-on-surface font-body-md text-sm md:text-body-md focus:border-primary outline-none resize-none" 
                                placeholder="Paste SMS or Email content here to analyze..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <div className="mt-6 flex justify-end">
                                <button 
                                    className={`bg-primary text-on-primary font-bold py-3 md:py-4 px-8 md:px-12 w-full md:w-auto rounded-lg flex justify-center items-center gap-3 transition-all active:scale-95 ${isAnalyzing ? 'opacity-70' : ''}`}
                                    onClick={handleAnalyze}
                                    disabled={isAnalyzing}
                                >
                                    {isAnalyzing ? <span className="material-symbols-outlined animate-spin">refresh</span> : <span className="material-symbols-outlined">analytics</span>}
                                    <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Content'}</span>
                                </button>
                            </div>
                            {error && (
                                <div className="mt-4 p-4 rounded-lg bg-warning-spam/20 text-warning-spam border border-warning-spam">
                                    {error}
                                </div>
                            )}
                        </div>

                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-gutter transition-all duration-500 ${results ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
                            <div className={`glass-card p-8 rounded-xl border-l-4 ${results ? (results.isSpam ? 'border-warning-spam' : 'border-success-ham') : 'border-primary'}`}>
                                <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-2">Classification Result</p>
                                <h3 className={`font-headline-xl text-headline-xl ${results ? (results.isSpam ? 'text-warning-spam' : 'text-success-ham') : 'text-on-surface'}`}>
                                    {results ? (results.isSpam ? 'Spam' : 'Ham') : '---'}
                                </h3>
                            </div>
                            <div className="glass-card p-8 rounded-xl">
                                <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-2">Confidence Score</p>
                                <div className="flex items-end gap-3">
                                    <h3 className="font-headline-xl text-headline-xl text-primary">{results ? `${results.confidence}%` : '0%'}</h3>
                                    <div className="flex-grow h-2 bg-surface-container-highest rounded-full mb-4 overflow-hidden">
                                        <div className={`h-full transition-all duration-1000 ${results ? (results.isSpam ? 'bg-warning-spam' : 'bg-success-ham') : 'bg-primary'}`} style={{width: `${results ? results.confidence : 0}%`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        };

        const AboutPage = () => (
            <div className="max-w-4xl mx-auto px-4 md:px-margin-desktop py-24 md:py-32">
                <div className="glass-card p-6 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                    <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-surface-container-highest shadow-2xl">
                        <img className="w-full h-full object-cover" src="/about-image.jpeg" alt="Saad Hussain Zaidi" />
                    </div>
                    
                    <div className="flex-col justify-center flex-grow space-y-4 md:space-y-6 text-center md:text-left">
                        <div>
                            <h1 className="font-headline-xl text-3xl md:text-headline-xl text-white mb-2">Saad Hussain Zaidi</h1>
                            <p className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm">Machine Learning Specialist & AI Researcher</p>
                        </div>
                        
                        <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed max-w-lg">
                            Dedicated to engineering transparent NLP solutions and high-performance data architectures. Bridging the gap between complex algorithmic research and production-grade software engineering for the modern enterprise.
                        </p>
                        
                        <div className="pt-6 border-t border-white/10">
                            <span className="font-label-mono text-label-mono text-on-surface-variant block mb-3 uppercase tracking-widest">Core Competencies</span>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-surface-container-high text-on-surface text-xs md:text-sm rounded-full border border-white/5 shadow-sm">NLP / Transformers</span>
                                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-surface-container-high text-on-surface text-xs md:text-sm rounded-full border border-white/5 shadow-sm">Deep Learning</span>
                                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-surface-container-high text-on-surface text-xs md:text-sm rounded-full border border-white/5 shadow-sm">React & Vite</span>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/saad-hussain-zaidi/" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold transition-all active:scale-95 w-full sm:w-auto">
                                <span className="material-symbols-outlined text-[20px]">link</span>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/saadzaidi002" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-bold transition-all hover:brightness-110 active:scale-95 w-full sm:w-auto">
                                <span className="material-symbols-outlined text-[20px]">code</span>
                                <span>Portfolio</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );

        const App = () => {
            return (
                <Router>
                    <div className="min-h-screen flex flex-col">
                        <NavBar />
                        <main className="flex-grow pt-16">
                            <Routes>
                                <Route path="/" element={<OverviewPage />} />
                                <Route path="/analysis" element={<AnalysisPage />} />
                                <Route path="/about" element={<AboutPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            );
        };
        
    
export default App;
