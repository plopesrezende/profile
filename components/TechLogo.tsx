'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface TechLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

export default function TechLogo({ 
  size = 'md',
  showName = true
}: TechLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only render theme-dependent content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use default colors for server-side rendering
  const defaultPrimaryColor = '#3B82F6'; // blue-500
  const defaultSecondaryColor = '#1E3A8A'; // blue-900
  const defaultAccentColor = '#10B981'; // emerald-500
  const defaultTextClass = 'text-gray-800';
  
  // Colors based on theme (only used client-side after mounting)
  const primaryColor = mounted && resolvedTheme === 'dark' ? '#60A5FA' : defaultPrimaryColor;
  const secondaryColor = mounted && resolvedTheme === 'dark' ? '#93C5FD' : defaultSecondaryColor;
  const accentColor = mounted && resolvedTheme === 'dark' ? '#34D399' : defaultAccentColor;
  const textColor = mounted ? (resolvedTheme === 'dark' ? 'text-gray-50' : 'text-gray-800') : defaultTextClass;
  
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
          <span className={`font-bold ${fontSize} ${textColor}`}>
            Paulo Rezende
          </span>
        )}
      </div>
    </Link>
  );
}