import React from 'react';
import { MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <div>
      <Button
        variant="default"
        size="lg"
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        Contact Us!
      </Button>

      <div className="flex justify-center gap-4 mt-10">
        <a
          href="https://www.google.com/maps?cid=7243261685927765046"
          className="text-primary hover:text-primary-light transition-colors"
        >
          <MapPin className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/bdozaco"
          className="text-primary hover:text-primary-light transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/bdozaco/"
          className="text-primary hover:text-primary-light transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/bdozaco"
          className="text-primary hover:text-primary-light transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
