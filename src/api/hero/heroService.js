import httpRequest from "../client";

const getHeroInfo = async () => {
  const response = await httpRequest.get("pages");
  return response.data;
};

export {
  getHeroInfo,
}