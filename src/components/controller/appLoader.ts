import { ICredentials } from '../../types/interfaces/ICredentials';
import Loader from './loader';

class AppLoader extends Loader {
  public apiKey: ICredentials | undefined;
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '52cb939de55e4ea4ba15d4dd9b7193b2',
    });
  }
}

export default AppLoader;
