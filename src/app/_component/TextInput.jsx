import cx from "classnames";

export const TextInput = (props) => {
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
      <h1 className="md:text-lg text-base font-medium md:font-semibold text-black">
        {label}
      </h1>
      <label
        data-testid="error"
        className={cx(
          "flex px-[13px] items-center gap-2 bg-[#ECEDF0] rounded-[4px] border border-[#d6d8db] hover:border-black",
          {
            "border-red-700 hover:border-red-700 focus-within:ring-1 focus-within:ring-red-700 ":
              error,
            "focus-within:ring-1 focus-within:ring-[#3873cb] focus-within:border-[#3873cb] focus-within:hover:border-[#3873cb]":
              !error,
          }
        )}
      >
        <input
          className="py-[13px] w-full text-black bg-[#ECEDF0] rounded-sm focus:outline-none md:text-base text-sm"
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </label>
      <p className="text-red-700 text-xs">{helperText}</p>
    </div>
  );
};
