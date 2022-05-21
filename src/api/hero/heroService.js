import httpRequest from "../client";

const getHeroInfo = async () => {
  const response = await httpRequest.get("pages", {
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  });
  return response.data;
};


// const getHeroInfo = async () => {
//   fetch('https://josevallejo.zya.me/wp-json/wp/v2/pages', {
//     headers: {
//       'X-WP-Nonce': 'b8f8f8f8f8',
//     },
//     credentials: 'same-origin'
//   })
//     .then((resp) => resp.json())
//     .then((response) => {
//       //My code
//       console.log(response);
//     })
// }

export {
  getHeroInfo,
}