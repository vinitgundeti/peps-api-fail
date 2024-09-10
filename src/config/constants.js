export const BASE_URL = "https://pepsindia.in/api";
export const WEB_URL = "http://localhost:3000";

export const apiCall = async (
  slug,
  method = "GET",
  body = null,
  token,
  headers = {}
) => {
  try {
    const options = {
      cache: "no-store",
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        ...headers,
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }
    try {
      const response = await fetch(`${BASE_URL + slug}`, options);
      if (response.status !== 200) {
        const error = await response.json();
        console.log("error : ", error);
        return error;
      }

      const data = await response.json();
      data.status = 200;
      return data;
    } catch (err) {
      console.log("catch err",err)
      return err;
    }
  } catch (error) {
    console.error("API call failed:", error.message);
    throw error;
  }
};