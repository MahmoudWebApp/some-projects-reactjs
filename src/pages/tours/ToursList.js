import "./TourList.css";
import TourItem from "./TourItem";

const ToursList = ({ data , removeTour}) => {
  return (
    <ul className="tour-list">
      {data.map((tour) => (
        <TourItem key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </ul>
  );
};

export default ToursList;
