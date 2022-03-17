import React, { useState } from "react";
import "./birthday.css";
import { data } from "./dataBirthday";
import ListItem from "./ListItem";

const Birthday = () => {
  const [listData, setListData] = useState(data);
  return (
    <div className="birthday">
      <div className="birthday-contianer">
        <h3>{listData.length} Birthdays Today</h3>
        <div className="birthday__list">
          <ul>
            {listData.map((item) => (
              <ListItem
                key={item.id}
                people={item} />
            ))}
          </ul>
        </div>
        <button className="btn" onClick={() => setListData([])}>Clear All</button>
      </div>
    </div>
  );
};

export default Birthday;
