import { PiHexagonThin } from "react-icons/pi";
import me from '../../assets/me.jpg';

const HeroImage = () => {
  const hexagons = [
    { color: 'text-orange', blur: false },
    { color: 'text-orange', blur: true },
    { color: 'text-cyan', blur: false },
    { color: 'text-cyan', blur: true },
  ];

  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className="h-full w-full">
        <img
          src={me}
          alt="Lovely Kumari"
          className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-0 z-10 left-1/2 -translate-x-1/2"
        />
        {hexagons.map((hex, i) => (
          <div
            key={i}
            className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90"
          >
            <PiHexagonThin
              className={`md:h-[90%] sm:h-[120%] min-h-[600px] w-auto ${hex.color} opacity-70 ${
                hex.blur ? 'blur-lg' : ''
              } animate-[spin_20s_linear_infinite]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImage;
