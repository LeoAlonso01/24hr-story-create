import React from 'react';
import Nav from '@/app/components/Nav';

const ProfilePage: React.FC = () => {
    // Datos de ejemplo para el perfil del usuario
    const user = {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        avatar: 'https://via.placeholder.com/150', // URL de imagen de ejemplo
        bio: 'Desarrollador frontend apasionado por la tecnología y el diseño.',
        followers: 120,
        following: 300,
        posts: 45,
    };

    return (
        <>
        <div style={styles.container}>
            {/* Sección de encabezado con la foto de perfil y datos básicos */}
            <div style={styles.header}>
                <img src={user.avatar} alt="Avatar" style={styles.avatar} />
                <div style={styles.userInfo}>
                    <h1 style={styles.name}>{user.name}</h1>
                    <p style={styles.email}>{user.email}</p>
                    <p style={styles.bio}>{user.bio}</p>
                </div>
            </div>

            {/* Sección de estadísticas */}
            <div style={styles.statsContainer}>
                <div style={styles.statItem}>
                    <span style={styles.statNumber}>{user.followers}</span>
                    <span style={styles.statLabel}>Seguidores</span>
                </div>
                <div style={styles.statItem}>
                    <span style={styles.statNumber}>{user.following}</span>
                    <span style={styles.statLabel}>Siguiendo</span>
                </div>
                <div style={styles.statItem}>
                    <span style={styles.statNumber}>{user.posts}</span>
                    <span style={styles.statLabel}>Publicaciones</span>
                </div>
            </div>

            {/* Sección de actividades recientes */}
            <div style={styles.recentActivity}>
                <h2 style={styles.sectionTitle}>Actividad Reciente</h2>
                <ul style={styles.activityList}>
                    <li style={styles.activityItem}>Publicó un nuevo artículo: "Cómo aprender React".</li>
                    <li style={styles.activityItem}>Comentó en la publicación de María.</li>
                    <li style={styles.activityItem}>Siguió a Pedro Gómez.</li>
                </ul>
            </div>
        </div>
        
        <Nav/>
        </>
    );
};

// Estilos en línea
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginRight: '20px',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    name: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    email: {
        color: '#666',
        marginBottom: '10px',
    },
    bio: {
        fontSize: '14px',
        color: '#333',
    },
    statsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '30px',
    },
    statItem: {
        textAlign: 'center' as const,
    },
    statNumber: {
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'block',
    },
    statLabel: {
        fontSize: '14px',
        color: '#666',
    },
    recentActivity: {
        marginTop: '20px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    activityList: {
        listStyleType: 'none',
        padding: 0,
    },
    activityItem: {
        backgroundColor: '#f9f9f9',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '5px',
        color : '#333',
    },
};

export default ProfilePage;