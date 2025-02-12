import React from 'react';
import Nav from '@/app/components/Nav';

const AlertsPage: React.FC = () => {
    // Datos de ejemplo para las alertas
    const alerts = [
        { type: 'success', message: '¡La operación se completó con éxito!' },
        { type: 'warning', message: 'Tenga cuidado, esta acción puede ser peligrosa.' },
        { type: 'error', message: 'Ocurrió un error al procesar la solicitud.' },
        { type: 'info', message: 'Esta es una notificación informativa.' },
    ];

    return (
        <>
        <div style={styles.container}>
            <h1 style={styles.title}>Centro de Alertas</h1>
            <p style={styles.subtitle}>Aquí encontrarás todas tus notificaciones recientes.</p>

            {/* Lista de alertas */}
            <div style={styles.alertsContainer}>
                {alerts.map((alert, index) => (
                    <div key={index} style={{ ...styles.alert, ...getAlertStyle(alert.type) }}>
                        {alert.message}
                    </div>
                ))}
            </div>
        </div>
        <Nav />
        </>
    );
};

// Función para obtener estilos específicos según el tipo de alerta
const getAlertStyle = (type: string) => {
    switch (type) {
        case 'success':
            return styles.success;
        case 'warning':
            return styles.warning;
        case 'error':
            return styles.error;
        case 'info':
            return styles.info;
        default:
            return {};
    }
};

// Estilos en línea
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
    },
    title: {
        textAlign: 'center' as const,
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    subtitle: {
        textAlign: 'center' as const,
        color: '#666',
        marginBottom: '30px',
    },
    alertsContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '15px',
    },
    alert: {
        padding: '15px',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: 'bold',
    },
    success: {
        backgroundColor: '#28a745',
    },
    warning: {
        backgroundColor: '#ffc107',
        color: '#000',
    },
    error: {
        backgroundColor: '#dc3545',
    },
    info: {
        backgroundColor: '#17a2b8',
    },
};

export default AlertsPage;