import { error } from "console";
import { url } from "inspector";

const apiService = {
  get: async (url: string): Promise<any> => {
    console.log("get", url);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response", json);

          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post: async (url: string, data: any): Promise<any> => {
    console.log("POST", url, data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response", json);

          resolve(json);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default apiService;
