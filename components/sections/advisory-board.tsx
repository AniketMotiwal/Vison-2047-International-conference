"use client";

import Image from "next/image";
import React from "react";

const AdvisoryBoard: React.FC = () => {
  return (
  <section id="advisory-board" className="py-8 md:py-12 scroll-mt-20">
     <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-8">
          ADVISORY BOARD
        </h2>
       <div className="w-full">
          <Image
            src="/advisory/ADVISORY BOARD  (1).png"
            alt="Advisory Board"
            width={1200}
            height={1400}
            className="w-full h-auto object-contain"
          />
        </div>

    </section>
  );
};

export default AdvisoryBoard;