import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./restaurantitemlist";
import { clearcart } from "../utils/cartSlice";
const Cart = () => {
const cartitems =useSelector((store)=>store.cart.items)
const dispatch = useDispatch();
const handleclick = () => {
    dispatch(clearcart());
}
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleclick}>
          clear cart
        </button>
        {cartitems.length == 0 && <h1>carrt is empty add some fooders</h1>}
        <ItemList data1={cartitems}/>



      </div>


  </div>
)


}
export default Cart;
