
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ padding: '0 0 100px 0' }}>

            {/* Hero Section */}
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'radial-gradient(circle at center, rgba(217, 70, 239, 0.15) 0%, rgba(15, 15, 19, 0) 70%)',
                padding: '20px'
            }}>
                <div style={{
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--accent-primary)',
                    marginBottom: '10px'
                }}>Nail Studio by Kim</div>

                <h1 style={{
                    fontSize: '5rem',
                    lineHeight: '1',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    background: 'linear-gradient(to right, #fff, #e0e7ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(217, 70, 239, 0.3)'
                }}>
                    L'Univers <br />
                    <span style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '6rem',
                        background: 'var(--accent-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginLeft: '20px',
                        display: 'inline-block',
                        transform: 'rotate(-5deg)'
                    }}>d'Alma</span>
                </h1>

                <p style={{
                    color: 'var(--text-secondary)',
                    maxWidth: '400px',
                    marginBottom: '30px',
                    fontSize: '1.1rem'
                }}>
                    Révélez votre beauté jusqu'au bout des ongles.
                    Expertise, créativité et soin dans un écrin de détente.
                </p>

                <button
                    onClick={() => navigate('/book')}
                    className="btn-primary"
                    style={{ fontSize: '1.1rem', padding: '15px 40px', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    Prendre Rendez-vous <ArrowRight size={20} />
                </button>
            </div>

            {/* Services Preview */}
            <div style={{ padding: '20px' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Mes Prestations</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                    {['Gel X', 'Nail Art', 'Semi-permanent', 'Soin complet'].map((item, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                            <Star color="var(--accent-secondary)" size={24} fill="rgba(139, 92, 246, 0.2)" />
                            <div style={{ fontWeight: '600' }}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Portfolio Teaser (Mock Images) */}
            <div style={{ padding: '20px', marginTop: '40px' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Dernières Réalisations</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={{ height: '200px', background: '#333', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80" alt="Nail Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ height: '200px', background: '#333', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative' }}>
                        <img src="https://images.unsplash.com/photo-1632922267756-9b712429a54f?auto=format&fit=crop&w=400&q=80" alt="Manucure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a href="https://www.facebook.com/nailstudio.by.k.2024?locale=fr_FR" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent-secondary)' }}>Voir plus sur Facebook</a>
                </div>
            </div>

        </div>
    );
}
