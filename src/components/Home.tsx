"use client"

import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex items-center bg-animated-gradient">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Selamat Datang di MyWebsite!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Promosi spesial! Dapatkan followers, likes, dan shares untuk akun Instagram Anda dengan layanan premium kami. Bergabunglah sekarang dan tingkatkan kehadiran sosial media Anda!
            </p>
            <a href="#purchase" className="bg-white text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Pelajari Lebih Lanjut
            </a>
          </FadeInSection>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <FadeInSection>
            <Image
              width={500}
              height={500}
              src="/instagram.png"
              alt="Instagram Logo"
              className="animate-smooth"
            />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
