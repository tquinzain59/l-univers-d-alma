
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, User, Shield } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

export default function Navbar() {
    const { user, role } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'var(--accent-primary)' : 'white';

    return (
        <nav className="glass-panel" style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 30px',
            display: 'flex',
            gap: '40px',
            zIndex: 1000,
            background: 'rgba(20, 20, 25, 0.85)'
        }}>
            <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', color: isActive('/') }}>
                <Home size={24} strokeWidth={1.5} />
                <span style={{ marginTop: '4px' }}>Accueil</span>
            </Link>

            <Link to="/book" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', color: isActive('/book') }}>
                <Calendar size={24} strokeWidth={1.5} />
                <span style={{ marginTop: '4px' }}>RDV</span>
            </Link>

            {role === 'admin' ? (
                <Link to="/admin" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', color: isActive('/admin') }}>
                    <Shield size={24} strokeWidth={1.5} />
                    <span style={{ marginTop: '4px' }}>Admin</span>
                </Link>
            ) : (
                <Link to={user ? "/profile" : "/login"} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px', color: isActive('/profile') }}>
                    <User size={24} strokeWidth={1.5} />
                    <span style={{ marginTop: '4px' }}>{user ? 'Profil' : 'Compte'}</span>
                </Link>
            )}
        </nav>
    );
}
