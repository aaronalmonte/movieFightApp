const fetchData = async () => {
    const response = await axios.get('https://omdbapi.com/', {
        params: {
            apikey: 'f992c7b7',
            s: 'avengers'
        }
    });
    console.log (response.data);
};

fetchData();

