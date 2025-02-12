'use client';
import React, { useState, useEffect } from 'react';
import Video from './components/Video' // Importamos el componente Video
import Nav from './components/Nav';

const InfiniteScrollVideoPlayer: React.FC = () => {
  const [videos, setVideos] = useState<{ src: string; title: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Datos de ejemplo para los videos (simulando una API)
  const fetchVideos = (pageNumber: number) => {
    return new Promise<{ src: string; title: string }[]>((resolve) => {
      setTimeout(() => {
        const newVideos = Array.from({ length: 5 }, (_, i) => ({
          src: `https://www.w3schools.com/html/mov_bbb.mp4?video=${pageNumber * 5 + i}`,
          title: `Video ${pageNumber * 5 + i + 1}`,
        }));
        resolve(newVideos);
      }, 1000); // Simulamos un retraso de red
    });
  };

  // Función para cargar más videos
  const loadMoreVideos = async () => {
    if (loading) return;
    setLoading(true);
    const newVideos = await fetchVideos(page);
    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  // Detectar cuando el usuario llega al final de la página
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      ) {
        loadMoreVideos();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Reproductor de Video con Scroll Infinito</h1>
        <div style={styles.videoList}>
          {videos.map((video, index) => (
            <Video key={index} src={video.src} title={video.title} />
          ))}
        </div>
        {loading && <p style={styles.loading}>Cargando más videos...</p>}
      </div>
      <Nav />
    </>
  );
};

// Estilos en línea
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const,
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  videoList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  loading: {
    marginTop: '20px',
    color: '#666',
  },
};

export default InfiniteScrollVideoPlayer;