import { useEffect, useState, useRef } from "react";
import { Zap } from "lucide-react";

interface FloatingBlock {
  id: number;
  x: number;
  y: number;
  delay: number;
  isGlow: boolean;
  glowIntensity: number;
}

const GridBackground = () => {
  const [blocks, setBlocks] = useState<FloatingBlock[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: FloatingBlock[] = [];
      for (let i = 0; i < 30; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 15,
          isGlow: Math.random() > 0.8, // 20% chance for base glow effect
          glowIntensity: 0,
        });
      }
      setBlocks(newBlocks);
    };

    generateBlocks();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
      }
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -100, y: -100 }); // Move cursor off-screen
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const updateGlowIntensities = () => {
      setBlocks(prevBlocks => 
        prevBlocks.map(block => {
          const distance = Math.sqrt(
            Math.pow(block.x - mousePos.x, 2) + 
            Math.pow(block.y - mousePos.y, 2)
          );
          
          // Glow effect radius (adjust this value to change sensitivity)
          const maxDistance = 15;
          const glowIntensity = Math.max(0, 1 - (distance / maxDistance));
          
          return {
            ...block,
            glowIntensity: glowIntensity
          };
        })
      );
    };

    updateGlowIntensities();
  }, [mousePos]);

  return (
    <div ref={containerRef} className="grid-background">
      {/* Animated Grid Plane */}
      <div className="grid-container">
        <div className="grid-plane"></div>
      </div>

      {/* Floating Blocks */}
      <div className="floating-blocks">
        {blocks.map((block) => {
          const isInteractiveGlow = block.glowIntensity > 0.1;
          const glowClass = block.isGlow || isInteractiveGlow ? 'glow' : '';
          
          return (
            <div
              key={block.id}
              className={`floating-block ${glowClass}`}
              style={{
                left: `${block.x}%`,
                top: `${block.y}%`,
                animationDelay: `${block.delay}s`,
                boxShadow: isInteractiveGlow 
                  ? `0 0 ${20 + block.glowIntensity * 40}px hsl(var(--grid-glow) / ${0.4 + block.glowIntensity * 0.6}), 0 0 ${40 + block.glowIntensity * 80}px hsl(var(--grid-glow) / ${0.2 + block.glowIntensity * 0.4})`
                  : undefined,
                borderColor: isInteractiveGlow 
                  ? `hsl(var(--grid-glow) / ${0.6 + block.glowIntensity * 0.4})`
                  : undefined,
                background: isInteractiveGlow
                  ? `linear-gradient(145deg, hsl(var(--grid-glow) / ${0.1 + block.glowIntensity * 0.3}), hsl(var(--grid-glow) / ${0.2 + block.glowIntensity * 0.4}))`
                  : undefined,
                transform: isInteractiveGlow 
                  ? `scale(${1 + block.glowIntensity * 0.3})`
                  : undefined,
                transition: 'all 0.3s ease-out',
              }}
            />
          );
        })}
      </div>

      {/* Lightning Bolt Cursor */}
      <div 
        className="absolute pointer-events-none z-50"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: mousePos.x >= 0 && mousePos.x <= 100 && mousePos.y >= 0 && mousePos.y <= 100 ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        {/* Outer Glow - Largest */}
        <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-full h-full rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary-glow) / 0.4) 0%, hsl(var(--primary-glow) / 0.2) 20%, transparent 60%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
        
        {/* Middle Glow */}
        <div className="absolute inset-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary-glow) / 0.8) 0%, hsl(var(--primary-glow) / 0.4) 40%, transparent 80%)',
              filter: 'blur(12px)',
            }}
          />
        </div>
        
        {/* Inner Glow */}
        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary-glow) / 0.9) 0%, hsl(var(--primary-glow) / 0.6) 50%, transparent 90%)',
              filter: 'blur(6px)',
            }}
          />
        </div>
        
        {/* Lightning Bolt Icon */}
        <div className="relative">
          <Zap 
            className="w-8 h-8 text-primary-glow drop-shadow-2xl" 
            style={{
              filter: 'drop-shadow(0 0 8px hsl(var(--primary-glow) / 1)) drop-shadow(0 0 16px hsl(var(--primary-glow) / 0.8)) drop-shadow(0 0 32px hsl(var(--primary-glow) / 0.6))',
              fill: 'hsl(var(--primary-glow))',
            }}
          />
        </div>
      </div>

      {/* Scan Lines Effect */}
      <div className="scan-lines"></div>
    </div>
  );
};

export default GridBackground;