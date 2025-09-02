"use client";

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactPageSkeleton } from '@/components/skeletons';
import { useTranslations } from '@/hooks/useTranslations';

export default function ContactPage() {
  const { t, isLoading } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading || !mounted) {
    return <ContactPageSkeleton />;
  }

  return (
    <div className="min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-32 md:pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <ContactForm />
      </div>
    </div>
  );
}
