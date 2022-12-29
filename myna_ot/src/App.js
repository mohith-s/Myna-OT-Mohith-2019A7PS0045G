import './App.css';
import BakeryProducts from './components/BakeryProducts';
import NewProducts from './components/NewProducts';
import CakeSlice from "../src/icons/cake-slice.png";
import Cake1 from "../src/icons/cake1.jpeg";
import Cake2 from "../src/icons/cake2.jpg";
import Cake3 from "../src/icons/cake3.jpg";
import Cake4 from "../src/icons/cake4.jpeg";
import NewProd1 from "../src/icons/new-prod-1.jpg";
import NewProd2 from "../src/icons/new-prod-2.jpg";
import NewProd3 from "../src/icons/new-prod-3.jpg";

function App() {

  const products = {
    "Choco lava cake" : 0,
    "Black forest" : 0,
    "Vanilla cake" : 0,
    "Choco burst" : 0
  };

  function onClickCheckoutHandler() {
    console.log(products);
  }

  return (
    <div>
      <div style={{height:"150px", background:"#E1D7C6"}}>

      </div>
       
      <div className="bakery-products shadow row">
        <div className="col-lg-4 bakery-prod">
          <BakeryProducts name="Cakes" image={NewProd1} description="Custom made cakes of all flavours available!"/>
        </div>
        <div className="col-lg-4 col-md-6 bakery-prod">
          <BakeryProducts name="Ice creams" image={NewProd2} description="Vannila, choco and strawberry magic!"/>
        </div>
        <div className="col-lg-4 col-md-6 bakery-prod">
          <BakeryProducts name="Buns" image={NewProd3} description="Perfectly made buns available for your brakfast!"/>
        </div>
      </div>

      <div style={{textAlign:"center", marginTop:"-80px"}}>
        <h1 style={{fontFamily:"'Roboto Slab', serif"}}>NEW PRODUCTS</h1>
      </div>

      <div className="new-products row"> 
        <div className="new-prod col-lg-3 col-md-6">
          <NewProducts image={Cake1} name="Choco lava cake" products={products} price="$ 5.25"/>
        </div>
        <div className="new-prod col-lg-3 col-md-6">
          <NewProducts image={Cake2} name="Black forest" products={products} price="$ 6.50"/>
        </div>
        <div className="new-prod col-lg-3 col-md-6">
          <NewProducts image={Cake3} name="Vanilla cake" products={products} price="$ 3.00"/>
        </div>
        <div className="new-prod col-lg-3 col-md-6">
          <NewProducts image={Cake4} name="Choco burst" products={products} price="$ 7.75"/>
        </div>
      </div>

      <div style={{textAlign:"center", marginTop:"10px", marginBottom:"30px"}}>
        <button type="button" className='btn btn-secondary btn-lg' onClick={() => onClickCheckoutHandler()}>Checkout</button>
      </div>
            

    </div>
  );
}

export default App;
