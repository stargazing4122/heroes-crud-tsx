export interface Options {
  method?: string;
  headers: {};
  body?: string;
  signal?: AbortSignal;
}

export const helpHttp = () => {
  //CUSTOM FETCH
  const customFetch = (endPoint: string, options: Options) => {
    const defaultHeader = {
      accept: 'application/json',
    };

    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : { ...defaultHeader };

    options.body
      ? (options.body = JSON.stringify(options.body))
      : delete options.body;

    const abortController = new AbortController();
    options.signal = abortController.signal;

    setTimeout(() => abortController.abort(), 3000);

    return fetch(endPoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'an error ocurred',
            }),
      )
      .catch((err) => err);
  };

  //TYPES OF METHODS

  const get = (url: string, options: Options) => {
    return customFetch(url, options);
  };

  const post = (url: string, options: Options) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (url: string, id: string, options: Options) => {
    let endPoint = `${url}/${id}`;
    options.method = 'PUT';
    return customFetch(endPoint, options);
  };

  const del = (url: string, id: string, options: Options) => {
    let endPoint = `${url}/${id}`;
    options.method = 'DELETE';
    return customFetch(endPoint, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
