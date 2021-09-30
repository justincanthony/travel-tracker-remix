export const fetchdata = async (path) => {
	const res = await fetch(`http://localhost:3001/api/v1/${path}`);
	return res.json();
};
