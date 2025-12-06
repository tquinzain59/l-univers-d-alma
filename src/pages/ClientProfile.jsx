
import { useAuth } from '../lib/AuthContext';
import { Navigate } from 'react-router-dom';
import { Gift, Calendar as CalendarIcon } from 'lucide-react';

export default function ClientProfile() {
    const { user, role, signOut, loading } = useAuth();

    if (loading) return <div>Chargement...</div>;
    if (!user) return <Navigate to="/login" />;

    // Mock Data
    const LOYALTY_POINTS = 8;
    const HISTORY = [
        { date: '15 Nov 2023', service: 'Pose complète', price: 50 },
        { date: '20 Oct 2023', service: 'Remplissage', price: 40 },
    ];

    return (
        <div className="container" style={{ padding: '80px 20px 100px' }}>
            <h1>Mon Profil</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>{user.email}</p>

            {/* Loyalty Card */}
            <div className="glass-panel" style={{
                padding: '20px', marginBottom: '20px',
                background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                border: '1px solid rgba(255,255,255,0.2)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Gift size={24} color="var(--accent-primary)" />
                    <h2 style={{ fontSize: '1.2rem' }}>Mes avantages</h2>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{LOYALTY_POINTS} / 10</div>
                <p style={{ opacity: 0.8 }}>Plus que 2 rendez-vous pour 5€ offerts !</p>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginTop: '10px' }}>
                    <div style={{ width: '80%', height: '100%', background: 'white', borderRadius: '4px' }}></div>
                </div>
            </div>

            {/* History */}
            <div className="glass-panel" style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Historique</h2>
                <div style={{ display: 'grid', gap: '15px' }}>
                    {HISTORY.map((item, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <CalendarIcon size={16} color="gray" />
                                <span>{item.service}</span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div>{item.price}€</div>
                                <div style={{ fontSize: '0.8rem', color: 'gray' }}>{item.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={signOut}
                style={{ marginTop: '30px', background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', padding: '10px 20px', borderRadius: 'var(--radius-sm)', width: '100%' }}
            >
                Se déconnecter
            </button>
        </div>
    );
}
