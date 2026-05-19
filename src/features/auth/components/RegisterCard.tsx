import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { Lock, Mail, User } from "lucide-react";
import { useState, type SubmitEvent } from "react";
import { Link } from "react-router-dom";

export function RegisterCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // função para validar username
  const validateUsername = () => {
    if (username.trim().split(" ").length < 2) {
      setUsernameError("O nome completo deve conter pelo menos dois nomes.");
      return false;
    } else {
      setUsernameError("");
      return true;
    }
  }

  // Função para validar o E-mail
  const validateEmail = () => {
    if (!email.includes("@")) {
      setEmailError("Insira um e-mail válido (ex: nome@email.com)");
      return false;
    } else {
      setEmailError(""); // Limpa o erro se estiver certo
      return true;
    }
  }

  // função para validar senha
  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  }

  // função para validar confirmação de senha
  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem.");
      return false;
    } else {
      setConfirmPasswordError("");
      return true;
    }
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      alert("Por favor, verifique seus dados antes de criar sua conta na forja.");
      return;
    }

    alert("Conta criada com sucesso! Bem-vindo à forja.");
    console.log("Dados enviados para registro:", { username, email, password });
  }

  return (
    <div className="bg-surface pt-12 pb-8 px-8 rounded-2xl border border-white/10 w-full max-w-md shadow-[0_0_50px_-12px_rgba(249,115,22,0.1)]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-brand-primary italic tracking-tighter">THE FORGE</h1>
        <p className="text-zinc-400 text-sm mt-2">Crie sua conta e faça parte da elite.</p>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <Input
            label="Nome Completo"
            icon={User}
            type="text"
            placeholder="Digite seu nome completo..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
            error={usernameError}
            onFocus={() => setUsernameError("")}
          />
          <Input
            label="E-mail"
            icon={Mail}
            type="email"
            placeholder="Digite seu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
            onFocus={() => setEmailError("")}
          />
          <Input
            label="Senha"
            icon={Lock}
            isPassword
            placeholder="Digite sua senha com no mínimo 6 caracteres..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={passwordError}
            onFocus={() => setPasswordError("")}
          />
          <Input
            label="Confirmar Senha"
            icon={Lock}
            isPassword
            placeholder="Digite sua senha novamente..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            error={confirmPasswordError}
            onFocus={() => setConfirmPasswordError("")}
          />
        </div>
        <Button type="submit" className="w-full mt-10">
          FAZER PARTE DA FORJA
        </Button>
      </form>
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-zinc-500 text-sm">Já tem uma conta?{' '}
          <Link to={"/"} className="text-brand-primary font-bold hover:underline cursor-pointer ml-1 transition-all active:scale-95">
            Faça login
          </Link>
        </p>
      </div>

    </div>
  )
}