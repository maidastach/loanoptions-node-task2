export const CATEGORIES = [
  "animals",
  "anime",
  "blockchain",
  "books",
  "business",
  "calendar",
  "weather",
  "transportation",
  "health",
  "jobs",
  "music",
];
export type ICategory =
  | "Animals"
  | "Anime"
  | "Blockchain"
  | "Books"
  | "Business"
  | "Calendar"
  | "Weather"
  | "Transportation"
  | "Health"
  | "Jobs"
  | "Music";

type ICors = "yes" | "no";

interface IEntriesInDataFetched {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: ICors;
  Link: string;
  Category: ICategory;
}

export interface IDataFetched {
  count: number;
  entries: IEntriesInDataFetched[];
}
