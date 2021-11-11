function defineProperty(obj, key, value){
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    } return Obj;
}

class RickAndMorty extends React.Component {
    constructor (...args) {
        super(...args);
        defineProperty(this, "state",
        {
            page: 1,
            totalPages: 1,
            searchTerm: '',
            searching: false,
            searched: false,
            characters: []
        });
        defineProperty(this, "firstCharacterRef",
        React.createRef());
        defineProperty(this, "handleSearchInput", debounce(searchTerm => this.setState({page: 1, searchTerm, searching: true}, this.fetchCharacters)));
        defineProperty(this, "fetchCharacters", () => {
            fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}&name=${this.state.searchTerm}`)
            then(res => res.json()),
        })
    } 
}