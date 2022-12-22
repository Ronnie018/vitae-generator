import { useState } from "react";
import { clearLabelName, spaceDispatch } from "../../utils";

export interface InputProps {
  labelName: string;
  id?: string;
  type?: string;
}

const DefaultInput = ({ labelName, id, type }: InputProps) => {
  const newLabelName = clearLabelName(labelName);
  // const [useSmallSpaces, size] = spaceDispatch(type);
  const [fieldName, setFieldName] = useState({
    fieldName: labelName,
    fieldSlug: newLabelName,
  });

  return (
    <div
      className="
              w-full
              h-max
              flex
              flex-col
              sm:flex-row
              align-bottom
              justify-between
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
        <input
          className="
            focus:w-28
            w-28
            bg-transparent
            placeholder-black
          "
          type="text"
          placeholder={labelName}
          onChange={(e) => {
            if (e.target.value) {
              setFieldName({
                fieldName: e.target.value,
                fieldSlug: clearLabelName(e.target.value),
              });
              return true;
            }
            setFieldName({
              fieldName: labelName,
              fieldSlug: newLabelName,
            });
          }}
        />
      </span>

      <label
        htmlFor={id ? id : fieldName.fieldSlug}
        className={`
                w-full
                sm:max-w-md
              `}
      >
        <input
          type={type ? type : "text"}
          name={id ? id : fieldName.fieldSlug}
          id={id ? id : fieldName.fieldSlug}
          className={`
                p-3
                w-full
                sm:max-w-md
                bg-white
              `}
        />
      </label>
    </div>
  );
};

export default DefaultInput;
