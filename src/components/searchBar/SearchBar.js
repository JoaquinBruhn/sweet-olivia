import React, {useState} from 'react'
import productData from "../../data/productData"

function SearchBar({search,setSearch}) {
  const [showResult, setShowResult] = useState("")

  const filterBySearch = (event) => {
    const query = event.target.value;
    setShowResult(query)
    let updatedList = [...productData];
    if(query === "") {
      setSearch(productData)
    } 
      updatedList = updatedList.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    setSearch(updatedList);
  };

  return (
    <>
    <div className='searchHeader'>
      <div className='searchText'>Search:</div>
      <input id= "searchBox" onChange={filterBySearch}/>
      </div>
      </>
  )
}
export default SearchBar
