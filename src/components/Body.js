import { useEffect, useState } from "react";
import { URL_product } from "./Constant";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import { ProductList } from "../utils/helper";
// import Search from "./SearchComponent";
import Hero from "./Hero";




const Body = () => {
  const [searchText, setSearchText] = useState(""); // Moved useState inside the functional component
  const [data, setData] = useState("");
  const [filterData,setFilterData] = useState(null);

  const Getdata = ProductList();
  useEffect(() => {
    setData(Getdata);
  }, [Getdata]);

  const online = useOnline();
  if (!online) {
    return <h1 key="404">😢No Internet Connection Detected</h1>;
  }

  return data === "" ? (
    <>
      {" "}
      <Hero />
      <Shimmer />
    </>
  ) : (
    <div className="bg-gradient-to-t from-gray-100 via-orange-400 to-gray-100">
      <div className=" flex gap-1 align-middle justify-center p-7 bg-gradient-to-t from-gray-100 via-gray-100 to-white">
        <input
          className="border outline-0 border-slate-300 w-[300px] p-1 pl-2 rounded focus:border-orange-600"
          type="search"
          id="input"
          placeholder="Search here.."
          value={searchText} // Controlled input value
          onChange={(e) => {
            setSearchText(e.target.value);
            const filteredResults = data.filter(item =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
          );
          if(searchText!== 0){
            setFilterData(filteredResults);
          }
           
          }}
        />

        <button className=" bg-orange-500  w-[80px] p-1 text-sm text-white font-normal rounded hover:bg-black" 
        onClick={()=>{
         
          const filteredResults = data.filter(item =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
          );
          if(filteredResults.length !== 0){
            setFilterData(filteredResults);
          }
          
        }}
        >
          Search
        </button>
      </div>

      <Hero />
      <div className="pb-10 flex flex-wrap align-middle justify-center gap-4 bg-gradient-to-t from-gray-100 via-gray-300 to-gray-100">
        {(filterData===null?data:filterData).map((item) => {
          return (
            <Link to={"/restaurant/" + item?.id}>
              <RestuarantCard {...item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
