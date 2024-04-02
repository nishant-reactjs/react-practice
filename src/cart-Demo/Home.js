import React from 'react';
import ProductPage from './ProductPage';
import Cart from './Cart';
import ThemeToggleButton from './ThemeToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '../context/ThemeContext';

const ProductHome = () => {
  const {isDarkMode} = useTheme();
  console.log(isDarkMode);
  return (
        <div className={isDarkMode ? 'dark-mode': 'light-mode'} >
          <div className="container">
            <div>
                <ThemeToggleButton />
            </div>
            <h1 className="my-4">My E-Commerce Site</h1>
            <div className="row">
              <ProductPage product={{ id: 1, name: 'Product 1', description: 'Description 1', price: 10 }} />
              <ProductPage product={{ id: 2, name: 'Product 2', description: 'Description 2', price: 20 }} />
              <ProductPage product={{ id: 3, name: 'Product 3', description: 'Description 3', price: 20 }} />
              <Cart />
            </div>
          </div>
        </div>
  );
};

export default ProductHome
