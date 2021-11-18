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

export const fetchTravelerByID = async (userID) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/travelers/${userID}`
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

export const deleteTrip = async (id) => {
  const response = await fetch(`http://localhost:3001/api/v1/trips/${id}`, {
    method: 'DELETE',
  });
  if (response.status >= 400) {
    return response.json().then((res) => {
      throw new Error(res.message);
    });
  } else {
    return response.json();
  }
};
