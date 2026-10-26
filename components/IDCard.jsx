import React, { useState } from 'react';

const IDCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 pt-16">
      <div className="id-card-container relative">
        <div className="id-lanyard-back-clip" aria-hidden="true">
          <span className="id-lanyard-back" />
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="id-card-body relative z-10 h-[500px] w-[350px] v-frame v-shape v-cut-lg overflow-hidden cursor-pointer"
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 z-20 pointer-events-none bg-[#71869c] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="relative z-30 flex flex-col items-center justify-between h-full p-10 pt-14">
            <div className="relative w-44 h-44 mt-2 border border-vline bg-vline">
              <div className="absolute inset-[1px] overflow-hidden bg-void">
                <img
                  src="./pfp.png"
                  alt="Profile"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h2 className={`text-3xl font-display font-extrabold tracking-[0.04em] uppercase leading-none transition-colors duration-200 ${isHovered ? 'text-white' : 'text-vtext'}`}>
                Mahdi Guemri
              </h2>
              <p className={`text-[10px] font-display font-semibold tracking-[0.35em] uppercase transition-colors duration-200 ${isHovered ? 'text-white' : 'text-vblue'}`}>
                Full-stack web developer
              </p>
            </div>

            <div className={`w-full space-y-3 text-[10px] font-display transition-colors duration-200 ${isHovered ? 'text-white' : 'text-vmuted'}`}>
              <div className="flex justify-between items-center border-b border-current/30 pb-2">
                <span>Monastir, ISIMM</span>
                <span className={isHovered ? 'text-white' : 'text-vblue'}>Pursuing Masters in CS</span>
              </div>
            </div>

            <a
              href="./Mahdi_Guemri_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`v-btn id-card-button w-full cursor-pointer ${isHovered ? 'id-card-button-hover' : ''}`}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="id-lanyard-front-clip" aria-hidden="true">
          <span className="id-lanyard-front" />
        </div>
        <div className="id-card-slot" aria-hidden="true" />
      </div>
    </div>
  );
};

export default IDCard;
