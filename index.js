const fetchData = async (searchTerm) => {
    const response = await axios.get('https://omdbapi.com/', {
        params: {
            apikey: 'f992c7b7',
            s: searchTerm
        }
    });
    console.log (response.data);
};


const input = document.querySelector('input');

onInput = event => {
    fetchData(event.target.value)
}
input.addEventListener("input", debounce(onInput, 500));


