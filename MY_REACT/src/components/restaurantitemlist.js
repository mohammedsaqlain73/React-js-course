import { cdn_url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ data1 }) => {
  const dispatch = useDispatch();
  const handleclick = (item) => {
    dispatch(addItem(item));
    console.log(item)
  }
  return (
    <div>
      {data1?.map((item) =>
        <div key={item.card.info.id}
        className="p-2 m-2 border-gray-200 border-b-2 text-left  "
        >
          <div className="py-2">
             <div className="relative inline-block">

              <img src={cdn_url + item.card.info.imageId} className="w-50" />
              <button
                className="absolute top-2 right-2 bg-black text-white text-sm px-5 py-3 rounded-lg shadow hover:bg-orange-600 transition"
                onClick={() => handleclick(item)}
              >Add+</button>
               </div>

            <span>{item.card.info.name}</span>
            <span> {" "}-₹ {" "}{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100 }</span>
          </div>
          <p className="text-slate-950 text-xl">{item.card.info.description}</p>
        </div>
    )
      }
      </div>
  )
}
export default ItemList;
