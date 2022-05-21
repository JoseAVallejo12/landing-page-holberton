import httpRequest from "../client";

const getHeroInfo = async () => {
  const response = await httpRequest.get("pages", {
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  });
  return response.data;
};

export {
  getHeroInfo,
}