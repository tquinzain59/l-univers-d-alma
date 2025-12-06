
import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState('client'); // 'admin' or 'client'

    useEffect(() => {
        // Check active session
        const getSession = async () => {
            /* 
            // Real Supabase implementation
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            */
            setLoading(false);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signIn = async (email, password) => {
        // Mock Login for Demo
        if (email === 'kim@nailstudio.com') {
            setUser({ id: 'admin-123', email });
            setRole('admin');
            return { error: null };
        }
        setUser({ id: 'client-123', email });
        setRole('client');
        return { error: null };
        /*
        return supabase.auth.signInWithPassword({ email, password });
        */
    };

    const signOut = async () => {
        setUser(null);
        setRole('client');
        // return supabase.auth.signOut();
    };

    const value = {
        user,
        role,
        signIn,
        signOut,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
