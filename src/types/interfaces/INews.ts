import { IArticle } from "./IArticle";

export interface INews {
  status: string;
  totalResults: number;
  articles: Array<IArticle>;
}
