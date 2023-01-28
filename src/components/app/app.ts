import { INews } from '../../types/interfaces/INews';
import { ISource } from '../../types/interfaces/ISource';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector('.sources') as HTMLElement;
    sources
      .addEventListener('click', (e: Event) => this.controller.getNews(e, (data?: INews) => this.view.drawNews(data)));
    this.controller.getSources((data?: ISource) => this.view.drawSources(data));
  }
}

export default App;
