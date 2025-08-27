import Restuarantcart from "./restaurantcart";
import reslist from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  let[listOfRes,setListOfRes]=useState(reslist)
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRes.filter((res) => res.info.avgRating > 4.2);
            console.log(filteredlist);
            setListOfRes(filteredlist);
          }

        }
        >top reated restaurant</button>
      </div>
      <div className="res-container">
          {   /*< Restuarantcart resdata={reslist[0]} />
             < Restuarantcart resdata={reslist[1]}.......... />*/
          listOfRes.map((restaurant) => (
            <Restuarantcart key={restaurant.info.id} resdata={restaurant} />
          )
        )
        }

      </div>
    </div>
  )
}
export default Body;
