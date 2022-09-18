import productData from "../../data/productData"
import "./bar.css"

function SearchBar({setSearch}) {
  const filterBySearch = (event) => {
    const query = event.target.value;
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
      <input className="searchBox" id= "searchBox" onChange={filterBySearch} placeholder="Buscar..."/>
      </div>
      </>
  )
}
export default SearchBar
