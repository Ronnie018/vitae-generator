export function clearLabelName(labelName: string): string {
  return labelName.split(" ").join("-");
}

export type inputTag = {
  InputTag: string;
  requiredType: string | null;
};

export function tagDispatcher(type: string | null | undefined): inputTag {
  switch (type) {
    case "multiline":
      return { InputTag: "textarea", requiredType: null };
    case "date":
      return { InputTag: "input", requiredType: "type=date" };
    default:
      return { InputTag: "input", requiredType: "type=text" };
  }
}
