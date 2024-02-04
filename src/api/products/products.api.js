const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getAllProducts = async () => {
  const endpoint = process.env.REACT_APP_API_URL;
  const products = await fetch(endpoint, options).then((data) => data.json());

  return products;
};

const productsAPI = {
  getAllProducts,
};

export default productsAPI;
