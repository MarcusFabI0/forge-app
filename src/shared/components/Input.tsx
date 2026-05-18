import { Eye, EyeOff } from "lucide-react";
import { useState, type ElementType } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ElementType;
  error?: string;
  isPassword?: boolean;
}

export function Input({ label, icon: Icon, error, isPassword, ...props }: InputProps) {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full group">
      <label className="text-zinc-400 text-sm font-semibold group-focus-within:text-brand-primary transition-colors">
        {label}
      </label>

      <div className={`flex items-center gap-3 bg-zinc-900/50 border ${error ? 'border-red-500' : 'border-white/10 group-focus-within:border-brand-primary'} px-4 py-3 rounded-xl transition-all relative`}>
        <Icon className={`w-5 h-5 ${error ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-brand-primary'} transition-colors`} />

        <input
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : props.type}
          className="bg-transparent outline-none w-full text-white placeholder-zinc-600 text-sm pr-10"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-zinc-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>

      <div className="min-h-4 mt-0.5 ml-1">
        {error ? (
          <span className="text-xs text-red-500 font-medium block animate-fade-in">
            {error}
          </span>
        ) : null}
      </div>
    </div>
  );
}