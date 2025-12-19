'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowLeft, Scale, AlertCircle, Users, Gavel, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
                  Terms and Conditions
                </h1>
                <p className="text-sm text-slate-600">HERI SUDARYANTO & PARTNERS</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
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
                <FileText className="w-6 h-6" />
                <span>Syarat dan Ketentuan Layanan HERI SUDARYANTO & PARTNERS</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Selamat datang di <strong>HERI SUDARYANTO & PARTNERS</strong>. Syarat dan Ketentuan 
                ini mengatur penggunaan layanan hukum yang kami sediakan. Dengan menggunakan layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Harap baca dengan seksama syarat dan ketentuan ini sebelum menggunakan layanan kami. 
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Scale className="w-6 h-6" />
                <span>1. Definisi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Dalam Syarat dan Ketentuan ini:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>"Firma" atau "Kami":</strong> Mengacu pada HERI SUDARYANTO & PARTNERS, 
                  firma hukum yang terdaftar dan beroperasi di Indonesia.</li>
                  <li><strong>"Klien" atau "Anda":</strong> Mengacu pada individu atau entitas yang 
                  menggunakan layanan hukum kami.</li>
                  <li><strong>"Layanan":</strong> Mengacu pada semua layanan hukum yang kami sediakan, 
                  termasuk konsultasi, representasi, dan bantuan hukum lainnya.</li>
                  <li><strong>"Kasus":</strong> Mengacu pada perkara hukum yang ditangani oleh firma 
                  atas nama klien.</li>
                  <li><strong>"Informasi Rahasia":</strong> Mengacu pada semua informasi yang 
                  dibagikan oleh klien kepada firma dalam rangka layanan hukum.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Gavel className="w-6 h-6" />
                <span>2. Layanan Hukum</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Layanan yang Kami Sediakan:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Konsultasi Hukum:</strong> Memberikan nasihat hukum profesional untuk 
                  berbagai masalah hukum.</li>
                  <li><strong>Representasi Hukum:</strong> Mewakili klien dalam proses peradilan 
                  dan non-peradilan.</li>
                  <li><strong>Drafting Dokumen:</strong> Menyusun dokumen hukum seperti kontrak, 
                  surat kuasa, dan dokumen lainnya.</li>
                  <li><strong>Due Diligence:</strong> Melakukan pemeriksaan hukum menyeluruh untuk 
                  transaksi bisnis.</li>
                  <li><strong>Mediasi dan Negosiasi:</strong> Membantu penyelesaian sengketa 
                  melalui mediasi dan negosiasi.</li>
                  <li><strong>Legal Audit:</strong> Melakukan audit kepatuhan hukum untuk perusahaan.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Batasan Layanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Kami tidak memberikan jaminan hasil spesifik untuk kasus hukum.</li>
                  <li>Layanan kami terbatas pada hukum yang berlaku di Indonesia.</li>
                  <li>Kami berhak menolak kasus yang bertentangan dengan etika profesi atau hukum.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Users className="w-6 h-6" />
                <span>3. Tanggung Jawab Klien</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Sebagai klien, Anda memiliki tanggung jawab berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Informasi Lengkap dan Jujur:</strong> Memberikan informasi yang lengkap, 
                akurat, dan jujur terkait kasus Anda.</li>
                <li><strong>Dokumen Lengkap:</strong> Menyediakan semua dokumen yang diperlukan 
                untuk penanganan kasus.</li>
                <li><strong>Kooperatif:</strong> Bekerja sama dengan tim kami dalam penanganan kasus.</li>
                <li><strong>Biaya tepat waktu:</strong> Membayar biaya hukum sesuai dengan perjanjian.</li>
                <li><strong>Komunikasi:</strong> Merespons komunikasi dari kami secara tepat waktu.</li>
                <li><strong>Keputusan:</strong> Mengambil keputusan hukum akhir setelah berkonsultasi.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fees and Payments */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">4. Biaya dan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Struktur Biaya:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Konsultasi:</strong> Biaya konsultasi dapat berupa tarif per jam atau paket.</li>
                  <li><strong>Retainer:</strong> Biaya retainer untuk layanan jangka panjang.</li>
                  <li><strong>Success Fee:</strong> Biaya berdasarkan keberhasilan kasus (jika disepakati).</li>
                  <li><strong>Biaya Lainnya:</strong> Biaya pengadilan, notaris, dan biaya terkait lainnya.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Syarat Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Pembayaran dilakukan sesuai dengan faktur yang diterbitkan.</li>
                  <li>Pembayaran dapat dilakukan melalui transfer bank atau metode lain yang disepakati.</li>
                  <li>Keterlambatan pembayaran dapat dikenakan denda.</li>
                  <li>Pembayaran di muka diperlukan untuk layanan tertentu.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <Shield className="w-6 h-6" />
                <span>5. Kerahasiaan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Kami berkomitmen untuk menjaga kerahasiaan informasi klien:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Semua informasi yang dibagikan oleh klien akan dijaga kerahasiaannya.</li>
                <li>Informasi hanya akan dibagikan dengan persetujuan klien atau sesuai kewajiban hukum.</li>
                <li>Kami menerapkan sistem keamanan yang memadai untuk melindungi data klien.</li>
                <li>Kerahasiaan tetap berlaku setelah hubungan hukum berakhir.</li>
                <li>Staf kami terikat oleh perjanjian kerahasiaan.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-900">
                <AlertCircle className="w-6 h-6" />
                <span>6. Penafian (Disclaimer)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Hal-hal penting yang perlu diperhatikan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Informasi di website kami tidak menggantikan nasihat hukum profesional.</li>
                <li>Kami tidak bertanggung jawab atas keputusan yang dibuat berdasarkan informasi umum.</li>
                <li>Hasil kasus tidak dapat dijamin dan bergantung pada banyak faktor.</li>
                <li>Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial.</li>
                <li>Hukum dapat berubah sewaktu-waktu dan informasi mungkin tidak selalu terkini.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">7. Pengakhiran Hubungan Hukum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Pengakhiran oleh Klien:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Klien dapat mengakhiri hubungan hukum kapan saja dengan pemberitahuan tertulis.</li>
                  <li>Klien bertanggung jawab atas biaya yang telah dikeluarkan hingga tanggal pengakhiran.</li>
                  <li>Dokumen klien akan dikembalikan setelah semua biaya dilunasi.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Pengakhiran oleh Firma:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Kami dapat mengakhiri hubungan jika terjadi pelanggaran syarat dan ketentuan.</li>
                  <li>Pengakhiran juga dapat dilakukan jika terjadi konflik kepentingan.</li>
                  <li>Kami akan memberikan pemberitahuan dan membantu transisi ke pengacara lain.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">8. Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Semua konten, materi, dan properti intelektual di website dan materi milik 
                HERI SUDARYANTO & PARTNERS dilindungi oleh hukum hak cipta. Tidak ada bagian 
                yang boleh direproduksi tanpa izin tertulis dari kami.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">9. Hukum yang Berlaku</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                Republik Indonesia. Setiap sengketa yang timbul dari atau terkait dengan 
                Syarat dan Ketentuan ini akan diselesaikan melalui peradilan di Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">10. Perubahan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                Kami berhak mengubah Syarat dan Ketentuan ini dari waktu ke waktu. 
                Perubahan akan diberitahukan melalui website kami atau komunikasi langsung. 
                Penggunaan layanan kami yang berkelanjutan menunjukkan persetujuan Anda 
                terhadap perubahan tersebut.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8 shadow-lg border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">11. Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-blue-900 mb-2">HERI SUDARYANTO & PARTNERS</p>
                <p className="text-slate-700">
                  <strong>Alamat:</strong> Jl. Arif Rahman Blok C No. 45, Kel. Nagasari, Kec. Karawang Barat, 
                  Kab. Karawang, Prov. Jawa Barat, Kode Pos: 41312<br />
                  <strong>Telepon:</strong> 0823-1204-2902<br />
                  <strong>Email:</strong> legal@herisudaryanto.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="mb-8 shadow-lg border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Persetujuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 text-center font-semibold">
                Dengan menggunakan layanan HERI SUDARYANTO & PARTNERS, Anda menyatakan bahwa 
                Anda telah membaca, memahami, dan setuju untuk terikat oleh Syarat dan Ketentuan ini.
              </p>
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