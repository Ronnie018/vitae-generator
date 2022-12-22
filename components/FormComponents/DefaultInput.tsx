import { useState } from "react";
import { clearLabelName, tagDispatcher } from "../../utils";

export interface InputProps {
  labelName: string;
  name?: string;
  type?: string;
  setFormElements: Function;
  formElements: object;
  id: string;
}

const DefaultInput = ({
  labelName,
  name,
  type,
  setFormElements,
  formElements,
  id,
}: InputProps) => {
  const newLabelName = clearLabelName(labelName);

  const [fieldName, setFieldName] = useState({
    fieldName: labelName,
    fieldSlug: newLabelName,
  });

  const { InputTag } = tagDispatcher(type);

  return (
    <div
      className="
        main-container
          w-full
          h-max
          flex
          flex-col
          sm:flex-row
          align-bottom
          justify-between
          relative
      "
      
      id={id}
      onPointerOver={(e) => {
        // const element = document.getElementById(id) as HTMLDivElement;
        // if (element.hasAttribute("show-controls")) return;
        // element.toggleAttribute("show-controls");

        const element = document.getElementById(id);
        console.log(element);
      }}
      onPointerLeave={(e) => {
        // const element = document.getElementById(id) as HTMLDivElement;
        // if (element.hasAttribute("show-controls")) {
        //   element.toggleAttribute("show-controls");
        // }
        // return;
      }}
    >
      <span
        className="
          options
          absolute
          top-0
          right-0
          hidden
        "
      >
        <button
          className="
            control-elm
            w-4
            h-4
            bg-blue-700
          "
          disabled
        ></button>
        <button
          className="
          control-elm
            w-4
            h-4
            bg-red-700
          "
        ></button>
      </span>
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
        htmlFor={name ? name : fieldName.fieldSlug}
        className={`
                w-full
                sm:max-w-md
              `}
      >
        <InputTag
          // @ts-ignore [need fix next line]
          type={type ? type : "text"}
          name={name ? name : fieldName.fieldSlug}
          id={name ? name : fieldName.fieldSlug}
          className={`
                p-3
                w-full
                sm:max-w-md
                bg-white
                rounded-md
              `}
          rows={8}
        />
      </label>
    </div>
  );
};

export default DefaultInput;
