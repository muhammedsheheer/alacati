// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 bg-[url('/images/home/hero/bg.png')] bg-cover bg-no-repeat text-white">
//         <h1 className="font-road_rage text-center text-6xl font-[400] uppercase tracking-[7px] text-[#fff] md:text-8xl md:tracking-[10.5px]">
//           welcome <br />
//           to cool cafe
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 bg-[url('/images/home/hero/bg.png')] bg-cover bg-no-repeat text-white">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(72,69,69,0.50)_0%,_#000_100%)] opacity-80"></div>
        <h1 className="font-road_rage relative z-10 text-center text-6xl font-[400] uppercase tracking-[7px] text-[#fff] md:text-8xl md:tracking-[10.5px]">
          welcome <br />
          to cool cafe
        </h1>
      </div>
    </section>
  );
};

export default Hero;
