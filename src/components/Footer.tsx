"use client"

import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">

          {/* Links Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
            <Link href="/#purchase" className="text-gray-300 hover:text-white transition-colors duration-300">Cara Pembelian</Link>
            <Link href="/#rules" className="text-gray-300 hover:text-white transition-colors duration-300">Rules</Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">Daftar Harga</Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors duration-300">Tentang Kami</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Hubungi Kami</Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
