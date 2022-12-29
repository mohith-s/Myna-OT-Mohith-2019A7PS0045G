import {useState} from 'react';



function NewProducts(props) {
    const [cartState, setCartState] = useState(true);

    function onClickButtonHandler() {
        if(cartState){
            setCartState(false);
            props.products[props.name] = 1;
        }
        else{
            setCartState(true);
            props.products[props.name] = 0;
        }
    }
    
    return (
        <div className='prod-thumbnail' style={{margin:"auto",textAlign:"center", border:"1px #F8EDE3 solid", borderRadius:"25px"}}>
            <img src={props.image} style={{width:"250px", height:"250px", borderTopLeftRadius:"25px", borderTopRightRadius:"25px"}}/>
            <h4 style={{marginTop:"10px", fontFamily:"'Roboto Slab', serif"}}>{props.name}</h4>
            <h3 style={{fontFamily:"'Montserrat', sans-serif"}}>{props.price}</h3>
            <button 
                onClick={() => {
                    onClickButtonHandler();
                }} 
                type="button" 
                className='btn btn-dark'
                style={{margin:"10px"}}
            >
                {cartState? "Add to cart" : "Delete from cart"}
            </button>
        </div>
    );
}
export default NewProducts;