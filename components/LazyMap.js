"use client";
import { useState, useEffect } from 'react';

export default function LazyMap({ src, title }) {
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        const handleInteraction = () => {
            setLoadMap(true);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
        
        // Timeout as a fallback to load map even if no interaction occurs
        const timer = setTimeout(() => {
            setLoadMap(true);
        }, 3500);

        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('mousemove', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', background: '#f5f6fa', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!loadMap && (
                <div style={{ color: '#a4b0be', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '24px' }}>📍</span>
                    Harita Yükleniyor...
                </div>
            )}
            {loadMap && (
                <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    allowFullScreen 
                    loading="lazy" 
                    title={title || "Google Map"}
                    src={src}>
                </iframe>
            )}
        </div>
    );
}
