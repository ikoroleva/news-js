import { ArticleInfo } from "../types/ArticleInfo";
import { ArticleSource } from '../types/ArticleSource';

export interface IArticle extends Partial<ArticleInfo> {
  source: ArticleSource;
  title: string;
  url: string;
  publishedAt: string;
  content: string;
  description: string;
}
