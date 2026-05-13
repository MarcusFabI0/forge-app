import type { ButtonHTMLAttributes } from 'react'

// Definimos o que o nosso botão pode receber além das propriedades padrão do HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  // 1. Estilos que TODO botão terá (Base)
  const baseStyles = "px-6 py-3 rounded-md font-bold transition-all active:scale-95 cursor-pointer uppercase tracking-widest text-sm"
  
  // 2. Dicionário de estilos por variante (usando suas cores do @theme)
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-orange-600 shadow-lg shadow-orange-900/20",
    secondary: "bg-brand-secondary text-white hover:bg-emerald-600",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props} 
    />
  )
}