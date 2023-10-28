import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
  
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

const AppLayout= () => {
    return (
        <div className= "app">
            <Header/>
            <Body/>
        </div>
    )
};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);