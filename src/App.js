import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
    const [cats, setCats] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredCats, setFilteredCats] = useState(cats);
    
    async function fetchCats() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await resp.json();
        setCats(users);
    }
    useEffect(() => {fetchCats()}, [])

    function handleSearch(event) {
        const searchValue = event.target.value.toLowerCase();
        setSearchField(searchValue);
    }

    function filterCats() {
        const newCats = cats.filter(
            cat => {
                return cat.name.toLowerCase().includes(searchField);
            }
        )
        setFilteredCats(newCats);
    }

    useEffect(() => {filterCats()}, [searchField, cats])

    return (
        <div className="App">
            <h1 className="app-title">Cats Rolodex</h1>
            <SearchBox handleSearch={handleSearch}/>
            { filteredCats ? <CardList cats={filteredCats}/>: 'Loading'}
        </div>
    )
}
