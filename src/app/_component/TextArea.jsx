import cx from "classnames";

export const TextArea = (props) => {
  const {
    name,
    label,
    type,
    onChange,
    onBlur,
    value,
    placeholder,
    helperText,
    error,
  } = props;

  return (
    <div className="flex flex-col gap-1 w-full" data-testid="Custom-Input">
      <h1 className="text-sm font-mono text-slate-400">
        {label}
      </h1>
      <label
        data-testid="error"
        className={cx(
          "flex px-3 items-start gap-2 bg-[rgba(255,255,255,0.04)] rounded border border-[rgba(0,212,255,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-colors",
          {
            "border-red-700 hover:border-red-700 focus-within:ring-1 focus-within:ring-red-700":
              error,
            "focus-within:ring-1 focus-within:ring-[rgba(0,212,255,0.4)] focus-within:border-[rgba(0,212,255,0.4)]":
              !error,
          }
        )}
      >
        <textarea
          className="min-h-[120px] py-3 w-full text-slate-200 bg-transparent rounded-sm focus:outline-none text-sm font-mono placeholder-slate-600 resize-none"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </label>
      <p className="text-red-500 text-xs font-mono">{helperText}</p>
    </div>
  );
};

