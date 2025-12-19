import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    if (type === 'privacy') {
      return NextResponse.json({
        success: true,
        data: {
          title: 'Privacy Policy',
          url: `${baseUrl}/privacy`,
          lastUpdated: '2024',
          description: 'Kebijakan Privasi HERI SUDARYANTO & PARTNERS - Perlindungan data pribadi klien sesuai hukum Indonesia'
        }
      });
    }
    
    if (type === 'terms') {
      return NextResponse.json({
        success: true,
        data: {
          title: 'Terms and Conditions',
          url: `${baseUrl}/terms`,
          lastUpdated: '2024',
          description: 'Syarat dan Ketentuan Layanan HERI SUDARYANTO & PARTNERS - Aturan penggunaan layanan hukum'
        }
      });
    }
    
    // Return all legal pages
    return NextResponse.json({
      success: true,
      data: {
        company: 'HERI SUDARYANTO & PARTNERS',
        pages: [
          {
            title: 'Privacy Policy',
            url: `${baseUrl}/privacy`,
            lastUpdated: '2024',
            description: 'Kebijakan Privasi - Perlindungan data pribadi klien'
          },
          {
            title: 'Terms and Conditions',
            url: `${baseUrl}/terms`,
            lastUpdated: '2024',
            description: 'Syarat dan Ketentuan - Aturan penggunaan layanan hukum'
          }
        ]
      }
    });
    
  } catch (error) {
    console.error('Legal API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, email, message } = body;
    
    if (action === 'contact') {
      // Simulate sending contact request
      console.log('Contact request:', { email, message });
      
      // Here you would typically:
      // 1. Validate the input
      // 2. Send email to the law firm
      // 3. Store in database
      // 4. Send confirmation to user
      
      return NextResponse.json({
        success: true,
        message: 'Pesan Anda telah diterima. Tim kami akan menghubungi Anda segera.',
        reference: `REF-${Date.now()}`
      });
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid action' 
      },
      { status: 400 }
    );
    
  } catch (error) {
    console.error('Legal POST API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}