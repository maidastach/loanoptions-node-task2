import { CATEGORIES, ICategory } from "../interfaces";

export const isOfTypeTabs = (key: string): key is ICategory => {
  return CATEGORIES.includes(key.toLowerCase());
};

// Can sort string[] or array of objects
export const sortDecreasingAlphabetically = (
  arr: any[],
  keyToSort?: string
): any[] =>
  arr.sort((a, b) => {
    if (keyToSort) {
      if (a[keyToSort].toLowerCase() > b[keyToSort].toLowerCase()) return -1;
      if (a[keyToSort].toLowerCase() < b[keyToSort].toLowerCase()) return 1;
      return 0;
    } else {
      if (a.toLowerCase() > b.toLowerCase()) return -1;
      if (a.toLowerCase() < b.toLowerCase()) return 1;
      return 0;
    }
  });
