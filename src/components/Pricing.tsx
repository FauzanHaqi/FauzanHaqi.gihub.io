"use client";

import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

const packages = [
  {
    image: "/paket1.jpeg", // Ganti dengan URL gambar yang sesuai
    title: "Paket 1",
    description: "Deskripsi Paket 1",
  },
  {
    image: "/paket2.jpeg", // Ganti dengan URL gambar yang sesuai
    title: "Paket 2",
    description: "Deskripsi Paket 2",
  },
  {
    image: "/paket3.jpeg", // Ganti dengan URL gambar yang sesuai
    title: "Paket 3",
    description: "Deskripsi Paket 3",
  },
  {
    image: "/paket4.jpeg", // Ganti dengan URL gambar yang sesuai
    title: "Paket 4",
    description: "Deskripsi Paket 4",
  },
  {
    image: "/paket5.jpeg", // Ganti dengan URL gambar yang sesuai
    title: "Paket 5",
    description: "Deskripsi Paket 5",
  },
  {
    image: "/commingSoon.jpg", // Ganti dengan URL gambar yang sesuai
    title: "Paket Ultimate",
    description: "Deskripsi Paket Ultimate",
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="min-h-screen py-20 bg-animated-gradient">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Daftar Harga
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Pilih paket layanan yang sesuai dengan kebutuhan Anda dari daftar harga kami di bawah ini.
            </p>
          </FadeInSection>
        </div>

        {/* Pricing List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <FadeInSection key={index}>
              <div className="relative">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
                <div className="p-6 text-center">
                  <a
                    href={`https://wa.me/081916044812?text=Saya%20ingin%20memesan%20${encodeURIComponent(pkg.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
