import type { FC, ChangeEvent, FocusEvent } from "react";
import cx from "classnames";

interface TextInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  helperText?: string;
  error?: string;
}

export const TextInput: FC<TextInputProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  helperText,
  error,
}) => (
  <div className="flex flex-col gap-1 w-full">
    <h1 className="text-sm font-mono text-slate-400">{label}</h1>
    <label
      className={cx(
        "flex px-3 items-center gap-2 bg-[rgba(255,255,255,0.04)] rounded border border-[rgba(0,212,255,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-colors",
        {
          "border-red-700 hover:border-red-700 focus-within:ring-1 focus-within:ring-red-700": error,
          "focus-within:ring-1 focus-within:ring-[rgba(0,212,255,0.4)] focus-within:border-[rgba(0,212,255,0.4)]": !error,
        },
      )}
    >
      <input
        className="py-3 w-full text-slate-200 bg-transparent rounded-sm focus:outline-none text-sm font-mono placeholder-slate-600"
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
    </label>
    {helperText && <p className="text-red-500 text-xs font-mono">{helperText}</p>}
  </div>
);
