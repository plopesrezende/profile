'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

interface TechLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

export default function TechLogo({ 
  size = 'md',
  showName = true
}: TechLogoProps) {
  const { resolvedTheme } = useTheme();
  
  // Colors based on theme
  const primaryColor = resolvedTheme === 'dark' ? '#60A5FA' : '#3B82F6'; // blue-400 : blue-500
  const secondaryColor = resolvedTheme === 'dark' ? '#93C5FD' : '#1E3A8A'; // blue-300 : blue-900
  const accentColor = resolvedTheme === 'dark' ? '#34D399' : '#10B981'; // emerald-400 : emerald-500
  const textColor = resolvedTheme === 'dark' ? '#F9FAFB' : '#1F2937'; // gray-50 : gray-800
  
  // Dimensions based on size
  const dimensions = {
    sm: { width: 32, height: 32, fontSize: 'text-lg', strokeWidth: 2 },
    md: { width: 40, height: 40, fontSize: 'text-xl', strokeWidth: 2.5 },
    lg: { width: 50, height: 50, fontSize: 'text-2xl', strokeWidth: 3 },
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
          {/* Code brackets */}
          <path 
            d="M10 15L5 25L10 35M40 15L45 25L40 35" 
            stroke={primaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Hex pattern for tech/code background */}
          <path 
            d="M25 7L35 13V27L25 33L15 27V13L25 7Z" 
            fill={primaryColor} 
            fillOpacity="0.1" 
            stroke={primaryColor} 
            strokeWidth={strokeWidth/2}
          />
          
          {/* PR initials */}
          <path 
            d="M19 17V33M19 17H27C28.6569 17 30 18.3431 30 20C30 21.6569 28.6569 23 27 23H22" 
            stroke={secondaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M27 23L32 33" 
            stroke={secondaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Data point/node */}
          <circle cx="25" cy="20" r="1.5" fill={accentColor} />
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