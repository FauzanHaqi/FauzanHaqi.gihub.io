"use client";

import FadeInSection from "@/components/FadeInSection";
import { FaWhatsapp, FaShoppingCart, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

export default function Purchase() {
  return (
    <div id="purchase" className="min-h-screen py-20 bg-animated-gradient">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cara Pembelian
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Ikuti langkah-langkah berikut untuk memesan layanan Instagram kami dengan mudah dan cepat.
            </p>
          </FadeInSection>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 mb-16">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Step 1 */}
            <FadeInSection>
              <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-opacity-50 bg-gray-900 rounded-lg h-64">
                <FaShoppingCart className="text-6xl text-green-500 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Langkah 1: Pilih Paket
                </h2>
                <p className="text-gray-300">
                  Pilih paket layanan Instagram yang sesuai dengan kebutuhan Anda dari pilihan kami.
                </p>
              </div>
            </FadeInSection>

            {/* Step 2 */}
            <FadeInSection>
              <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-opacity-50 bg-gray-900 rounded-lg h-64">
                <FaWhatsapp className="text-6xl text-green-500 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Langkah 2: Hubungi Kami
                </h2>
                <p className="text-gray-300">
                  Klik tombol di bawah untuk menghubungi kami melalui WhatsApp dan konfirmasikan pesanan Anda.
                </p>
              </div>
            </FadeInSection>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Step 3 */}
            <FadeInSection>
              <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-opacity-50 bg-gray-900 rounded-lg h-64">
                <FaMoneyBillWave className="text-6xl text-green-500 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Langkah 3: Pembayaran
                </h2>
                <p className="text-gray-300">
                  Lakukan pembayaran sesuai dengan instruksi yang diberikan melalui WhatsApp.
                </p>
              </div>
            </FadeInSection>

            {/* Step 4 */}
            <FadeInSection>
              <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-opacity-50 bg-gray-900 rounded-lg h-64">
                <FaCheckCircle className="text-6xl text-green-500 mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Langkah 4: Konfirmasi
                </h2>
                <p className="text-gray-300">
                  Setelah pembayaran, konfirmasikan transaksi Anda kepada kami dan layanan akan segera diproses.
                </p>
                <a
                  href="https://wa.me/081916044812" // Ganti dengan nomor WhatsApp yang sesuai
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300 mt-4 inline-block"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}
