import { useEffect, useState, useRef } from "react";
import { Zap } from "lucide-react";

interface FloatingBlock {
  id: number;
  x: number;
  y: number;
  delay: number;
  isGlow: boolean;
  glowIntensity: number;
  size: number;
  speed: number;
  rotationSpeed: number;
  opacity: number;
  shape: 'square' | 'triangle' | 'diamond' | 'circle';
}

interface ParticleElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

const GridBackground = () => {
  const [blocks, setBlocks] = useState<FloatingBlock[]>([]);
  const [particles, setParticles] = useState<ParticleElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: FloatingBlock[] = [];
      const shapes: Array<'square' | 'triangle' | 'diamond' | 'circle'> = ['square', 'triangle', 'diamond', 'circle'];
      
      for (let i = 0; i < 50; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 120 - 10, // Allow some overflow
          y: Math.random() * 120 - 10,
          delay: Math.random() * 15,
          isGlow: Math.random() > 0.7,
          glowIntensity: 0,
          size: Math.random() * 30 + 20, // 20-50px
          speed: Math.random() * 2 + 0.5, // 0.5-2.5 speed multiplier
          rotationSpeed: (Math.random() - 0.5) * 4, // -2 to 2 degrees per frame
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }
      setBlocks(newBlocks);
    };

    const generateParticles = () => {
      const newParticles: ParticleElement[] = [];
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          life: Math.random() * 1000 + 500
        });
      }
      setParticles(newParticles);
    };

    generateBlocks();
    generateParticles();
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

  // Animation loop for continuous block and particle movement
  useEffect(() => {
    let startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;
      
      setBlocks(prevBlocks => 
        prevBlocks.map(block => {
          const distance = Math.sqrt(
            Math.pow(block.x - mousePos.x, 2) + 
            Math.pow(block.y - mousePos.y, 2)
          );
          
          const maxDistance = 15;
          const glowIntensity = Math.max(0, 1 - (distance / maxDistance));
          
          // Continuous movement
          let newX = block.x + Math.sin(elapsed * block.speed + block.delay) * 0.1;
          let newY = block.y + Math.cos(elapsed * block.speed * 0.7 + block.delay) * 0.08;
          
          // Wrap around edges
          if (newX > 110) newX = -10;
          if (newX < -10) newX = 110;
          if (newY > 110) newY = -10;
          if (newY < -10) newY = 110;
          
          return {
            ...block,
            x: newX,
            y: newY,
            glowIntensity: glowIntensity
          };
        })
      );
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newLife = particle.life - 1;
          
          // Reset particle if it dies or goes off screen
          if (newLife <= 0 || newX < 0 || newX > 100 || newY < 0 || newY > 100) {
            return {
              ...particle,
              x: Math.random() * 100,
              y: Math.random() * 100,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              life: Math.random() * 1000 + 500,
              opacity: Math.random() * 0.5 + 0.1
            };
          }
          
          return {
            ...particle,
            x: newX,
            y: newY,
            life: newLife
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
          
          const getShapeStyles = () => {
            const baseSize = Math.max(20, block.size);
            const animatedRotation = Date.now() * block.rotationSpeed * 0.002;
            
            const baseStyle = {
              width: `${baseSize}px`,
              height: `${baseSize}px`,
              left: `${block.x}%`,
              top: `${block.y}%`,
              opacity: Math.max(0.4, block.opacity * (isInteractiveGlow ? 1.5 : 1)),
              transform: `rotate(${animatedRotation}deg) ${isInteractiveGlow ? `scale(${1.2 + block.glowIntensity * 0.5})` : 'scale(1)'}`,
              transition: 'all 0.2s ease-out',
              zIndex: isInteractiveGlow ? 10 : 1,
            };

            const glowStyle = isInteractiveGlow ? {
              boxShadow: `0 0 ${30 + block.glowIntensity * 60}px hsl(var(--grid-glow) / ${0.6 + block.glowIntensity * 0.4}), 
                         0 0 ${60 + block.glowIntensity * 120}px hsl(var(--grid-glow) / ${0.3 + block.glowIntensity * 0.3}),
                         inset 0 0 20px hsl(var(--grid-glow) / ${0.2 + block.glowIntensity * 0.3})`,
              borderColor: `hsl(var(--grid-glow) / ${0.8 + block.glowIntensity * 0.2})`,
              background: `linear-gradient(145deg, hsl(var(--grid-glow) / ${0.2 + block.glowIntensity * 0.4}), hsl(var(--grid-glow) / ${0.3 + block.glowIntensity * 0.5}))`,
            } : {};

            switch (block.shape) {
              case 'triangle':
                return {
                  ...baseStyle,
                  width: '0',
                  height: '0',
                  borderLeft: `${baseSize / 2}px solid transparent`,
                  borderRight: `${baseSize / 2}px solid transparent`,
                  borderBottom: `${baseSize}px solid ${isInteractiveGlow ? `hsl(var(--grid-glow) / ${0.7 + block.glowIntensity * 0.3})` : `hsl(var(--grid-color) / 0.6)`}`,
                  background: 'transparent',
                  filter: isInteractiveGlow ? `drop-shadow(0 0 20px hsl(var(--grid-glow) / 0.8))` : 'none',
                };
              case 'diamond':
                return {
                  ...baseStyle,
                  ...glowStyle,
                  transform: `rotate(45deg) rotate(${animatedRotation}deg) ${isInteractiveGlow ? `scale(${1.2 + block.glowIntensity * 0.5})` : 'scale(1)'}`,
                  background: isInteractiveGlow
                    ? `linear-gradient(145deg, hsl(var(--grid-glow) / ${0.3 + block.glowIntensity * 0.4}), hsl(var(--grid-glow) / ${0.4 + block.glowIntensity * 0.5}))`
                    : 'linear-gradient(145deg, transparent, hsl(var(--grid-color) / 0.3))',
                  border: `2px solid ${isInteractiveGlow ? `hsl(var(--grid-glow) / ${0.8 + block.glowIntensity * 0.2})` : 'hsl(var(--grid-color) / 0.6)'}`,
                };
              case 'circle':
                return {
                  ...baseStyle,
                  ...glowStyle,
                  borderRadius: '50%',
                  background: isInteractiveGlow
                    ? `radial-gradient(circle, hsl(var(--grid-glow) / ${0.4 + block.glowIntensity * 0.4}), hsl(var(--grid-glow) / ${0.1 + block.glowIntensity * 0.2}))`
                    : 'radial-gradient(circle, hsl(var(--grid-color) / 0.4), transparent)',
                  border: `2px solid ${isInteractiveGlow ? `hsl(var(--grid-glow) / ${0.8 + block.glowIntensity * 0.2})` : 'hsl(var(--grid-color) / 0.6)'}`,
                };
              default: // square
                return {
                  ...baseStyle,
                  ...glowStyle,
                  background: isInteractiveGlow
                    ? `linear-gradient(145deg, hsl(var(--grid-glow) / ${0.2 + block.glowIntensity * 0.4}), hsl(var(--grid-glow) / ${0.4 + block.glowIntensity * 0.5}))`
                    : 'linear-gradient(145deg, transparent, hsl(var(--grid-color) / 0.3))',
                  border: `2px solid ${isInteractiveGlow ? `hsl(var(--grid-glow) / ${0.8 + block.glowIntensity * 0.2})` : 'hsl(var(--grid-color) / 0.6)'}`,
                  borderRadius: '4px',
                };
            }
          };
          
          return (
            <div
              key={block.id}
              className={`floating-block ${glowClass}`}
              style={{
                position: 'absolute',
                ...getShapeStyles(),
              }}
            />
          );
        })}
      </div>

      {/* Particle System */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
              background: `radial-gradient(circle, hsl(var(--primary-glow) / ${particle.opacity * 0.8}), hsl(var(--primary-glow) / ${particle.opacity * 0.3}) 50%, transparent)`,
              borderRadius: '50%',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${particle.size * 4}px hsl(var(--primary-glow) / ${particle.opacity * 0.6})`,
              animation: `particleFloat ${3 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Energy Waves */}
      <div className="energy-waves">
        <div className="energy-wave" style={{ animationDelay: '0s' }} />
        <div className="energy-wave" style={{ animationDelay: '2s' }} />
        <div className="energy-wave" style={{ animationDelay: '4s' }} />
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