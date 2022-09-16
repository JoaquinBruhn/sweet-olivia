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
      <div className='searchText'>Buscar Productos</div>
      <input className="searchBox" id= "searchBox" onChange={filterBySearch}/>
      </div>
      </>
  )
}
export default SearchBar
