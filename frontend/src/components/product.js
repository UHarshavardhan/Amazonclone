import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Navbar from "./Search";
import "../Ui/product.css";
import { useNavigate } from "react-router";

const Product = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate=useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/v1/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product data:', error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/v1/products/categories');
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  const handleClick = (id) => {
   navigate(`/eshop/products/${id}`)
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
         
      
          <div className="Categories">
            {categories.map((category) => (
              <div key={category.id}>
                <button className="categories-button" onClick={() => handleCategoryClick(category)}>
                  <h3>{category}</h3>
                </button>
              </div>
            ))}
          </div>
          <div className="content" >
            {products
              .filter((item) => {
               return item && item.name && search ? item.name.toLowerCase().includes(search.toLowerCase()) : true})
              .filter((product) => 
              {return selectedCategory ? product.category === selectedCategory : true})
              .map((product) => (
                <div key={product._id} className="display" onClick={() => handleClick(product._id)}>
                  <div className="image1">
                    <img src={product.imageURL} alt={product.name} width="200" height="200" />
                  </div>
                  <div className="text1">
                    <h3>{product.name}</h3>
                    <h2>{product.description}</h2>
                    <br />
                    <h5>
                      <MdOutlineCurrencyRupee />
                      {product.price} Rs
                    </h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
