import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { Mail, Lock } from "lucide-react";
import { useState, type SubmitEvent } from "react";

export function LoginCard() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Função para validar o E-mail
  const validateEmail = () => {
    if (!email.includes("@")) {
      setEmailError("Insira um e-mail válido (ex: nome@email.com)");
    } else {
      setEmailError(""); // Limpa o erro se estiver certo
    }
  };

  // Função para validar a Senha
  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres");
    } else {
      setPasswordError(""); // Limpa o erro se estiver certo
    }
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (emailError || passwordError || !email || !password) {
      alert("Por favor, verifique seus dados antes de entrar na forja.");
      return;
    }

    alert("Autenticação realizada com sucesso! Bem-vindo à forja.");
    console.log("Dados enviados para autenticação:", { email, password });
  };

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
      <form onSubmit={handleSubmit} className="w-full">

        <div className="flex flex-col gap-4 w-full">
          <Input
            label="E-mail"
            icon={Mail}
            type="email"
            placeholder="Digite seu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
          />
          <div className="flex flex-col gap-0">
            <Input
              label="Senha"
              icon={Lock}
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              error={passwordError}
              isPassword
            />
            <button className="text-xs text-brand-primary hover:underline self-end cursor-pointer mr-2 -mt-2">
              Esqueci minha senha
            </button>
          </div>
        </div>
        <Button type="submit" className="w-full mt-10">
          ENTRAR NA FORJA
        </Button>
      </form>
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