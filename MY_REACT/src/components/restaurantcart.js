import { cdn_url } from "../utils/constants";
const Restuarantcart = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, areaName, costForTwo,cloudinaryImageId } = resdata?.info;

  //if not destructure then we would have used peops.resdata.info.name as props receive the data from render by
  //<Restauurantcart resdata={restaurant} /> but if by threee dot <Restauurantcart {...restaurant} /> them every key-value sent separetly not
  //as a single object so can use props.info.name

  return (<div className="rounded-lg w-[220px] h-[320px] ml-[10px] mb-2 mr-2 bg-blue-100 p-[6px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.19)] hover:cursor-pointer ">
    <img className="res-logo" src={cdn_url + cloudinaryImageId} />
    <h2 className="text-base font-mono text-gray-900">{name}</h2>
    <h3 className="text-base font-medium text-gray-800" >{cuisines.join("  ,   ")}</h3>
    <h3 className="text-base font-medium text-gray-800">{avgRating}</h3>
    <h3 className="text-base font-medium text-gray-800">{areaName}</h3>
     <h3 className="text-base font-medium text-gray-800">{costForTwo}</h3>
  </div>
  )
}
//---------------------------------- higher order component concept -----------------------------------
export const Recommendedrescart = (Restuarantcart) =>
{
  return (props) => {

    return (
      <div>
        <label className="label">Recommended</label>
        <Restuarantcart {...props} />
      </div>
    )
  }
}
export default Restuarantcart;
