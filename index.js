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

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => { 
        if (timeoutId) {
        clearTimeout (timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    }
}
onInput = event => {
    fetchData(event.target.value)
}
input.addEventListener("input", debounce(onInput, 500));


