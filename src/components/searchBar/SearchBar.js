import React, {useState} from 'react'
import productData from "../../data/productData"

function SearchBar() {
  const [search, setSearch] = useState(productData);
  const [showResult, setShowResult] = useState("")

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    setShowResult(query)
    // Create copy of item list
    let updatedList = [...productData];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      console.log(item);
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setSearch(updatedList);
  };

  return (
    <>
    <div className='searchHeader'>
      <div className='searchText'>Search:</div>
      <input id= "searchBox" onChange={filterBySearch}/>
      </div>
      <div id='itemList'>
        <ul> 
          {
            showResult == "" 
            ? null 
            : search.map((el)=> {
              return <li key={el.title}>{el.title}</li>
            })}
        </ul>
      </div>
      </>
  )
}
export default SearchBar
