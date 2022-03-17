import { useState } from "react";
import menu from "./dataMenu";
import Categories from "./Categories";
import MenuList from "./MenuList";
import "./menu.css";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(allCategories);
const Menu = () => {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const menuFilter = (category) => {
    if(category==="all"){
      setItems(menu)
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setItems(newItem);
  };
  return (
    <div className="menu">
      <div className="head-box">
        <h1>our menu</h1>
      </div>
      <main>
        <Categories menuFilter={menuFilter}  categories={categories}/>
        <MenuList items={items} />
      </main>
    </div>
  );
};

export default Menu;
