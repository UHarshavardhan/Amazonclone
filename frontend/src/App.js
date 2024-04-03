import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Search';
import Home from './components/home';
import SignIn from './components/singin';
import Signup from './components/signup';
import Product from './components/product';
import Categories from './components/categories';
import Orders from './components/Orders';

function App() {
  const [search, setSearch] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eshop/signin" element={<SignIn />} />
      <Route path="/eshop/signup" element={<Signup />} />
      <Route path="/eshop/product" element={<ProductRoutes search={search} setSearch={setSearch} />} />
      <Route path="/eshop/products/:id" element={<Categories />} />
      <Route path="/eshop/orders/:id/:quantity" element={<Orders />} />
    </Routes>
  );
}

function ProductRoutes({ search, setSearch }) {
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Product search={search} />} />
      </Routes>
    </>
  );
}

export default App;