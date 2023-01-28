import { SourceItem } from "../types/SourceItem";

export interface ISource {
  status: string;
  sources: Array<SourceItem>;
}
