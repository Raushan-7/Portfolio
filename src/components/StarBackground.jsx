import { useMemo } from "react";

const StarBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
      maxOpacity: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--duration": star.duration,
            "--max-opacity": star.maxOpacity,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
