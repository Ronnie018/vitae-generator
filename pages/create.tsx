import { InputContainer } from "../components/FormComponents/InputContainer";
import DefaultInput from "../components/FormComponents/DefaultInput";
// import BirthdayInput from "../components/FormComponents/BirthdayInput";

const Create = () => {
  return (
    <main className="min-h-screen">
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
          <InputContainer>
            <DefaultInput labelName="name" />
          </InputContainer>
          <InputContainer>
            <DefaultInput labelName="last name" />
          </InputContainer>
          <InputContainer>
            <DefaultInput labelName="birthday" type="date" />
          </InputContainer>
        </form>
      </div>
    </main>
  );
};

export default Create;
