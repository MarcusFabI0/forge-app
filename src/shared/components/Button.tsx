import type { ButtonHTMLAttributes } from 'react'

// Definimos o que o nosso botão pode receber além das propriedades padrão do HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
// 1. Estilos que TODO botão terá (Base)
const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all active:scale-[0.98] hover:brightness-110 cursor-pointer uppercase tracking-widest text-sm"

// 2. Dicionário de estilos por variante
const variants = {
  primary: "bg-brand-primary text-black shadow-lg shadow-orange-900/20", 
  secondary: "bg-brand-secondary text-white",
  outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black"
}

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props} 
    />
  )
}