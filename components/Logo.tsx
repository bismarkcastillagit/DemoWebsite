import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 200, height = 200, className = "" }: LogoProps) {
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ minWidth: '140px', minHeight: '140px' }}>
      <Image
        src="/logo/ECSVAULT LOGO 01.png"
        alt="Elevate Cyber Solutions Logo"
        width={width}
        height={height}
        className="object-contain w-full h-full"
        priority
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
}
