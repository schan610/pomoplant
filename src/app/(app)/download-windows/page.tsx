'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
const screenshots = [
  { src: '/desktop-preview/focus-preview.png', alt: 'Desktop App Screenshot 1' },
  { src: '/desktop-preview/settings-preview.png', alt: 'Desktop App Screenshot 2' },
];

const DownloadWindowsPage = () => {
  return (
    <div className="min-h-screen bg-muted py-12">
      <Container className="flex flex-col items-center gap-16">
        <div>
          <h1 className="text-center text-4xl font-bold">Early Access: Windows Desktop App</h1>
          <p className="mt-4 text-center text-2xl font-medium text-muted-foreground">
            Our desktop app offers a smoother, more reliable experience for your focus sessions.
          </p>
          <p className="mt-4 text-left text-lg font-medium text-muted-foreground">
            Here’s what’s new:
          </p>
          <ul className="mt-2 max-w-2xl list-inside list-disc space-y-2 text-center text-muted-foreground md:text-left">
            <li>
              <strong>Floating widget:</strong> always-on-top view keeps your timer visible while
              you work
            </li>
            <li>
              <strong>Autoplay:</strong> automatically start your next session if you want
            </li>
            <li>
              <strong>Updated UI</strong>: enjoy a cleaner, more intuitive design
            </li>
          </ul>
        </div>
        <Button size={'lg'} asChild>
          <Link href={'/downloads/Pomoplant_0.1.0_x64_en-US.msi'}>
            <Download />
            Download for Windows
          </Link>
        </Button>
        {/* Screenshots */}
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row">
          {screenshots.map((img) => (
            <div
              key={img.src}
              className="relative h-auto w-full overflow-hidden rounded-lg shadow-lg md:w-[45%]"
            >
              <Image
                loading="eager"
                src={img.src}
                alt={img.alt}
                width={702}
                height={732}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <Button size={'lg'} asChild>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScWq1H9V8hxh6k__lK7k_ppGovoXKj6I9M3jn75vms_KDdzoA/viewform?usp=sharing&ouid=100114935778709490230"
            >
              Give Feedback
            </a>
          </Button>
          <Button size={'lg'} variant={'outline'} asChild>
            <Link href={'/'}>Back to Homepage</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DownloadWindowsPage;
