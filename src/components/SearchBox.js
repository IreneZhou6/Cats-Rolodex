import './SearchBox.css'

export default function SearchBox({handleSearch}) {
    return (
        <input type='text' className='searchBox' placeholder='input cat name' onChange={handleSearch}/>
    )
}
