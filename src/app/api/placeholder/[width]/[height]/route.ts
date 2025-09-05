import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ width: string; height: string }> }
) {
  try {
    const { width, height } = await params;
  const widthNum = parseInt(width) || 400;
  const heightNum = parseInt(height) || 300;
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${widthNum}" height="${heightNum}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1e293b"/>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2eb352;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#2eb352;stop-opacity:0.1" />
        </linearGradient>
      </defs>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle" dy=".3em">
        ${widthNum} × ${heightNum}
      </text>
    </svg>
  `;

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    // Handle any params serialization issues gracefully
    console.error('Error in placeholder API route:', error);
    
    // Return a default placeholder
    const defaultSvg = `
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1e293b"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" text-anchor="middle" dy=".3em">
          400 × 300
        </text>
      </svg>
    `;
    
    return new NextResponse(defaultSvg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }
}
