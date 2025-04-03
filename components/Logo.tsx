'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

export default function Logo({ 
  size = 'md',
  showName = true
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  
  // Colors based on theme
  const primaryColor = resolvedTheme === 'dark' ? '#60A5FA' : '#3B82F6'; // blue-400 : blue-500
  const secondaryColor = resolvedTheme === 'dark' ? '#93C5FD' : '#1E3A8A'; // blue-300 : blue-900
  const textColor = resolvedTheme === 'dark' ? '#F9FAFB' : '#1F2937'; // gray-50 : gray-800
  
  // Dimensions based on size
  const dimensions = {
    sm: { width: 32, height: 32, fontSize: 'text-lg', strokeWidth: 2.5 },
    md: { width: 40, height: 40, fontSize: 'text-xl', strokeWidth: 3 },
    lg: { width: 50, height: 50, fontSize: 'text-2xl', strokeWidth: 3.5 },
  };
  
  const { width, height, fontSize, strokeWidth } = dimensions[size];
  
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        <svg 
          width={width} 
          height={height} 
          viewBox="0 0 50 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          {/* Circular PR monogram */}
          <circle cx="25" cy="25" r="20" fill={primaryColor} fillOpacity="0.1" />
          <circle cx="25" cy="25" r="20" stroke={primaryColor} strokeWidth={strokeWidth/2} />
          
          {/* Stylized P */}
          <path 
            d="M18 15V35M18 15H28C30.7614 15 33 17.2386 33 20C33 22.7614 30.7614 25 28 25H22" 
            stroke={secondaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Stylized R */}
          <path 
            d="M28 25L33 35" 
            stroke={secondaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        {showName && (
          <span className={`font-bold ${fontSize}`} style={{ color: textColor }}>
            Paulo Rezende
          </span>
        )}
      </div>
    </Link>
  );
}