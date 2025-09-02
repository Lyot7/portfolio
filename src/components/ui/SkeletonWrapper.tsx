"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SkeletonWrapperProps {
  isLoading: boolean;
  skeleton: ReactNode;
  children: ReactNode;
  className?: string;
  transitionDuration?: number;
}

/**
 * SkeletonWrapper - Composant qui gère les transitions fluides entre skeleton et contenu
 * 
 * Utilise Framer Motion pour des transitions parfaites
 * et respecte les principes SOLID
 */
export function SkeletonWrapper({
  isLoading,
  skeleton,
  children,
  className,
  transitionDuration = 0.3
}: SkeletonWrapperProps) {
  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration }}
          >
            {skeleton}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
