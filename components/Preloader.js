"use client";
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem('visited')) {
            setVisible(true);
            const hide = () => {
                setVisible(false);
                sessionStorage.setItem('visited', 'true');
            };
            const timer = setTimeout(hide, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!visible) return null;

    return (
        <div className={`preloader ${!visible ? 'hidden' : ''}`}>
            <div className="preloader__inner">
                <div className="preloader__logo">Çiçek <span>Taksi</span></div>
                <div className="preloader__bar"><div className="preloader__bar-inner"></div></div>
            </div>
        </div>
    );
}
