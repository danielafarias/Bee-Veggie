import axios from "axios";

const baseUrl = "https://blue-backend-modulo4front.herokuapp.com";

export const getMenu = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: "bee.veggie@gmail.com",
    },
  });

  return response.data;
};


export const menuCreate = async (
  imageUrl,
  title,
  price,
  tag
) => {
  return await axios({
    method: "post",
    url: baseUrl,
    data: {
        imageUrl,
        title,
        price,
        tag
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "bee.veggie@gmail.com",
    },
  });
};
