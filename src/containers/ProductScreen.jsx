import React, { useState } from 'react';
import style from './Product.module.scss';
import { products } from '../constants/products';
import ProductModal from '../Components/products/ProductsModal';


const ProductScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    filterProducts(newSearchTerm, filter);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    filterProducts(searchTerm, newFilter);
  };

  const filterProducts = (searchTerm, filter) => {
    const filteredItems = products.filter((item) => {
      const isMatchingSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const isMatchingFilter = filter === 'All' || item.category === filter;
      return isMatchingSearch && isMatchingFilter;
    });

    setFilteredProducts(filteredItems);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={style.container}>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          className={style.searchInput}
        />
        <button className={style.search}>Search</button>
      </div>

      <div className={style.containerBtn}>
        <button className={style.buttonValue} onClick={() => handleFilterChange('All')}>
          All
        </button>
        <button className={style.buttonValue} onClick={() => handleFilterChange("women's clothing")}>
          Women's Clothing
        </button>
        <button className={style.buttonValue} onClick={() => handleFilterChange("men's clothing")}>
          Men's Clothing
        </button>
      </div>

      <div className={style.proContainer}>
        {filteredProducts.map((item) => (
          <div className={style.proContainer1} key={item.id}>
            <img
              className={style.containerProductsCard}
              src={item.image}
              alt={item.title}
              onClick={() => openModal(item)}
            />

            <h3 className={style.descriptionText}>{item.title}</h3>

            <p className={style.price}>{item.price} SEK</p>
   
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProductScreen;
