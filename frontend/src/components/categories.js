
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { redirect, useParams } from 'react-router-dom'; 
import { Link,useNavigate } from  'react-router-dom';
import '../Ui/categories.css'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Navbar from './Search';

const Categories = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity,setquantity]=useState();
  const navigate=useNavigate();


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://amazonclone-tz74.onrender.com/api/v1/products/${id}`);
        setProduct(response.data);
        
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();

   
  }, [id]); 

  console.log(quantity);

  const handleclick=()=>{
navigate(`/eshop/orders/${id}/${quantity}`)
  }
    


  return (
    <div>
    <Navbar/>
      {product ? (
        <div className='display1'>
            

         <div className='image'>
       
          <img src={product.imageURL} width='400px' height='400px' alt={product.name} />
          </div>
          <div className='details'>
          <h1>{product.name}</h1><br/>
          <p>{product.description}</p><br/>
          
          <h2 ><MdOutlineCurrencyRupee />{product.price} Rs</h2><br/>            
          <input type="number" placeholder="Enter quantity" value={quantity} className='quantity' onChange={(e)=>setquantity(e.target.value)}/><br/><br/>
         <button  className='placeorder' onClick={handleclick}>Place order</button>
           </div>
       
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categories;
