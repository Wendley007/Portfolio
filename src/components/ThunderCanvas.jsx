import React, { useEffect, useRef } from "react";

export default function ThunderCanvas({ x, y }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const w = canvas.width;
    const h = canvas.height;

    function Thunder(options = {}) {
      this.lifespan = options.lifespan || Math.round(Math.random() * 10 + 30);
      this.maxlife = this.lifespan;
      this.color = options.color || "#fefefe";
      this.glow = options.glow || "#2323fe";
      this.x = options.x || Math.random() * w;
      this.y = options.y || Math.random() * h;
      this.width = options.width || 2;
      this.direct = options.direct || Math.random() * Math.PI * 2;
      this.max = options.max || Math.round(Math.random() * 10 + 28);
      this.segments = [...new Array(this.max)].map(() => {
        return {
          direct: this.direct + (Math.PI * Math.random() * 0.2 - 0.1),
          length: Math.random() * 20 + 80,
          change: Math.random() * 0.04 - 0.02,
        };
      });

      this.update = function () {
        this.lifespan--;
      };

      this.draw = function () {
        let [x, y] = [this.x, this.y];

        ctx.beginPath();
        ctx.moveTo(x, y);

        for (let i = 0; i < this.segments.length; i++) {
          let seg = this.segments[i];
          seg.direct += seg.change;
          x += Math.cos(seg.direct) * seg.length;
          y += Math.sin(seg.direct) * seg.length;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = this.color;
        ctx.shadowColor = this.glow;
        ctx.shadowBlur = 15;
        ctx.lineWidth = this.width;
        ctx.stroke();
        ctx.shadowBlur = 0;
      };
    }

    const thunders = [];

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // Gera raios próximos ao ponto (x, y) passado como props
      if (Math.random() < 0.1) {
        thunders.push(new Thunder({ x, y }));
      }

      for (let i = thunders.length - 1; i >= 0; i--) {
        const t = thunders[i];
        t.update();
        t.draw();
        if (t.lifespan <= 0) {
          thunders.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [x, y]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20 pointer-events-none"
    ></canvas>
  );
}
