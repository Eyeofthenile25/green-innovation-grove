
import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc: string;
  duration: string;
  author?: string;
  views?: string;
  date?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  videoSrc,
  thumbnailSrc,
  duration,
  author,
  views,
  date
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const handleVideoFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };
  
  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="animate-fade-in-up group rounded-2xl overflow-hidden glass border border-white/40 transition-all hover:shadow-lg hover:scale-[1.01]">
      {/* Video Container */}
      <div className="relative aspect-video cursor-pointer" onClick={togglePlay}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-anka-darkBlue/5 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-anka-blue/30 border-t-anka-blue animate-spin"></div>
          </div>
        )}
        
        <video
          ref={videoRef}
          src={videoSrc}
          poster={thumbnailSrc}
          className="w-full h-full object-cover"
          muted={isMuted}
          playsInline
          onLoadedData={handleVideoLoaded}
          onEnded={() => setIsPlaying(false)}
        />
        
        {/* Play/Pause Button */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity ${isPlaying ? 'opacity-0' : ''}`}
        >
          <button 
            className="w-16 h-16 rounded-full bg-anka-blue/90 text-white flex items-center justify-center transition-transform hover:scale-110"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </button>
        </div>
        
        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            
            <span className="text-xs text-white/90 font-medium">{duration}</span>
          </div>
          
          <button 
            onClick={handleVideoFullscreen}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize size={16} />
          </button>
        </div>
        
        {/* Duration Badge (visible when not playing) */}
        {!isPlaying && (
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
            {duration}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        <p className="text-anka-darkBlue/70 text-sm mt-1 mb-3 line-clamp-2">{description}</p>
        
        {/* Meta info */}
        {(author || views || date) && (
          <div className="flex items-center text-xs text-anka-gray">
            {author && <span className="mr-3">{author}</span>}
            {views && <span className="mr-3">{views} views</span>}
            {date && <span>{date}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
