import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { Mail, Lock } from "lucide-react";

export function LoginCard() {
  return (
    <div className="bg-surface pt-12 pb-8 px-8 rounded-2xl border border-white/10 w-full max-w-md shadow-[0_0_50px_-12px_rgba(249,115,22,0.1)]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-brand-primary italic tracking-tighter">
          THE FORGE
        </h1>
        <p className="text-zinc-400 text-sm mt-2">
          Molda o teu corpo, blinda tua mente.
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Input
          label="E-mail"
          icon={Mail}
          type="email"
          placeholder="Digite seu email..."
        />
        <div className="flex flex-col gap-1.5">
          <Input
            label="Senha"
            icon={Lock}
            type="password"
            placeholder="Digite sua senha..."
          />
          <button className="text-xs text-brand-primary hover:underline self-end cursor-pointer  mr-2">
            Esqueci minha senha
          </button>
        </div>
      </div>
      <Button className="w-full mt-10">ENTRAR NA FORJA</Button>
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-zinc-500 text-sm">
          Ainda não faz parte da elite?{' '}
          <button className="text-brand-primary font-bold hover:underline cursor-pointer ml-1 transition-all active:scale-95">
            Crie sua conta
          </button>
        </p>
      </div>
    </div>
  )
}