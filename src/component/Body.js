import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body= () => {
    return (
        <div className="body">
            <div className="search">Type Restaurant Name to Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => <RestrauntCard key={restaurant.data.id} resData={restaurant}/>)
                }
            </div>           
        </div>
    );
};

export default Body;