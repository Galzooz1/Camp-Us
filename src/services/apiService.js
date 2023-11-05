// let myApi = "http://localhost:3008";
let myApi = "https://campus2023-9707e7dccaeb.herokuapp.com";

export const URL_API = myApi;

export const doApiGet = async(_url) => {
    try {
      let resp = await fetch(_url);
      let data = await resp.json();
      return data;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }

  export const doApiMethod = async (_url, _method, _body) => {
    try {
      let resp = await fetch(_url, {
        method: _method,
        body: JSON.stringify(_body),
        headers: {
          'auth-token': localStorage["user_token"],
          'content-type': "application/json"
        }
      })
      let data = await resp.json();
      return data;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }