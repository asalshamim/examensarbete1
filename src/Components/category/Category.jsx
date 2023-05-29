import React from 'react';
import style from './Category.module.scss';



const Category = () => {
  return (<>
      <div>
        
              <h3 className={style.text}> Shop By Category </h3>
          <div className={style.items}>
              <div className={style.itemCategory}>
                 
                  <h4> DRESSES </h4>
              </div>
          
              <div className={style.itemCategory}>
                
                  <h4>  JEANS </h4>
              </div>

              <div className={style.itemCategory}>
                
                  <h4> JUMPSUITS </h4>
              </div>
    
          </div>

          
          
          </div>
          </>
  )
}

export default Category