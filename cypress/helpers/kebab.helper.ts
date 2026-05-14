import { kebabCase } from "change-case";
const removeAccents = require("remove-accents");

export const unaccentedKebabCase = (str: string): string =>
  removeAccents(kebabCase(str));

export const toCyString = (value: string) =>
  unaccentedKebabCase(value)
    .substring(0, 16)
    .replace(/^[-]+|[-]+$/g, "");
