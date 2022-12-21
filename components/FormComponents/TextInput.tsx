export interface InputProps {
  labelName: string;
  id?: string;
}

export const TextInput = ({ labelName, id }: InputProps) => {
  return (
    <label
      htmlFor={id ? id : labelName}
      className="
              w-full
              h-max
              flex
              flex-col
              sm:flex-row
              align-bottom
            "
    >
      <span
        className="
              px-4
              text-xl
              grid
              items-center
            "
      >
        {labelName}
      </span>
      <input
        type="text"
        name={id ? id : labelName}
        id={id ? id : labelName}
        className="
                p-3
                w-full
                h-20
                bg-orange-700
                "
      />
    </label>
  );
};
