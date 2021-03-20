const getData = async (inputNamas) => {
  const API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5adf1883ab5c9920319fb61e2731f289&hash=f488c85a9fe05bf652ffe5c92304d8b8&offset=0&name=${inputNamas}`;

  try {
    const response = await fetch(API);
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
