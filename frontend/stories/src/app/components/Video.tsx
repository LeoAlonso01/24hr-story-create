import React, { useState, useRef, useEffect } from 'react';

interface VideoProps {
    src: string;
    title: string;
}

const Video: React.FC<VideoProps> = ({ src, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Nuevo estado para lazy loading
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.volume = Number(event.target.value);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
        }
    };

    return (
        <div
            ref={containerRef}
            className="videoContainer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="videoWrapper">
                {isVisible && (
                    <video ref={videoRef} className="videoPlayer" controls={false}>
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="videoControls">
                    <button className="button" onClick={togglePlay}>
                        {videoRef.current?.paused ? 'Play' : 'Pause'}
                    </button>
                    <button className="button" onClick={toggleMute}>
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
            <h3 className="videoTitle">{title}</h3>
        </div>
    );
};

export default Video;


