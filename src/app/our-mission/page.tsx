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
            <div className="text-center p-4 border rounded">
              <div className="flex justify-center mb-4">
                <Image src={icon1} alt="icon1" width={64} height={64} />
              </div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p>Editable text describing your commitment to quality.</p>
            </div>

            <div className="text-center p-4 border rounded">
              <div className="flex justify-center mb-4">
                <Image src={icon2} alt="icon2" width={64} height={64} />
              </div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p>Editable text describing your community values.</p>
            </div>

            <div className="text-center p-4 border rounded">
              <div className="flex justify-center mb-4">
                <Image src={icon3} alt="icon3" width={64} height={64} />
              </div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p>Editable text describing sustainability goals.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
