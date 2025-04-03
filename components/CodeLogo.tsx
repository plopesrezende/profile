'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

interface CodeLogoProps {
  variant?: 'primary' | 'white' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

export default function CodeLogo({ 
  variant = 'auto', 
  size = 'md',
  showName = true
}: CodeLogoProps) {
  const { resolvedTheme } = useTheme();
  
  // Determine colors based on theme and variant
  let primaryColor = '#3B82F6'; // blue-500
  let secondaryColor = '#1E3A8A'; // blue-900
  let textColor = '#1F2937'; // gray-800
  
  if (variant === 'white') {
    primaryColor = '#FFFFFF';
    secondaryColor = '#F3F4F6';
    textColor = '#FFFFFF';
  } else if (variant === 'auto') {
    if (resolvedTheme === 'dark') {
      primaryColor = '#60A5FA'; // blue-400
      secondaryColor = '#93C5FD'; // blue-300
      textColor = '#F9FAFB'; // gray-50
    }
  }
  
  // Define sizes
  const dimensions = {
    sm: {
      width: 30,
      height: 30,
      fontSize: 'text-lg',
      strokeWidth: 2.5,
    },
    md: {
      width: 40,
      height: 40,
      fontSize: 'text-xl',
      strokeWidth: 3,
    },
    lg: {
      width: 50,
      height: 50,
      fontSize: 'text-2xl',
      strokeWidth: 3.5,
    },
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
        >
          {/* Code-inspired PR logo */}
          <path 
            d="M10 15L5 25L10 35M40 15L45 25L40 35" 
            stroke={primaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M15 10V40M15 15H30C33.3137 15 36 17.6863 36 21C36 24.3137 33.3137 27 30 27H20L35 40" 
            stroke={secondaryColor} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        {showName && (
          <span className={`font-bold ml-2 ${fontSize}`} style={{ color: textColor }}>
            Paulo Rezende
          </span>
        )}
      </div>
    </Link>
  );
}