import { CATEGORY, NAME, SUB_CATEGORY } from "../utility/api";

export function Product (
    name,
    category,
    subcatgory
) {
    this[NAME] = name;
    this[CATEGORY] = category;
    this[SUB_CATEGORY] = subcatgory
}
