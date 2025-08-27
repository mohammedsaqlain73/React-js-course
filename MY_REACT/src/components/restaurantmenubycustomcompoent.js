import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { resmenu_url } from "../utils/constants";
import useRestaurantMenu from "../utils/restaurantmenucustomhook";
//tje logic of this hook in th e utils

const Restautrantmenu = () => {

  const{resid}=useParams();
  const resInfo = useRestaurantMenu(resid);


  if (resInfo == null) return < Shimmer />;
  //in resinfo not null i.e api data got
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
return (
        <div className="menu">
        <h1>{name}</h1>
        <p>
        {cuisines.join(" , ")} -- {costForTwoMessage }
        </p>
      <h2>menu</h2>
     <ul>

   {/* method1   {itemCards.map((items) => (
         <li key={items?.card?.info?.name}>{items?.card?.info?.name}--{"RS."}{items?.card?.info?.price /100 || items?.card?.info?.defaultPrice /100}</li>
      ))} */ }
       {itemCards.map((items) => {
         return (<li key={items?.card?.info?.name}>{items?.card?.info?.name}--{"RS."}
           {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}</li>)
       })}

      </ul>
    </div>
  )
}
export default Restautrantmenu;
