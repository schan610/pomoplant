'use client';
import { useState } from 'react';
import { XIcon } from 'lucide-react';
import Container from '@/components/ui/container';

const DesktopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  const onClose = () => setIsVisible(false);

  return (
    <div className="border-b bg-muted py-4">
      <Container className="flex items-center justify-between text-muted-foreground">
        <div className="flex flex-1 flex-col items-center gap-2 text-center text-sm">
          <span>Download our Windows desktop app to get the full experience!</span>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/download-windows"
              className="underline hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Download for Windows
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScWq1H9V8hxh6k__lK7k_ppGovoXKj6I9M3jn75vms_KDdzoA/viewform?usp=sharing&ouid=100114935778709490230"
              className="underline hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Give feedback
            </a>
          </div>
        </div>

        {/* Close button */}
        <button onClick={onClose} aria-label="Dismiss banner" className="ml-4 flex-shrink-0">
          <XIcon className="h-5 w-5" />
        </button>
      </Container>
    </div>
  );
};

export default DesktopBanner;
