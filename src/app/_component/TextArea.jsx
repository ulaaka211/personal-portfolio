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
      <label className="text-sm font-medium text-gray-300">{label}</label>
      <div
        data-testid="error"
        className={cx(
          "flex px-4 items-center gap-2 bg-white/5 rounded-lg border transition-colors",
          {
            "border-red-500/60 focus-within:ring-1 focus-within:ring-red-500": error,
            "border-white/10 hover:border-white/20 focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500": !error,
          }
        )}
      >
        <textarea
          className="md:min-h-[160px] min-h-[100px] py-3 w-full text-white bg-transparent rounded-sm focus:outline-none text-sm resize-none placeholder:text-gray-600"
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </div>
      {helperText && <p className="text-red-400 text-xs mt-0.5">{helperText}</p>}
    </div>
  );
};
