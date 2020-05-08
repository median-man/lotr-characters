export const fetchAllCharacters = () => {
  const headers = new Headers();
  headers.append("Authorization", "Bearer Xz2OBp6RE9w48eje3Vdd");
  return fetch("https://the-one-api.herokuapp.com/v1/character", {
    method: "GET",
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return { error: response.status };
  });
};

