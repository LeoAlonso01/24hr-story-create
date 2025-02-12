'use client';
import React, { useState } from 'react';
import Nav from '../components/Nav';

interface AddVideoProps {
    onVideoAdded: () => void; // Callback para notificar que se ha agregado un video
}

const AddVideo: React.FC<AddVideoProps> = ({ onVideoAdded }) => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        src: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Manejar cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Enviar los datos del formulario a la API
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al agregar el video');
            }

            // Si todo sale bien, limpiar el formulario y notificar éxito
            setFormData({ title: '', src: '', body: '' });
            setSuccess(true);
            onVideoAdded(); // Notificar al padre que se ha agregado un video
        } catch (err: any) {
            setError(err.message || 'Ocurrió un error inesperado');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div style={styles.container}>
            <h2 style={styles.title}>Agregar Nuevo Video</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Campo para el título */}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Ej. Mi video favorito"
                        required
                        style={styles.input}
                    />
                </div>

                {/* Campo para la URL del video */}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>URL del Video:</label>
                    <input
                        type="url"
                        name="src"
                        value={formData.src}
                        onChange={handleChange}
                        placeholder="Ej. https://www.ejemplo.com/video.mp4"
                        required
                        style={styles.input}
                    />
                </div>

                {/* Botón de envío */}
                <button type="submit" disabled={loading} style={styles.button}>
                    {loading ? 'Agregando...' : 'Agregar Video'}
                </button>
            </form>

            {/* Mensajes de éxito o error */}
            {error && <p style={styles.errorMessage}>{error}</p>}
            {success && <p style={styles.successMessage}>¡Video agregado con éxito!</p>}
        </div>

        <Nav />
        </>
        
    );
};

// Estilos en línea
const styles = {
    container: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center' as const,
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '15px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    label: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    errorMessage: {
        color: '#dc3545',
        textAlign: 'center' as const,
        marginTop: '10px',
    },
    successMessage: {
        color: '#28a745',
        textAlign: 'center' as const,
        marginTop: '10px',
    },
};

export default AddVideo;