import React from 'react'
import './App.css';
import data from './data'


function App() {
  return (
    <div class="grid-container">
    <header class="row">
     <div>
         <a class="brand" href="/">Amazone</a>
     </div>
     <div>
         <a href="/signin">Sign In</a>
         <a href="/cart"><i class="fas fa-cart-plus"></i>Cart</a>
     </div>
    </header>
    <main>
    <div className="row center">
    { data.products.map((product) =>(
          <div key={product.id} class="card">
             <a href={`/product/${product.id}`}>
                {/* <!-- image size :680px  by 830px --> */}
                <img class="medium" src={product.image} alt="product"/>
            </a>
            <div class="card-body">
                <a href={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </a>
                <div class="rating">
                     <span>  <i class="fa fa-star"> </i> </span>
                     <span>  <i class="fa fa-star"> </i></span>
                     <span>  <i class="fa fa-star"> </i></span>
                     <span>  <i class="fa fa-star"> </i></span>
                     <span>  <i class="fas fa-star-half-alt"> </i></span>
                </div>
                <div class="price">
                    ₹{product.price}
                </div>
            </div>
        </div>
      ))
    }
       
    </div>
    </main>
    <footer class="row center">  All Right Reserved</footer>
    </div>
  );
}

export default App;
