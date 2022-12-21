import { InputContainer } from "../components/FormComponents/InputContainer";
import { TextInput } from "../components/FormComponents/TextInput";

const Create = () => {
  return (
    <main className="min-h-screen">
      {/* FORM STYLE */}
      <div
        className="
        w-11/12
        max-w-lg
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
          <InputContainer>
            <TextInput labelName="name" />
          </InputContainer>
        </form>
      </div>
    </main>
  );
};

export default Create;
