
import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function Booking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal('ui', {
                theme: 'dark',
                styles: { branding: { brandColor: '#d946ef' } },
                hideEventTypeDetails: false,
                layout: 'month_view'
            });
        })();
    }, []);

    return (
        <div className="container" style={{ padding: '80px 20px 100px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Réservation</h1>
            <div className="glass-panel" style={{ padding: '20px', minHeight: '600px' }}>
                {/* Replace 'kim-nail-studio' with actual Cal.com username */}
                <Cal
                    calLink="thibaut-quinzain-h35vph"
                    style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                    config={{ layout: 'month_view', theme: 'dark' }}
                />
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <p>Note: Ceci est une démo. Pour le produit final, nous connecterons votre compte Cal.com réel.</p>
            </div>
        </div>
    );
}
