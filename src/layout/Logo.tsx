// src/components/Logo.tsx
import Image from 'next/image';

interface LogoProps {
    isExpanded: boolean;
    isHovered: boolean;
    isMobileOpen: boolean;
}

export default function Logo({ isExpanded, isHovered, isMobileOpen }: LogoProps) {
    const showFullLogo = isExpanded || isHovered || isMobileOpen;

    return (
        <>
            {showFullLogo ? (
                <>
                    <div className="flex gap-3 items-center">
                        <Image
                            src="/images/logo/jslogo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                        <h1 className="text-xl font-bold text-black dark:text-white">JSLife CMS</h1>
                    </div>
                </>
            ) : (
                <Image
                    src="/images/logo/jslogo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                    style={{ objectFit: 'contain' }}
                />
            )}
        </>
    );
}
