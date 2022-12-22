import Link from "next/link";
import { InputContainer } from "../../components/FormComponents/InputContainer";
import { useEffect, useState } from "react";
import formElm from "./formElements";

const Create = () => {
  const [formElements, setFormElements] = useState(formElm);

  useEffect(() => {
    // rehydration code to set the localstorage saved form data
  }, []);

  return (
    <main className="min-h-screen bg-slate-600">
      {/* FORM STYLE */}
      <div
        className="
        w-11/12
        max-w-2xl
        flex
        flex-col
        p-4
        mx-auto
        bg-gray-900
        sm:mx-0
        "
      >
        <form
          className="
          overflow-hidden
          rounded-md
          min-h-screen
          flex
          flex-col
          gap-y-2
          "
        >
          {formElements.map(({ Tag, type, name, key }, i) => {
            return (
              <InputContainer key={i}>
                <Tag
                  labelName={name}
                  type={type}
                  setFormElements={setFormElements}
                  formElements={formElements}
                  id={key}
                />
              </InputContainer>
            );
          })}

          <Link
            href={"/create/preview"}
            className="w-48 p-2 rounded-full mx-auto bg-gray-400 flex justify-center"
          >
            Preview
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Create;
