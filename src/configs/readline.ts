import { createInterface } from "readline/promises";
import { isOfTypeTabs } from "./utils";

export const generateQuestions = async (): Promise<{
  category: string;
  limit: string;
}> => {
  // Initialize readline to accept input through cli
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Questioning for category
  const category: string = await readline.question(
    `Type the category to fetch...
    Options:  
    Animals, Anime, Blockchain, Books, Business, Calendar, Weather, Transportation, Health, Jobs, Music
    `
  );

  // Checking that a valid category has been typed
  if (!category || category?.length > 127 || !isOfTypeTabs(category))
    return { category: "", limit: "" };

  // Questionin for the limit to cut the data
  const limit: string = await readline.question(
    `
  Type the limit (int > 0):
  `
  );

  // Closing readline instance
  readline.close();

  return {
    category,
    limit,
  };
};
