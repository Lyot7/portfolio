import React from 'react';

export interface ProjectBentoSkeletonProps {
  className?: string;
}

const ProjectBentoSkeleton: React.FC<ProjectBentoSkeletonProps> = ({ className = '' }) => {
  return (
    <>
      <style>
        {`
          .bento-skeleton {
            --glow-color: 34, 197, 94;
            --border-color: #166534;
            --background-dark: #060010;
          }
          
          .bento-skeleton-responsive {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(6, 1fr);
            gap: 1rem;
            width: 100%;
            max-width: 100vw;
            margin: 0 auto;
            min-height: 400px;
            max-height: 80vh;
          }
          
          @media (min-width: 768px) {
            .bento-skeleton-responsive {
              grid-template-columns: repeat(7, 1fr);
              grid-template-rows: repeat(5, 1fr);
              gap: 1rem;
              min-height: 320px;
              max-height: 75vh;
              max-width: 95vw;
            }
          }
          
          @media (min-width: 1024px) {
            .bento-skeleton-responsive {
              max-width: 90vw;
              min-height: 350px;
              max-height: 70vh;
            }
          }
          
          @media (min-width: 1280px) {
            .bento-skeleton-responsive {
              max-width: 85vw;
              min-height: 380px;
              max-height: 65vh;
            }
          }
          
          .skeleton-card {
            background: rgba(6, 0, 16, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(34, 197, 94, 0.2);
            border-radius: 20px;
            overflow: hidden;
            position: relative;
          }
          
          .skeleton-shimmer {
            background: linear-gradient(90deg, 
              rgba(34, 197, 94, 0.1) 25%, 
              rgba(34, 197, 94, 0.2) 50%, 
              rgba(34, 197, 94, 0.1) 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            position: absolute;
            inset: 0;
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .skeleton-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }
          
          .skeleton-text {
            background: rgba(34, 197, 94, 0.2);
            border-radius: 8px;
            height: 1rem;
            width: 80%;
            margin: 0.25rem 0;
          }
          
          .skeleton-text-large {
            height: 1.5rem;
            width: 90%;
          }
          
          .skeleton-text-small {
            height: 0.75rem;
            width: 60%;
          }
          
          .skeleton-image {
            background: rgba(34, 197, 94, 0.15);
            border-radius: 12px;
            width: 100%;
            height: 100%;
          }
          
          .skeleton-buttons {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }
          
          .skeleton-button {
            background: rgba(34, 197, 94, 0.2);
            border-radius: 8px;
            height: 2rem;
            width: 100%;
          }
          
          .skeleton-logos {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }
          
          .skeleton-logo {
            background: rgba(34, 197, 94, 0.2);
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
          }
        `}
      </style>
      
      <div className={`w-full ${className}`}>
        <div className="bento-skeleton grid gap-2 p-2 sm:p-3 md:p-4 select-none relative mx-auto">
          <div className="bento-skeleton-responsive">
            {/* Titre - Mobile: col-start-1 row-start-1 col-span-3, Desktop: col-start-1 row-start-1 col-span-5 row-span-1 */}
            <div className="skeleton-card col-start-1 row-start-1 col-span-3 md:col-start-1 md:row-start-1 md:col-span-5 md:row-span-1">
              <div className="skeleton-shimmer"></div>
              <div className="skeleton-content">
                <div className="skeleton-text skeleton-text-large"></div>
              </div>
            </div>
            
            {/* Liens - Mobile: col-start-3 row-start-2 row-span-2, Desktop: col-start-6 row-start-1 col-span-2 row-span-1 */}
            <div className="skeleton-card col-start-3 row-start-2 row-span-2 md:col-start-6 md:row-start-1 md:col-span-2 md:row-span-1">
              <div className="skeleton-shimmer"></div>
              <div className="skeleton-content">
                <div className="skeleton-buttons">
                  <div className="skeleton-button"></div>
                  <div className="skeleton-button"></div>
                </div>
              </div>
            </div>
            
            {/* Image - Mobile: col-start-1 row-start-2 col-span-2 row-span-2, Desktop: col-start-4 row-start-2 col-span-4 row-span-3 */}
            <div className="skeleton-card col-start-1 row-start-2 col-span-2 row-span-2 md:col-start-4 md:row-start-2 md:col-span-4 md:row-span-3">
              <div className="skeleton-shimmer"></div>
              <div className="skeleton-content p-0">
                <div className="skeleton-image"></div>
              </div>
            </div>
            
            {/* Description - Mobile: col-start-1 row-start-4 col-span-3 row-span-2, Desktop: col-start-1 row-start-2 col-span-3 row-span-3 */}
            <div className="skeleton-card col-start-1 row-start-4 col-span-3 row-span-2 md:col-start-1 md:row-start-2 md:col-span-3 md:row-span-3">
              <div className="skeleton-shimmer"></div>
              <div className="skeleton-content">
                <div className="skeleton-text skeleton-text-small"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text skeleton-text-small"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text skeleton-text-small"></div>
              </div>
            </div>
            
            {/* Technologies - Mobile: col-start-1 row-start-6 col-span-3, Desktop: col-start-1 row-start-5 col-span-7 row-span-1 */}
            <div className="skeleton-card col-start-1 row-start-6 col-span-3 md:col-start-1 md:row-start-5 md:col-span-7 md:row-span-1">
              <div className="skeleton-shimmer"></div>
              <div className="skeleton-content">
                <div className="skeleton-logos">
                  <div className="skeleton-logo"></div>
                  <div className="skeleton-logo"></div>
                  <div className="skeleton-logo"></div>
                  <div className="skeleton-logo"></div>
                  <div className="skeleton-logo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBentoSkeleton;
