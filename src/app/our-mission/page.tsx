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
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold mb-6" style={{ color: "#b86633" }}>
            Our Mission
          </h1>

          {/* First section with 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
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

          {/* Second section with extended content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded bg-white">
              <h3 className="font-semibold mb-2" style={{ color: "#b86633" }}>Why Choose Sustainable Fashion?</h3>
              <p className="text-sm mb-3">The fashion industry is one of the largest polluters globally. By choosing sustainable and ethically-made clothing, you're making a positive impact on:</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Environmental Conservation</li>
                <li>Fair Labor Practices</li>
                <li>Water Usage Reduction</li>
                <li>Carbon Footprint Reduction</li>
                <li>Textile Waste Prevention</li>
              </ul>
            </div>

            <div className="p-4 rounded bg-white">
              <h3 className="font-semibold mb-2" style={{ color: "#b86633" }}>Our Commitment</h3>
              <p className="text-sm">MapleLine is committed to transparency and authenticity. Every store featured on our platform has been vetted to ensure they meet our sustainability standards. We partner with retailers who share our values and demonstrate genuine commitment to ethical practices in their supply chains.</p>
            </div>
          </div>

          {/* Third section with community focus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 rounded bg-white">
              <h3 className="font-semibold mb-2" style={{ color: "#b86633" }}>Local Impact</h3>
              <p className="text-sm">By supporting local Canadian retailers, you're keeping money in your community and supporting small businesses that prioritize quality and sustainability over mass production.</p>
            </div>

            <div className="p-4 rounded bg-white">
              <h3 className="font-semibold mb-2" style={{ color: "#b86633" }}>Quality Over Quantity</h3>
              <p className="text-sm">Sustainable fashion encourages buying fewer, better quality pieces that last longer. This approach saves money in the long run and reduces the need for constant wardrobe replacements.</p>
            </div>

            <div className="p-4 rounded bg-white">
              <h3 className="font-semibold mb-2" style={{ color: "#b86633" }}>Discover & Explore</h3>
              <p className="text-sm">Use MapleLine to explore boutique retailers in your area. Each store offers unique collections and personal service you won't find in fast fashion chains. Start your sustainable fashion journey today!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
