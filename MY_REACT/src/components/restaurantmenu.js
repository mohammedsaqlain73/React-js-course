import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { resmenu_url } from "../utils/constants";
import RestautrantCatgory from "./Restaurantcategories";
//later we will be using custom hooks for fetching and stroing res menu data in resinfo
const Restautrantmenu = () => {
//-----------------------------------------res bmenu data fetched can be in custom hook ------------------------------
  const [resInfo, setresInfo] = useState(null);
  const params = useParams();
  console.log(params);
  const{resid}=useParams();
  useEffect(() => {
    fetchdata();
  }, [])
  const fetchdata = async () => {
    const data = await fetch(resmenu_url+resid)
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
    console.log(resInfo);//always shows null as it does not wait till the api data fetch as no wait used
  //-------------------------------------------- upto this ----------------------------------------
  }

  if (resInfo == null) return < Shimmer />;
  //in resinfo not null i.e api data got
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
   return c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";// cant ue.@type as it is not a valid js
    //["@type"] so used to get that index value and a fat arrow method need to return to store in category else null
  })//now cateogries has  restaurant categories we will use it to make accordian for kfc 12 out of 22(extra carts) and for other vary

  //-----------------------  most imp common mistakes to avoid-------------------------------------------------------------------
/*
1.---- no need to write return as  within () it explicitly return
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
    c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";// cant ue.@type as it is not a valid js
    //["@type"] so used to get that index value and a fat arrow method need to return to store in category else null
))//now cateogries has  restaurant categories we will use it to make accordian for kfc 12 out of 22(extra carts) and for other vary
  console.log(categories);

2.------------- since we are not using () instead  using {} we need to return explicitly else error
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
   return c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";// cant ue.@type as it is not a valid js
    //["@type"] so used to get that index value and a fat arrow method need to return to store in category else null
  })//now cateogries has  restaurant categories we will use it to make accordian for kfc 12 out of 22(extra carts) and for other vary
  console.log(categories);


 */



  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <div className="font-bold text-xl">
        {cuisines.join(" , ")} -- {costForTwoMessage}
        {/** categories acordians */}
        {
          categories.map((category,index) => (
            <RestautrantCatgory data={category?.card?.card} key={index} />
       ))}

        </div>

    {/* <ul>

    method1   {itemCards.map((items) => (
         <li key={items?.card?.info?.name}>{items?.card?.info?.name}--{"RS."}{items?.card?.info?.price /100 || items?.card?.info?.defaultPrice /100}</li>
      ))}
       {/*itemCards.map((items) => {
         return (<li key={items?.card?.info?.name}>{items?.card?.info?.name}--{"RS."}
           {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}</li>)
       })

      {/* <ul> */}


    </div>
  )
}
export default Restautrantmenu;
