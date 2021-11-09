export const fetchData = async () => {
  const response = await fetch('http://localhost:3001/api/v1/destinations');
  if (response.status >= 400) {
    return response.json().then((res) => {
      throw new Error(res.message);
    });
  } else {
    return response.json();
  }
};

export const fetchTripsByID = async (id) => {
  const response = await fetch(`http://localhost:3001/api/v1/trips/${id}`);
  if (response.status >= 400) {
    return response.json().then((res) => {
      throw new Error(res.message);
    });
  } else {
    console.log(response.status);
    return response.json();
  }
};

export const fetchTraveler = async (username, password) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/travelers/${username}/${password}`
  );
  if (response.status >= 400) {
    return response.json().then((res) => {
      throw new Error(res.message);
    });
  } else {
    return response.json();
  }
};

export const bookTrip = async (newTrip) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTrip),
  };

  const response = await fetch(
    'http://localhost:3001/api/v1/trips',
    requestOptions
  );
  if (response.status >= 400) {
    return response.json().then((res) => {
      throw new Error(res.message);
    });
  } else {
    return response.json();
  }
};

// Different Version of Fetch
// export const fetchTraveler = (username, password) => {
//   return fetch(
//     `http://localhost:3001/api/v1/travelers/${username}/${password}`
//   ).then((response) => {
//     if (response.status >= 400) {
//       return response.json().then((res) => {
//         throw new Error(res.message);
//       });
//     } else {
//       return response.json();
//     }
//   });
