export const fetchdata = async () => {
	const res = await fetch('http://localhost:3001/api/v1/destinations');
	return res.json();
};
