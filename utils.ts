export function clearLabelName(labelName: string): string {
  return labelName.split(" ").join("-");
}


export function spaceDispatch(type: string | undefined): (boolean | string)[] {
  switch (type) {
    case "date":
      return [true, "w-7/12"]
    default:
      return [false, "w-full"]
  }

  return [true, "="]
}
