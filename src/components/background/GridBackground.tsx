import { useEffect, useState } from "react";

interface FloatingBlock {
  id: number;
  x: number;
  y: number;
  delay: number;
  isGlow: boolean;
}

const GridBackground = () => {
  const [blocks, setBlocks] = useState<FloatingBlock[]>([]);

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: FloatingBlock[] = [];
      for (let i = 0; i < 20; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 15,
          isGlow: Math.random() > 0.7, // 30% chance for glow effect
        });
      }
      setBlocks(newBlocks);
    };

    generateBlocks();
  }, []);

  return (
    <div className="grid-background">
      {/* Animated Grid Plane */}
      <div className="grid-container">
        <div className="grid-plane"></div>
      </div>

      {/* Floating Blocks */}
      <div className="floating-blocks">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`floating-block ${block.isGlow ? 'glow' : ''}`}
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              animationDelay: `${block.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Scan Lines Effect */}
      <div className="scan-lines"></div>
    </div>
  );
};

export default GridBackground;