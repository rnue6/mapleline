"use client";

import Header from "../../components/Header";
import Image from "next/image";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";

export default function OurMission() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-start justify-center px-6 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6" style={{ color: "#b86633" }}>
            Our Mission
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded bg-white">
                <div className="flex justify-center mb-4">
                  <Image src={icon3} alt="icon1" width={64} height={64} className="floating-icon" />
                </div>
              <h3 className="font-semibold mb-2">Our Mission</h3>
              <p>MapleLine is dedicated to helping users discover sustainable and ethically sourced local clothing. We connect conscious consumers with boutique retailers who prioritize environmental responsibility and fair-trade practices across Canada.</p>
            </div>

              <div className="text-center p-4 rounded bg-white">
                <div className="flex justify-center mb-4">
                  <Image src={icon1} alt="icon3" width={64} height={64} className="floating-icon" />
                </div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p>We believe in supporting businesses that care about the planet. From organic fabrics to upcycled accessories, our partner stores offer clothing that doesn't compromise on style or environmental values.</p>
            </div>

              <div className="text-center p-4 rounded bg-white">
              <div className="flex justify-center mb-4">
                <Image src={icon2} alt="company" width={64} height={64} className="floating-icon" />
              </div>
              <h3 className="font-semibold mb-2">About MapleLine</h3>
              <p>Founded with a mission to make ethical fashion accessible, MapleLine is an interactive map platform that empowers Canadians to support local, sustainable clothing retailers. Together, we're building a more responsible fashion community.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
