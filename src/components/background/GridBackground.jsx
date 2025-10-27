import { useEffect, useState, useRef } from "react";

const GridBackground = () => {
  const [blocks, setBlocks] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Generate floating blocks
  useEffect(() => {
    // Defer heavy work (block generation) until the browser is idle so initial paint is faster.
    const generateBlocks = () => {
      const newBlocks = [];
      for (let i = 0; i < 8; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 15,
          isGlow: Math.random() > 0.8,
          glowIntensity: 0,
        });
      }
      setBlocks(newBlocks);
    };

    const idleCb = window.requestIdleCallback || function (cb) { return setTimeout(cb, 500); };
    const idleId = idleCb(() => {
      // Only initialize when the browser is idle (less contention with initial paint)
      generateBlocks();
    });

    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, []);

  // Track mouse position inside the container; defer attaching listeners until idle
  useEffect(() => {
    let cleanup = () => {};

    const initListeners = () => {
      // Throttle mousemove updates using requestAnimationFrame
      let ticking = false;
      let lastEvent = null;

      const handleMouseMove = (e) => {
        lastEvent = e;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (containerRef.current && lastEvent) {
              const rect = containerRef.current.getBoundingClientRect();
              const x = ((lastEvent.clientX - rect.left) / rect.width) * 100;
              const y = ((lastEvent.clientY - rect.top) / rect.height) * 100;
              setMousePos({ x, y });
            }
            ticking = false;
            lastEvent = null;
          });
          ticking = true;
        }
      };

      const handleMouseLeave = () => {
        setMousePos({ x: -100, y: -100 });
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);

      cleanup = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const idleCb = window.requestIdleCallback || function (cb) { return setTimeout(cb, 500); };
    const idleId = idleCb(() => initListeners());

    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      cleanup();
    };
  }, []);

  // Update glow intensity based on mouse proximity
  useEffect(() => {
    const updateGlowIntensities = () => {
      setBlocks((prevBlocks) =>
        prevBlocks.map((block) => {
          const distance = Math.sqrt(
            Math.pow(block.x - mousePos.x, 2) + Math.pow(block.y - mousePos.y, 2)
          );

          const maxDistance = 15;
          const glowIntensity = Math.max(0, 1 - distance / maxDistance);

          return {
            ...block,
            glowIntensity: glowIntensity,
          };
        })
      );
    };

    updateGlowIntensities();
  }, [mousePos]);

  return (
    <div ref={containerRef} className="grid-background" style={{ cursor: "auto" }}>
      {/* If no-anim class is set on html, render a very lightweight static background */}
      {typeof document !== 'undefined' && document.documentElement.classList.contains('no-anim') ? (
        // completely disable the animated background in low-resource mode
        null
      ) : (
        <>
          {/* Animated Grid Plane */}
          <div className="grid-container">
            <div className="grid-plane"></div>
          </div>

          {/* Floating Blocks */}
          <div className="floating-blocks">
            {blocks.map((block) => {
              const isInteractiveGlow = block.glowIntensity > 0.0;
              const glowClass = block.isGlow || isInteractiveGlow ? "glow" : "";

              return (
                <div
                  key={block.id}
                  className={`floating-block ${glowClass}`}
                  style={{
                    left: `${block.x}%`,
                    top: `${block.y}%`,
                    animationDelay: `${block.delay}s`,
                    boxShadow: isInteractiveGlow
                      ? `0 0 ${20 + block.glowIntensity * 40}px hsl(var(--grid-glow) / ${
                          0.4 + block.glowIntensity * 0.6
                        }), 0 0 ${40 + block.glowIntensity * 80}px hsl(var(--grid-glow) / ${
                          0.2 + block.glowIntensity * 0.4
                        })`
                      : undefined,
                    borderColor: isInteractiveGlow
                      ? `hsl(var(--grid-glow) / ${0.6 + block.glowIntensity * 0.4})`
                      : undefined,
                    background: isInteractiveGlow
                      ? `linear-gradient(145deg, hsl(var(--grid-glow) / ${
                          0.1 + block.glowIntensity * 0.3
                        }), hsl(var(--grid-glow) / ${0.2 + block.glowIntensity * 0.4}))`
                      : undefined,
                    transform: isInteractiveGlow
                      ? `scale(${1 + block.glowIntensity * 0.3})`
                      : undefined,
                    transition: "all 0.3s ease-out",
                  }}
                />
              );
            })}
          </div>

          {/* Scan Lines Effect */}
          <div className="scan-lines"></div>
        </>
      )}
    </div>
  );
};

export default GridBackground;
