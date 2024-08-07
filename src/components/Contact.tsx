"use client";

import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen py-20 bg-animated-gradient">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Kami siap membantu Anda! Jika Anda memiliki pertanyaan atau
              membutuhkan dukungan lebih lanjut, hubungi kami melalui WhatsApp
              atau email.
            </p>
          </FadeInSection>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          {/* Contact Card */}
          <FadeInSection>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Image
                src="/media.png"
                alt="WhatsApp"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Chat dengan Kami
              </h2>
              <p className="text-gray-600 mb-4">
                Klik tombol di bawah untuk memulai percakapan di WhatsApp.
              </p>
              <a
                href="https://wa.me/081916044812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </FadeInSection>

          {/* Contact Card */}
          <FadeInSection>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Image
                src="/emailLogo.webp"
                alt="Email"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Kirim Email
              </h2>
              <p className="text-gray-600 mb-4">
                Jika Anda lebih suka menggunakan email, kirimkan pesan ke alamat
                di bawah ini.
              </p>
              <a
                href="mailto:support@example.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                Kirim Email
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
