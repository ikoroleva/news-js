import { ErrorsCode } from "../../types/enums/ErrorsCode";
import { AllDataType } from "../../types/types/AllDataType";
import { OptionsType } from "../../types/types/OptionsType";

class Loader {
  protected baseLink: string;
  protected options: OptionsType<string>;

  constructor(baseLink: string, options: OptionsType<string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: OptionsType<string> },
    callback = (): void => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === ErrorsCode.unauthorized || res.status === ErrorsCode.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: OptionsType<string>, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: 'GET' | 'POST', endpoint: string, callback: (data: AllDataType) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: AllDataType) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
