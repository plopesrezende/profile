'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

interface ArchitectLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

export default function ArchitectLogo({ 
  size = 'md',
  showName = true
}: ArchitectLogoProps) {
  const { resolvedTheme } = useTheme();
  
  // Colors based on theme
  const primaryColor = resolvedTheme === 'dark' ? '#60A5FA' : '#3B82F6'; // blue-400 : blue-500
  const secondaryColor = resolvedTheme === 'dark' ? '#93C5FD' : '#1E3A8A'; // blue-300 : blue-900
  const accentColor = resolvedTheme === 'dark' ? '#FBBF24' : '#F59E0B'; // amber-400 : amber-500
  const textColor = resolvedTheme === 'dark' ? '#F9FAFB' : '#1F2937'; // gray-50 : gray-800
  
  // Dimensions based on size
  const dimensions = {
    sm: { width: 32, height: 32, fontSize: 'text-lg', strokeWidth: 1.5 },
    md: { width: 40, height: 40, fontSize: 'text-xl', strokeWidth: 2 },
    lg: { width: 50, height: 50, fontSize: 'text-2xl', strokeWidth: 2.5 },
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
          {/* Blueprint square background */}
          <rect x="5" y="5" width="40" height="40" stroke={secondaryColor} strokeWidth={strokeWidth/2} strokeDasharray="2 2" fill={primaryColor} fillOpacity="0.05" />
          
          {/* Grid lines */}
          <line x1="15" y1="5" x2="15" y2="45" stroke={secondaryColor} strokeWidth={strokeWidth/3} strokeDasharray="1 1" />
          <line x1="25" y1="5" x2="25" y2="45" stroke={secondaryColor} strokeWidth={strokeWidth/3} strokeDasharray="1 1" />
          <line x1="35" y1="5" x2="35" y2="45" stroke={secondaryColor} strokeWidth={strokeWidth/3} strokeDasharray="1 1" />
          <line x1="5" y1="15" x2="45" y2="15" stroke={secondaryColor} strokeWidth={strokeWidth/3} strokeDasharray="1 1" />
          <line x1="5" y1="25" x2="45" y2="25" stroke={secondaryColor} strokeWidth={strokeWidth/3} strokeDasharray="1 1" />
          <line x1="5" y1="35" x2="45" y2="35" stroke={secondaryColor} strokeWidth={strokeWidth/3} strokeDasharray="1 1" />
          
          {/* The P and R architectural elements */}
          <path 
            d="M15 12V38M15 12H30C32.2091 12 34 13.7909 34 16C34 18.2091 32.2091 20 30 20H19" 
            stroke={primaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M30 20L35 38" 
            stroke={primaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Architectural measurement point */}
          <circle cx="15" cy="12" r="1.5" fill={accentColor} />
          <circle cx="30" cy="20" r="1.5" fill={accentColor} />
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