import axios from "axios";

const baseUrl = "https://blue-backend-modulo4front.herokuapp.com";

export const getMenu = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: "menu@beeveggie.com",
    },
  });

  return response.data;
};


export const getOrder = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: "bee.veggie@gmail.com",
    },
  });

  const order = response.data;

  const orderFilter = order.filter(order => Boolean(order.table));

  return orderFilter
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
      Authorization: "menu@beeveggie.com",
    },
  });
};


export const orderPost = async (
  name,
  table,
  order1,
  order2,
  order3,
  order4,
  order5,
  payment,
  money,
  payback
) => {
  return await axios({
    method: "post",
    url: baseUrl,
    data: {
      name,
      table,
      order1,
      order2,
      order3,
      order4,
      order5,
      payment,
      money,
      payback
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "bee.veggie@gmail.com",
    },
  });
};
