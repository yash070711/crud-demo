import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ap = () => {
  const [products, setProducts] = useState([]);
  const[filter,setfilter]=useState("");

  useEffect(() => {
    // Fetch data when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const it=products.filter(val=>{
    val.title.toLowerCase().includes(filter.toLowerCase());
  })



  return (
    <div>
      <h1>Product List</h1>
      <input type='text' value={filter} onChange={e=>setfilter(e.target.value)}></input>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ap;
