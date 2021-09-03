import axios from "axios";

const baseUrl = "https://blue-backend-modulo4front.herokuapp.com";

export const getMenu = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: "bee_veggie@gmail.com",
    },
  });

  return response.data;
};


export const menuCreate = async (
  imageUrl,
  title,
  price
) => {
  return await axios({
    method: "post",
    url: baseUrl,
    data: {
        imageUrl,
        title,
        description,
        price
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "bee_veggie@gmail.com",
    },
  });
};
