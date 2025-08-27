import { cdn_url } from "../utils/constants";
const Restuarantcart = (props) => {
  const { resdata } = props;
  return (<div className="res-cart">
    <img className="res-logo" src={cdn_url + resdata.info.cloudinaryImageId} />
    <h2>{resdata.info.name}</h2>
    <h3>{resdata.info.cuisines.join(",")}</h3>
    <h3>{resdata.info.avgRating}</h3>
    <h3>{resdata.info.areaName}</h3>
  </div>
  )
}
export default Restuarantcart;
