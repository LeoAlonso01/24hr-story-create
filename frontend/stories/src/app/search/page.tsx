import React from 'react';
import Nav from '@/app/components/Nav';

const SearchPage: React.FC = () => {
    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>Search Page</h1>
                <div style={styles.gridContainer}>
                    {/* Ejemplo de elementos dentro de la cuadrícula */}
                    <div style={styles.gridItem}>Item 1</div>
                    <div style={styles.gridItem}>Item 2</div>
                    <div style={styles.gridItem}>Item 3</div>
                    <div style={styles.gridItem}>Item 4</div>
                    <div style={styles.gridItem}>Item 5</div>
                    <div style={styles.gridItem}>Item 6</div>
                </div>
            </div>
            <Nav />
        </>
    );
};

// Estilos en línea para el diseño de la cuadrícula
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center' as const,
        marginBottom: '20px',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columnas
        gap: '20px', // Espacio entre los elementos
    },
    gridItem: {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center' as const,
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
};

export default SearchPage;