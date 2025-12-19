'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Scale, 
  Users, 
  Shield, 
  Building2, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  Briefcase,
  FileText,
  Gavel
} from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const practiceAreas = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Hukum Pidana",
      description: "Pertahanan hukum komprehensif untuk kasus pidana dan perlindungan hak-hak terdakwa"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Hukum Perdata",
      description: "Penyelesaian sengketa perdata, kontrak, dan hubungan hukum antar individu"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Hukum Bisnis",
      description: "Konsultasi dan pendampingan hukum untuk kegiatan usaha dan korporasi"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hukum Keluarga",
      description: "Penanganan kasus perceraian, waris, dan hukum keluarga lainnya"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hukum Tenaga Kerja",
      description: "Perlindungan hak-hak pekerja dan penyelesaian sengketa ketenagakerjaan"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Hukum Properti",
      description: "Transaksi properti, sengketa tanah, dan perizinan bangunan"
    }
  ];

  const advantages = [
    "Pengalaman lebih dari 15 tahun",
    "Tim advokat profesional dan berpengalaman",
    "Pendekatan personal untuk setiap klien",
    "Biaya kompetitif dan transparan",
    "Konsultasi gratis untuk kasus pertama",
    "Jaringan luas di seluruh Indonesia"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="HERI SUDARYANTO & PARTNERS Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  HERI SUDARYANTO & PARTNERS
                </h1>
                <p className="text-sm text-slate-600">Firma Hukum Profesional</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                0823-1204-2902
              </Button>
              <Button size="sm">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-700 text-white">
              <Scale className="w-4 h-4 mr-2" />
              Profesional & Terpercaya
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Partner Hukum Terpercaya untuk Bisnis Anda
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Kami menyediakan layanan hukum komprehensif dengan pendekatan 
              profesional dan personal untuk setiap klien
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="w-5 h-5 mr-2" />
                Konsultasi Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Company Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Alamat Kantor</h3>
                  <p className="text-slate-600 text-sm">
                    Jl. Arif Rahman Blok C No. 45<br />
                    Kel. Nagasari, Kec. Karawang Barat<br />
                    Kab. Karawang, Prov. Jawa Barat<br />
                    Kode Pos: 41312
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Kontak</h3>
                  <p className="text-slate-600 text-sm">
                    Telepon: 0823-1204-2902<br />
                    Email: info@herisudaryanto.com<br />
                    WhatsApp: 0823-1204-2902
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Jam Operasional</h3>
                  <p className="text-slate-600 text-sm">
                    Senin - Jumat: 09:00 - 17:00<br />
                    Sabtu: 09:00 - 13:00<br />
                    Minggu: Tutup<br />
                    Konsultasi Darurat: 24/7
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Tentang HERI SUDARYANTO & PARTNERS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Firma hukum terkemuka dengan komitmen terhadap keadilan dan keunggulan layanan hukum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>HERI SUDARYANTO & PARTNERS</strong> adalah firma hukum yang telah berdiri sejak tahun 2008, 
                dipimpin oleh Heri Sudaryanto, S.H., M.H. bersama tim advokat profesional dan berpengalaman. 
                Kami telah melayani ribuan klien dari berbagai latar belakang, mulai dari individu hingga korporasi.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dengan motto "Keadilan untuk Semua", kami berkomitmen untuk memberikan layanan hukum 
                terbaik dengan integritas, profesionalisme, dan kepedulian terhadap setiap klien. 
                Pengalaman kami yang luas dalam berbagai bidang hukum membuat kami menjadi pilihan 
                terpercaya untuk kebutuhan hukum Anda.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-slate-600">Klien Puas</div>
                </div>
              </div>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Area Praktik Hukum
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Layanan hukum komprehensif untuk berbagai kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{area.title}</h3>
                      <p className="text-slate-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Bantuan Hukum? Kami Siap Membantu
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Konsultasikan masalah hukum Anda dengan tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              Email Konsultasi
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="HERI SUDARYANTO & PARTNERS Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg">HERI SUDARYANTO & PARTNERS</h3>
                  <p className="text-slate-400 text-sm">Firma Hukum Profesional</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Partner hukum terpercaya untuk keadilan dan keunggulan layanan hukum
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Hukum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pendampingan Kasus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Drafting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Due Diligence</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tim Advokat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artikel Hukum</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Mutu</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 HERI SUDARYANTO & PARTNERS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}