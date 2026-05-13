import { Button } from "@/shared/components/Button";

export function LoginCard() {
  return (
    <div className="bg-surface pt-12 pb-8 px-8 rounded-2xl border border-white/10 w-full max-w-md shadow-2xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-brand-primary italic tracking-tighter">
          THE FORGE
        </h1>
        <p className="text-zinc-400 text-sm mt-2">
          Molda o teu corpo, blinda tua mente.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-label text-sm">E-mail</label>
          <input
            className="bg-background border-white/5 border focus:border-brand-primary/50 outline-none p-3 rounded-xl placeholder:text-zinc-600 text-white transition-colors"
            type="email"
            placeholder="Digite seu email..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-label text-sm">Senha</label>
          <input
            className="bg-background border-white/5 border focus:border-brand-primary/50 outline-none p-3 rounded-xl placeholder:text-zinc-600 text-white transition-colors"
            type="password"
            placeholder="Digite sua senha..."
          />
          <button className="text-xs text-brand-primary hover:underline self-end cursor-pointer mr-2">
            Esqueci minha senha
          </button>
        </div>
      </div>
      <Button className="w-full mt-10">ENTRAR NA FORJA</Button>
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="text-xs text-label">
          Ainda não tem conta? 
        </span>
      <button className="text-xs text-brand-primary hover:underline self-end cursor-pointer mr-2">
        Crie uma conta agora!
      </button>
      </div>
    </div>
  )
}