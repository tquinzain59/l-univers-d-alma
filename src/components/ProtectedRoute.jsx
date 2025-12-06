
import { Navigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export default function ProtectedRoute({ children, adminOnly = false }) {
    const { user, role, loading } = useAuth();

    if (loading) {
        return <div style={{ padding: '50px', textAlign: 'center' }}>Chargement...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return children;
}
