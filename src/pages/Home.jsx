
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Clock, MapPin, Check } from 'lucide-react';
import img1 from '../assets/images/portfolio-1.jpg';
import img2 from '../assets/images/portfolio-2.jpg';
import img3 from '../assets/images/portfolio-3.jpg';
import img4 from '../assets/images/portfolio-4.jpg';

const SERVICES = [
    {
        category: 'MAINS',
        items: [
            { name: 'Pose complète', desc: 'Pose de gel en rallongement ou sur ongle naturel', duration: '1h 30min', price: '60 €' },
            { name: 'Remplissage', desc: 'Comblage de la repousse (max 4 semaines)', duration: '1h 30min', price: '55 €' },
            { name: 'Pose Américaine (Gel X)', desc: 'Extension rapide, résultat naturel', duration: '1h 15min', price: '50 €' }
        ]
    },
    {
        category: 'PIEDS',
        items: [
            { name: 'Beauté des pieds', desc: 'Soin complet + vernis classique', duration: '45min', price: '35 €' },
            { name: 'Pose complète pieds', desc: 'Pose de gel sur orteils', duration: '1h', price: '45 €' }
        ]
    },
    {
        category: 'DÉPOSE & SOINS',
        items: [
            { name: 'Dépose + Soin', desc: 'Retrait en douceur et soin hydratant', duration: '30min', price: '20 €' }
        ]
    }
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ padding: '0 0 100px 0' }}>

            {/* Hero Section */}
            <div style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'radial-gradient(circle at center, rgba(217, 70, 239, 0.15) 0%, rgba(15, 15, 19, 0) 70%)',
                padding: '20px',
                marginBottom: '40px'
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
                </p>
            </div>

            {/* Main Content Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '0 20px' }}>

                {/* Left Column: Service List */}
                <div style={{ gridColumn: 'span 2' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>Choix de la prestation</h2>

                    {SERVICES.map((cat, i) => (
                        <div key={i} style={{ marginBottom: '30px' }}>
                            <h3 style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '15px',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '10px'
                            }}>
                                {cat.category}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {cat.items.map((item, j) => (
                                    <div key={j} className="glass-panel" style={{
                                        padding: '20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'border-color 0.2s',
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => navigate('/book')}
                                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                                    >
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>{item.name}</div>
                                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', textAlign: 'right' }}>
                                            <div style={{ display: 'none', md: 'block' }}>
                                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.duration}</div>
                                                <div style={{ fontWeight: 'bold' }}>{item.price}</div>
                                            </div>

                                            {/* Mobile friendly view */}
                                            <div style={{ textAlign: 'right' }} className="mobile-price">
                                                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.duration}</div>
                                            </div>

                                            <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                                                Choisir
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Sidebar */}
                <div style={{ gridColumn: 'span 1' }}>
                    {/* Reviews Card */}
                    <div className="glass-panel" style={{ padding: '25px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                            <span style={{ fontWeight: 'bold' }}>Note globale</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Avis</span>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div style={{ background: 'var(--bg-secondary)', padding: '15px', borderRadius: 'var(--radius-sm)', textAlign: 'center', minWidth: '80px' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1' }}>5,0</div>
                                <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', marginTop: '5px' }}>
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="var(--accent-primary)" color="var(--accent-primary)" />)}
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: '5px' }}><strong>Excellence</strong></div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Basé sur 45 avis</div>
                            </div>
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div className="glass-panel" style={{ padding: '25px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Horaires d'ouverture</h3>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
                            {[
                                { d: 'Lundi', h: '09:00 - 19:00' },
                                { d: 'Mardi', h: '09:00 - 19:00' },
                                { d: 'Mercredi', h: 'Fermé', closed: true },
                                { d: 'Jeudi', h: '09:00 - 19:00' },
                                { d: 'Vendredi', h: '09:00 - 20:00' },
                                { d: 'Samedi', h: '10:00 - 18:00' },
                                { d: 'Dimanche', h: 'Fermé', closed: true },
                            ].map((slot, i) => (
                                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', opacity: slot.closed ? 0.5 : 1 }}>
                                    <span>{slot.d}</span>
                                    <span style={{ fontWeight: slot.closed ? 'normal' : 'bold' }}>{slot.h}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Portfolio Teaser (Real Images) */}
            <div style={{ padding: '20px', marginTop: '60px' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Dernières Réalisations</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    {[img1, img2, img3, img4].map((img, i) => (
                        <div key={i} style={{ aspectRatio: '1/1', background: '#333', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                            <img src={img} alt={`Réalisation ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                    <a href="https://www.facebook.com/nailstudio.by.k.2024?locale=fr_FR" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent-secondary)' }}>Voir plus sur Facebook</a>
                </div>
            </div>

        </div>
    );
}
