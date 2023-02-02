import News from './news/news';
import Sources from './sources/sources';
import { INews } from '../../types/interfaces/INews';
import { ISource } from '../../types/interfaces/ISource';

export class AppView {
  protected news: News;
  protected sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data?: INews): void {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data?: ISource): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;