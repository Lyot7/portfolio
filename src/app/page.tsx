import { PortfolioLayout } from '@/components/layout/PortfolioLayout'

export default function Home() {
  return (
    <PortfolioLayout>
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-white mix-blend-difference">
          Bienvenue sur mon portfolio
        </h1>
      </div>
    </PortfolioLayout>
  )
}
