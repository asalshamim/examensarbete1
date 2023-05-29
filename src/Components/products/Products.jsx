import React from 'react';
import Style from './Products.module.scss';

//import { useDispatch } from 'react-redux';
//import { addProductToCart } from '../card/cartAction';


const Product = ({ item }) => {

 //const dispatch = useDispatch();
 


  return (
    
    <div className={Style.proContainer1}  >
      <img className={Style.containerProductsCard} c src={item.image} alt={item.title} />
      
      <h3 className={Style.descriptionText}>{item.title}</h3>
      
      <p className={Style.price} >{item.price} SEK</p>
      

      <p>{item.qtyInStock}</p>


      <p className={Style.text}>{item.description}</p>
      <button className={Style.CartAddButton}>Add To Cart</button>
 
      </div>
    
  );
};

export default Product;
