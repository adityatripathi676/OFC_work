/**
 * Video Configuration
 * Central point for video asset management
 * Change VIDEO_URL to update video across entire site
 */

export const VIDEO_CONFIG = {
  // Main video URL - Change this to update video everywhere
  VIDEO_URL: '/Ofc/1.mp4',
  
  // Fallback image when video doesn't load
  FALLBACK_IMAGE: '/ofc-1.jpg',
  
  // Video properties
  AUTOPLAY: true,
  MUTED: true,
  LOOP: true,
  PRELOAD: 'metadata' as const,
};

// Helper function to get video element props
export const getVideoProps = () => ({
  autoPlay: VIDEO_CONFIG.AUTOPLAY,
  muted: VIDEO_CONFIG.MUTED,
  loop: VIDEO_CONFIG.LOOP,
  playsInline: true,
  preload: VIDEO_CONFIG.PRELOAD,
});
