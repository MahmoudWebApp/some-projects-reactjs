import { useEffect, useState } from "react";
import "./Tours.css";
import ToursList from "./ToursList";
const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  const [dataTours, setDataTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeTour = (id) => {
    const newTours = dataTours.filter((tour) => tour.id !== id);
    setDataTours(newTours);
  };
  const fetchData = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      if(!response){
        throw new Error("something is Wrong")
      }
      const responseData = await response.json();
      setDataTours(responseData);
    }catch(err){
      console.log(err.message);
    }
    
    
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div className="tours">
      <p className="loading">Loading......</p>
      </div>;
  }
  if(dataTours.length===0){
    return<div className="tours">
      <h1>No Found Tours</h1>
      <button className="tours__btn" onClick={fetchData}>Refresh</button>
    </div>
  }
  return (
    <div className="tours">
      <div className="head-box">
        <h1>our tours</h1>
      </div>
      <main>
        <ToursList data={dataTours} removeTour ={removeTour} />
      </main>
    </div>
  );
};

export default Tours;
