import React from "react";
import { dummyData } from "./dataApp";
import Card from "./components/UI/Card";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  
  return (
    <main>
      <div className="heading-text">
        <h1>Basi<span style={{color:"red"}}>c P</span>roject</h1>
      </div>
      <div className="project-box">
        <ul>
          {dummyData.map((card) => (
            <li>
              <Link to={card.link} >
                <Card key={card.id} title={card.title} imgSours={card.img} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
