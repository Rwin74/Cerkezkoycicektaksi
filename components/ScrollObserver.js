"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        
        if (reveals.length === 0) return;

        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const delay = e.target.dataset.delay ? parseInt(e.target.dataset.delay) : 0;
                    setTimeout(() => {
                        e.target.classList.add('revealed');
                    }, delay);
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(r => revealObs.observe(r));

        return () => {
            reveals.forEach(r => revealObs.unobserve(r));
        };
    }, [pathname]);

    return null;
}
