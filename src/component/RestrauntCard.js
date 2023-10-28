import constants, { CDN_URL } from "../utils/constants";

const RestrauntCard= (props) => {
    const {resData}= props;

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.data;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo" 
                alt="rest-logo" 
                src={ CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} star rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            <div className="orderBox">
              <h4>Order Now</h4>
            </div>
        </div>
    )
};

export default RestrauntCard