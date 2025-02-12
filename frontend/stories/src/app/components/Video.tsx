'use client';

import React, { useState, useRef } from 'react';

interface VideoProps {
    src: string;
    title: string;
}

const Video: React.FC<VideoProps> = ({ src, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null); // ref para controlar el video

    const styles = {
        videoContainer: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black',
            position: 'relative' as const,
        },
        videoPlayer: {
            width: '100%',
            maxWidth: '400px',
            height: '100vh',
            objectFit: 'cover' as const,
            opacity: isHovered ? 1 : 0.8, // Decrease opacity when not hovered
        },
        videoTitle: {
            position: 'absolute' as const,
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: '1.5rem',
            textAlign: 'center' as const,
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '8px 12px',
            borderRadius: '8px',
        },
        videoWrapper: {
            position: 'relative' as const,
        },
        videoControls: {
            position: 'absolute' as const,
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: isHovered ? 1 : 0, // Control visibility on hover
            transition: 'opacity 0.3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            margin: '0 5px',
            cursor: 'pointer',
            borderRadius: '5px',
        },
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    // Función para ajustar volumen
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.volume = Number(event.target.value);
        }
    };


    // funcion para subir el volumen
    const toggleMute = () => {
        if (videoRef.current) {
            if (videoRef.current.muted) {
                videoRef.current.muted = false;
            } else {
                videoRef.current.muted = true;
            }
        }
    };

    return (
        <div
            style={styles.videoContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.videoWrapper}>
                <video ref={videoRef} style={styles.videoPlayer} controls={false}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={styles.videoControls}>
                    <button style={styles.button} onClick={togglePlay}>
                        {videoRef.current?.paused ? 'Play' : 'Pause'}
                    </button>
                    <button style={styles.button} onClick={toggleMute}>
                        {videoRef.current?.muted ? 'Unmute' : 'Mute'}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        defaultValue="1"
                        onChange={handleVolumeChange}
                        style={{ marginLeft: '10px' }}
                    />
                </div>
            </div>
            <h3 style={styles.videoTitle}>{title}</h3>
        </div>
    );
};

export default Video;



