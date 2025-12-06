
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await signIn(email, password);
        if (error) {
            setError(error.message);
        } else {
            if (email.includes('kim')) {
                navigate('/admin');
            } else {
                navigate('/profile');
            }
        }
    };

    return (
        <div className="container" style={{ padding: '100px 20px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '20px', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connexion</h1>

            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '30px', width: '100%', maxWidth: '400px' }}>
                {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'white'
                        }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Mot de passe</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'white'
                        }}
                        required
                    />
                </div>

                <button className="btn-primary" style={{ width: '100%' }}>Se connecter</button>

                <div style={{ marginTop: '20px', fontSize: '12px', color: 'gray', textAlign: 'center' }}>
                    <p>Demo: kim@nailstudio.com (Admin) / client@test.com (Client)</p>
                    <p>Password: any</p>
                </div>
            </form>
        </div>
    );
}
