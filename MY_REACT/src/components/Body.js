import Restuarantcart,{Recommendedrescart} from "./restaurantcart";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredlistOfRes, setfilteredListOfRes] = useState([]);
  const Restaurantcartrecomm = Recommendedrescart(Restuarantcart);
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = async () => {

    const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2959847&lng=85.8246101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // this is also valid setfilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //setfilteredListOfRES(listofres);gives wrong answer sometimes bcz this exexutes sometimes setlistofres so we got empty res
      setfilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  /*if (listOfRes.length == 0) {

    return < Shimmer/>
  }*/
  //------------------------------------------online/offline status ----------------------------------------------------------
  const status = useOnlineStatus();
  if (status == false) {
    return (
      <h1>opps!you seem to be offline</h1>
    )
  };

  //--------------------------------------------but if online below codes ------------------------------------------------
  return listOfRes.length == 0 ? (
    <Shimmer/>
  ):(
    <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition duration-200" value={searchText} onChange={(e) => {
              setsearchText(e.target.value)
            }}></input>
            <button className=" mt-3 px-4 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"  onClick={() => {
              const filteredlist = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredListOfRes(filteredlist);
          }

        }


            >search</button>
          </div>
        <button className="mt-10 mb-3 h-[3rem] w-[20rem] text-[15px] bg-sky-300 border-10 text-[#070404] rounded-[10px] px-1 py-0.5 cursor-pointer border-none hover:shadow-[0_4px_8px_rgba(252,4,4,0.1),0_6px_20px_rgba(225,3,3,0.19)] transition-shadow duration-300"
          onClick={() => {
            const filteredlist = listOfRes.filter((res) => res.info.avgRating > 4.5);
            console.log(filteredlist);
            //earlier this filteredlist updated in listofres but now in filteredlist as it will be rendered
            setfilteredListOfRes(filteredlist);
          }

        }
        >top reated restaurant</button>
      </div>
      <div className="res-container">
          {   /*< Restuarantcart resdata={reslist[0]} />
             < Restuarantcart resdata={reslist[1]}.......... />*/
            //---------------  earlier we were doing using listofres
            //  ------listofres.map((restaurant) => (
            //<Restuarantcart key={restaurant.info.id} resdata={restaurant} />
          //but now we are maintaining a copy of this to keep all restaurant for available to compare and use using filtered state
          //----------------------------------------------------------------------------------------------------------------------
            filteredlistOfRes.map((restaurant) => (
              console.log(filteredlistOfRes),

              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                  {restaurant.info.avgRating>4.3 ? (<Restaurantcartrecomm resdata={restaurant} />)
                    : (<Restuarantcart key={restaurant.info.id} resdata={restaurant} />)}
              </Link>

          )
        )
        }

      </div>
    </div>
  )
}
export default Body;
