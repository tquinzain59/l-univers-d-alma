
import { useState, useEffect } from 'react';
import { Calendar, Users, Image as ImageIcon, Search, Plus, MapPin, RefreshCw, ArrowLeft, ClipboardList, Camera, TrendingUp, DollarSign, UserPlus } from 'lucide-react';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('calendar');
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const API_KEY = import.meta.env.VITE_CALCOM_API_KEY;

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.cal.com/v1/bookings?apiKey=${API_KEY}&status=upcoming`);
            const data = await res.json();
            setBookings(data.bookings || []);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === 'calendar') fetchBookings();
    }, [activeTab]);

    const MOCK_CLIENTS = [
        {
            id: 1, name: 'Sophie Martin', points: 8, lastVisit: '2023-11-15', phone: '06 12 34 56 78',
            history: [
                { date: '15 novembre 2023', service: 'Pose complète', price: 50, notes: 'Rouge Bordeaux (OPI #25)', photos: [] },
                { date: '10 octobre 2023', service: 'Remplissage', price: 40, notes: 'Pink Nude, forme Amande', photos: [] }
            ]
        },
        {
            id: 2, name: 'Julie Dubois', points: 3, lastVisit: '2023-11-01', phone: '07 98 76 54 32',
            history: [
                { date: '01 novembre 2023', service: 'Semi-permanent', price: 30, notes: 'French classique', photos: [] }
            ]
        },
        {
            id: 3, name: 'Clara Bernard', points: 12, lastVisit: '2023-10-20', phone: '06 11 22 33 44',
            history: [
                { date: '20 octobre 2023', service: 'Nail Art', price: 60, notes: 'Motifs Halloween, Orange & Noir', photos: [] },
                { date: '25 septembre 2023', service: 'Pose complète', price: 50, notes: 'Bleu Roi', photos: [] }
            ]
        }
    ];

    const formatDate = (dateString, includeTime = true) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        if (includeTime) {
            options.hour = '2-digit';
            options.minute = '2-digit';
        }
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
    };

    return (
        <div className="container" style={{ padding: '80px 20px 100px' }}>
            <header style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Espace Pro</h1>
            </header>

            {/* Tabs */}
            {!selectedClient && (
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                    <button onClick={() => setActiveTab('calendar')} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: activeTab === 'calendar' ? 'var(--accent-primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'calendar' ? 'bold' : 'normal', background: 'none' }}>
                        <Calendar size={18} /> Agenda
                    </button>
                    <button onClick={() => setActiveTab('clients')} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: activeTab === 'clients' ? 'var(--accent-primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'clients' ? 'bold' : 'normal', background: 'none' }}>
                        <Users size={18} /> Clientes
                    </button>
                    <button onClick={() => setActiveTab('portfolio')} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: activeTab === 'portfolio' ? 'var(--accent-primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'portfolio' ? 'bold' : 'normal', background: 'none' }}>
                        <ImageIcon size={18} /> Portfolio
                    </button>
                    <button onClick={() => setActiveTab('business')} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: activeTab === 'business' ? 'var(--accent-primary)' : 'var(--text-secondary)', fontWeight: activeTab === 'business' ? 'bold' : 'normal', background: 'none' }}>
                        <TrendingUp size={18} /> Business
                    </button>
                </div>
            )}

            <div className="glass-panel" style={{ padding: '20px', minHeight: '400px' }}>

                {/* CALENDAR TAB */}
                {activeTab === 'calendar' && !selectedClient && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '1.2rem' }}>RDV à venir (Cal.com)</h2>
                            <button onClick={fetchBookings} style={{ background: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <RefreshCw size={14} className={loading ? 'spin' : ''} /> Actualiser
                            </button>
                        </div>
                        {loading && <p>Chargement...</p>}
                        {!loading && bookings.length === 0 && <p style={{ opacity: 0.6 }}>Aucun rendez-vous à venir.</p>}
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {bookings.map(apt => (
                                <div key={apt.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', borderLeft: `4px solid ${apt.status === 'ACCEPTED' || apt.status === 'CONFIRMED' ? '#10b981' : '#f59e0b'}` }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{formatDate(apt.startTime)}</div>
                                        <div style={{ fontSize: '1rem', marginTop: '5px' }}>{apt.title}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{apt.attendees?.[0]?.name || 'Inconnu'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CLIENTS TAB */}
                {activeTab === 'clients' && !selectedClient && (
                    <div>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                            <input placeholder="Rechercher une cliente..." style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                        </div>
                        <div style={{ display: 'grid', gap: '10px' }}>
                            {MOCK_CLIENTS.map(client => (
                                <div
                                    key={client.id}
                                    onClick={() => setSelectedClient(client)}
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', transition: 'background 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{client.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Dernière visite: {formatDate(client.lastVisit, false)}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{client.points} pts</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CLIENT DETAILS VIEW */}
                {selectedClient && (
                    <div>
                        <button onClick={() => setSelectedClient(null)} style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', background: 'none', color: 'var(--text-secondary)' }}>
                            <ArrowLeft size={16} /> Retour liste
                        </button>

                        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '5px' }}>{selectedClient.name}</h2>
                            <div style={{ color: 'var(--text-secondary)' }}>Tél: {selectedClient.phone}</div>
                            <div style={{ marginTop: '10px', display: 'inline-block', padding: '5px 10px', background: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Fidélité: {selectedClient.points} points
                            </div>
                        </div>

                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                            <ClipboardList size={20} /> Historique des prestations
                        </h3>

                        <div style={{ display: 'grid', gap: '15px' }}>
                            {selectedClient.history.map((record, i) => (
                                <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{record.service}</div>
                                        <div style={{ opacity: 0.6 }}>{record.date}</div>
                                    </div>

                                    {/* Notes / Colors logic */}
                                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '4px', borderLeft: '3px solid var(--accent-secondary)' }}>
                                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '4px', opacity: 0.7 }}>Notes / Couleurs</div>
                                        <div>{record.notes}</div>
                                    </div>

                                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                                        {/* Placeholder for photos */}
                                        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', padding: '5px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                                            <Camera size={14} /> Voir photos (0)
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* PORTFOLIO TAB */}
                {activeTab === 'portfolio' && !selectedClient && (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <p>Gestion du portfolio ici</p>
                    </div>
                )}

                {/* BUSINESS TAB */}
                {activeTab === 'business' && !selectedClient && (
                    <div>
                        <h2 style={{ marginBottom: '20px' }}>Performances du Mois</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>

                            {/* CA */}
                            <div style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#10b981' }}>
                                    <DollarSign size={24} />
                                    <span style={{ fontWeight: 'bold' }}>Chiffre d'Affaires</span>
                                </div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>1 250 €</div>
                                <div style={{ fontSize: '0.9rem', color: '#10b981', marginTop: '5px' }}>+15% vs mois dernier</div>
                            </div>

                            {/* Clients */}
                            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                                    <Users size={24} />
                                    <span style={{ fontWeight: 'bold' }}>Total Clientes</span>
                                </div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>24</div>
                                <div style={{ fontSize: '0.9rem', color: 'gray', marginTop: '5px' }}>Visites ce mois-ci</div>
                            </div>

                            {/* New Clients */}
                            <div style={{ padding: '20px', background: 'rgba(217, 70, 239, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(217, 70, 239, 0.2)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--accent-primary)' }}>
                                    <UserPlus size={24} />
                                    <span style={{ fontWeight: 'bold' }}>Nouvelles</span>
                                </div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>5</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginTop: '5px' }}>Bienvenue !</div>
                            </div>
                        </div>

                        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)' }}>
                            <h3 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Objectif Mensuel</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9rem' }}>
                                <span>1 250 €</span>
                                <span>2 000 €</span>
                            </div>
                            <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                                <div style={{ width: '62.5%', height: '100%', background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))' }}></div>
                            </div>
                            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'gray', textAlign: 'center' }}>
                                62.5% de l'objectif atteint
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
