export const fetchData = async (path) => {
	const res = await fetch(`http://localhost:3001/api/v1/${path}`);
	return res.json();
};

export const fetchTripsByID = async (id) => {
	const res = await fetch(`http://localhost:3001/api/v1/trips/${id}`);
	return res.json();
};
