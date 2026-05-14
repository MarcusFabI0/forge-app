import type { ElementType } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ElementType;
}

export function Input({ label, icon: Icon, ...props}: InputProps){
  return (
    <div className="flex flex-col gap-2">
      <label className="text-label text-sm">{label}</label>
      <div className="group relative">
        <Icon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-brand-primary transition-colors" />
        <input
          className="w-full bg-background border-white/5 border focus:border-brand-primary/50 outline-none p-3 pl-10 rounded-xl placeholder:text-zinc-600 text-white transition-colors"
          {...props}
        />
      </div>
    </div>
  )
}