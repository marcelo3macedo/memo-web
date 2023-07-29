const getQueryValue = (param, location) => {
  const params = new URLSearchParams(location.search);
  return params.get(param);
};

export default getQueryValue;
