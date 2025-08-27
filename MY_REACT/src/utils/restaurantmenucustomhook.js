import { useEffect, useState } from "react";
import { resmenu_url } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo,setresInfo] = useState(null);
   useEffect(() => {
    fetchdata();
   }, []);
  const fetchdata = async () => {
    const data = await fetch(resmenu_url+resId)
    const json = await data.json();
    setresInfo(json.data);

}
return resInfo;
}
export default useRestaurantMenu;
