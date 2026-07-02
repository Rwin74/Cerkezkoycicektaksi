"use client";

import { useState, useEffect } from 'react';
import subelerData from '@/data/subeler.json';

// Haversine formula to calculate distance in km
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export default function Branches() {
    const [branches, setBranches] = useState(subelerData.map(b => ({ ...b, distance: null })));
    const [userLocation, setUserLocation] = useState(null);
    const [closestBranchId, setClosestBranchId] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });

                    let minDistance = Infinity;
                    let closestId = null;

                    const updatedBranches = subelerData.map(branch => {
                        const dist = calculateDistance(latitude, longitude, branch.lat, branch.lng);
                        if (dist < minDistance) {
                            minDistance = dist;
                            closestId = branch.id;
                        }
                        return { ...branch, distance: dist.toFixed(1) };
                    });

                    // Sort so the closest is first
                    updatedBranches.sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
                    
                    setBranches(updatedBranches);
                    setClosestBranchId(closestId);
                },
                (error) => {
                    console.log("Geolocation error or denied:", error);
                }
            );
        }
    }, []);

    return (
        <section className="section section--gray" style={{padding: '60px 0'}}>
            <div className="container">
                <div className="sh sh--center reveal">
                    <span className="sh__overtitle">7/24 Kesintisiz Hizmet</span>
                    <h2 className="sh__title">Şubelerimiz <em>(Duraklarımız)</em></h2>
                </div>

                <div className="grid grid--2 stagger" style={{alignItems: 'stretch'}}>
                    {branches.map((branch, i) => {
                        const isClosest = branch.id === closestBranchId;
                        return (
                            <div 
                                key={branch.id} 
                                className="sube-card reveal" 
                                data-delay={i * 100}
                                style={{
                                    background: '#fff',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: isClosest ? '0 20px 40px rgba(255, 204, 0, 0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
                                    border: isClosest ? '2px solid var(--taxi-yellow)' : '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative'
                                }}
                            >
                                {isClosest && (
                                    <div style={{
                                        background: 'var(--taxi-yellow)',
                                        color: 'var(--dark-base)',
                                        fontWeight: '800',
                                        fontSize: '0.85rem',
                                        padding: '8px 16px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px'
                                    }}>
                                        <span>📍 Size en yakın şubemiz</span>
                                        {branch.distance && <span style={{background: 'rgba(0,0,0,0.1)', padding: '2px 8px', borderRadius: '12px'}}>{branch.distance} km</span>}
                                    </div>
                                )}

                                {/* Harita Embed */}
                                <div style={{height: '250px', width: '100%', background: '#eee'}}>
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        style={{border:0, display: 'block'}} 
                                        loading="lazy" 
                                        allowFullScreen 
                                        src={branch.embedSrc}>
                                    </iframe>
                                </div>

                                <div style={{padding: '32px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                                    <h3 style={{fontSize: '1.5rem', marginBottom: '8px', color: 'var(--dark-base)'}}>{branch.title}</h3>
                                    <p style={{color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem'}}>{branch.address}</p>
                                    
                                    <div style={{marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                                        <a href={`tel:${branch.phoneLink}`} className="btn btn--primary" style={{flex: 1, minWidth: '160px', padding: '14px', fontSize: '1.1rem'}}>
                                            📞 Hemen Ara
                                        </a>
                                        <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{flex: 1, minWidth: '160px', padding: '14px', fontSize: '1.1rem'}}>
                                            📍 Yol Tarifi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .sube-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.1) !important;
                }
            `}} />
        </section>
    );
}
