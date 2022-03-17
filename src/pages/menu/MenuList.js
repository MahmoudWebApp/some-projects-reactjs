import React from 'react';

const MenuList = ({items}) => {
  return <div className='menu__list'>
     {items.map((item)=>{
         const {id,price,title,desc,img}=item;
         return <article className='menu__item'>
             <img src ={img} alt={`item ${id}`} className='menu__img'/>
             <div className="menu__text">
             <h4 className='menu__title'>{title}</h4>
             <h5 className='menu__price'>$ {price}</h5>
             <p className='menu__desc'>{desc}</p>
             </div>
             
         </article>
     })}
  </div>;
};

export default MenuList;
