import DefaultInput from "../../components/FormComponents/DefaultInput";
import { randomUUID } from "crypto";
import { randomBytes } from "crypto"

export default [
  {
    name: "name",
    type: "",
    Tag: DefaultInput,
    key: randomBytes(20).toString('hex'),
  },
  {
    name: "last name",
    type: "",
    Tag: DefaultInput,
    key: randomBytes(20).toString('hex'),
  },
  {
    name: "birthday",
    type: "date",
    Tag: DefaultInput,
    key: randomBytes(20).toString('hex'),
  },
  {
    name: "profile",
    type: "multiline",
    Tag: DefaultInput,
    key: randomBytes(20).toString('hex'),
  },
];
