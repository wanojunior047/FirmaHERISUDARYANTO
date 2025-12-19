'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft, Eye, Lock, Database, UserRights } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Privacy Policy
                </h1>
                <p className="text-sm text-slate-600">HERI SUDARYANTO & PARTNERS</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-slate-600">Terakhir diperbarui: 2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Shield className="w-6 h-6" />
                <span>Kebijakan Privasi HERI SUDARYANTO & PARTNERS</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Di <strong>HERI SUDARYANTO & PARTNERS</strong>, kami sangat menghargai privasi dan keamanan 
                data pribadi klien kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
                menggunakan, melindungi, dan membagikan informasi pribadi Anda sesuai dengan hukum 
                yang berlaku di Indonesia.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                kebijakan privasi ini. Kami berkomitmen untuk melindungi privasi Anda dan memastikan 
                keamanan data pribadi yang Anda percayakan kepada kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Database className="w-6 h-6" />
                <span>1. Pengumpulan Data Pribadi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Data yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Informasi Identifikasi Pribadi:</strong> Nama lengkap, tanggal lahir, nomor KTP, 
                  nomor paspor, dan informasi identifikasi lainnya.</li>
                  <li><strong>Informasi Kontak:</strong> Alamat lengkap, nomor telepon, email, dan informasi 
                  kontak lainnya.</li>
                  <li><strong>Informasi Profesional:</strong> Pekerjaan, nama perusahaan, jabatan, dan 
                  informasi terkait pekerjaan.</li>
                  <li><strong>Informasi Hukum:</strong> Detail kasus hukum, dokumen hukum, surat kuasa, 
                  dan informasi terkait layanan hukum.</li>
                  <li><strong>Informasi Finansial:</strong> Informasi pembayaran, biaya hukum, dan detail 
                  transaksi keuangan.</li>
                  <li><strong>Informasi Komunikasi:</strong> Catatan komunikasi, email, surat, dan bentuk 
                  komunikasi lainnya.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Cara Kami Mengumpulkan Data:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Formulir pendaftaran dan konsultasi online</li>
                  <li>Konsultasi langsung di kantor kami</li>
                  <li>Komunikasi telepon dan email</li>
                  <li>Dokumen hukum yang diserahkan oleh klien</li>
                  <li>Website dan platform digital kami</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Eye className="w-6 h-6" />
                <span>2. Penggunaan Data Pribadi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Layanan Hukum:</strong> Memberikan layanan hukum profesional, konsultasi, 
                dan representasi hukum sesuai kebutuhan Anda.</li>
                <li><strong>Administrasi:</strong> Mengelola file klien, penagihan, dan administrasi 
                kantor yang efisien.</li>
                <li><strong>Komunikasi:</strong> Menghubungi Anda terkait perkembangan kasus, 
                jadwal pertemuan, dan informasi penting lainnya.</li>
                <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku.</li>
                <li><strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk meningkatkan 
                kualitas layanan kami.</li>
                <li><strong>Keamanan:</strong> Melindungi keamanan dan integritas data klien.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Lock className="w-6 h-6" />
                <span>3. Perlindungan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                <strong>HERI SUDARYANTO & PARTNERS</strong> menerapkan langkah-langkah keamanan yang 
                komprehensif untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Enkripsi Data:</strong> Semua data digital dienkripsi dengan standar industri terkini.</li>
                <li><strong>Akses Terbatas:</strong> Hanya staf yang berwenang yang dapat mengakses data klien.</li>
                <li><strong>Keamanan Fisik:</strong> Dokumen fisik disimpan di ruangan berkunci dengan 
                sistem keamanan 24 jam.</li>
                <li><strong>Backup Data:</strong> Backup data dilakukan secara rutin dan aman.</li>
                <li><strong>Training Staf:</strong> Semua staf menerima pelatihan tentang keamanan data 
                dan etika profesi.</li>
                <li><strong>Audit Keamanan:</strong> Audit keamanan dilakukan secara berkala.</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <UserRights className="w-6 h-6" />
                <span>4. Hak Anda sebagai Klien</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Sebagai klien, Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Hak Akses:</strong> Anda berhak mengetahui data pribadi yang kami simpan tentang Anda.</li>
                <li><strong>Hak Koreksi:</strong> Anda dapat memperbarui atau mengoreksi data pribadi yang tidak akurat.</li>
                <li><strong>Hak Penghapusan:</strong> Anda dapat meminta penghapusan data pribadi dalam kondisi tertentu.</li>
                <li><strong>Hak Pembatasan:</strong> Anda dapat membatasi pengolahan data pribadi Anda.</li>
                <li><strong>Hak Portabilitas:</strong> Anda berhak menerima data pribadi Anda dalam format yang terstruktur.</li>
                <li><strong>Hak Keberatan:</strong> Anda dapat menolak pengolahan data pribadi untuk tujuan tertentu.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">5. Pembagian Data Pihak Ketiga</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                tanpa persetujuan Anda, kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Otoritas Hukum:</strong> Sesuai dengan perintah pengadilan atau kewajiban hukum.</li>
                <li><strong>Partner Profesional:</strong> Dengan advokat atau konsultan hukum lain yang terlibat dalam kasus Anda.</li>
                <li><strong>Penyedia Layanan:</strong> Dengan penyedia layanan yang membantu operasional kami 
                (misalnya, sistem manajemen kasus).</li>
                <li><strong>Keamanan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">6. Penyimpanan Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Kami menyimpan data pribadi Anda sesuai dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Periode Retensi:</strong> Data disimpan selama diperlukan untuk layanan hukum 
                dan sesuai dengan periode retensi hukum.</li>
                <li><strong>Kewajiban Hukum:</strong> Beberapa data harus disimpan sesuai dengan 
                persyaratan hukum dan regulasi.</li>
                <li><strong>Penghapusan Aman:</strong> Data yang tidak lagi diperlukan akan dihapus 
                secara aman dan permanen.</li>
              </ul>
            </CardContent>
          </Card>

          {/* International Data */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">7. Transfer Data Internasional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Data pribadi Anda akan disimpan dan diproses di dalam wilayah Indonesia. 
                Kami tidak akan mentransfer data pribadi Anda ke luar negeri tanpa persetujuan 
                Anda dan sesuai dengan hukum yang berlaku.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">8. Perubahan Kebijakan Privasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website kami atau komunikasi langsung dengan Anda. 
                Penggunaan layanan kami yang berkelanjutan menunjukkan persetujuan Anda terhadap 
                kebijakan privasi yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">9. Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, 
                silakan hubungi kami:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">HERI SUDARYANTO & PARTNERS</p>
                <p className="text-slate-700">
                  <strong>Alamat:</strong> Jl. Arif Rahman Blok C No. 45, Kel. Nagasari, Kec. Karawang Barat, 
                  Kab. Karawang, Prov. Jawa Barat, Kode Pos: 41312<br />
                  <strong>Telepon:</strong> 0823-1204-2902<br />
                  <strong>Email:</strong> privacy@herisudaryanto.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}