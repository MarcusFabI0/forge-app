import { Button } from '@/shared/components/Button'

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-brand-primary text-6xl font-black italic tracking-tighter">
        THE FORGE
      </h1>
      
      <div className="flex gap-4">
        <Button variant="primary">
          Entrar na Forja
        </Button>

        <Button variant="outline">
          Ver Planos
        </Button>
      </div>
    </div>
  )
}

export default App