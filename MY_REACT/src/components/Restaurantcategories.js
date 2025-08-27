import { useState } from "react";
import ItemList from "./restaurantitemlist";
const RestautrantCatgory = ({ data }) => {
  //this has two parts 1.header having category name and derop down logo and body
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  }
  return (
  <div>

      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-6 shadow-lg cursor-pointer">
         {/*header  */}
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-2xl">{data.title}({data.itemCards.length})</span>
          <span>⬇️</span>
        </div>
        {/*body */}
        {showItems && <ItemList data1={data.itemCards} />}
     </div>

   </div>
 )

}
export default RestautrantCatgory;
