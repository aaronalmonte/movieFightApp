const fetchData = async (searchTerm) => {
    const response = await axios.get('https://omdbapi.com/', {
        params: {
            apikey: 'f992c7b7',
            s: searchTerm
        }
    });
    console.log (response.data);
};

let timeoutId;
const input = document.querySelector('input');

onInput = event => {
    if (timeoutId) {
        clearTimeout (timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value)
    }, 500);
}
input.addEventListener("input", onInput);

//fetchData();

