import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [response, setResponse] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setResponse(data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [url]);

	return [response, isLoading];
};

export default useFetch;
