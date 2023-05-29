/* eslint-disable no-unreachable */
import React, { useState } from 'react';

import style from './Products.module.scss';
import { CgClose,  CgCheck } from 'react-icons/cg';


const ProductModal = ({ product, closeModal, addToCart }) => {
  
  const {  colors} = product;
  const [color, setColor] = useState(colors[0]);


  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={closeModal}>
          <CgClose/>
        </button>
        <img className={style.productImage} src={product.image} alt={product.title} />
        <h3 className={style.productTitle}>{product.title}</h3>
        <p className={style.productPrice}>{product.price} SEK</p>
     
          <p className={style.color}>
            Colors: 
            {colors.map((curColor, index) => {
              return (
                <button key={index} style={{ backgroundColor: curColor }} className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                onClick={()=> setColor(curColor)}
                > 
            
               
                  {color === curColor ? <CgCheck className={style.checkStyle} /> : null}

                </button>
              );
            })}
          </p>
       
        <p className={style.productDescription}>{product.description}</p>
      
      
         
        <div className={style.buttonContainer}>
          <button className={style.CartAddButton} >Add To Cart</button>
          </div>
      </div>
    </div>
  );
};

export default ProductModal;

