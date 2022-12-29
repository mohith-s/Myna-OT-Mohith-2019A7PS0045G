

function BakeryProducts(props) {
    return (
        <>
            <div style={{display:"flex",margin:"auto", padding:"30px"}}>
                <img src={props.image} style={{width:"100px",height:"100px"}}/>
                <div style={{margin:"auto", marginLeft:"20px"}}>
                    <h4 style={{fontFamily:"'Pacifico', cursive"}}>{props.name}</h4>
                    <div style={{fontFamily:"'Nanum Myeongjo', serif"}}>{props.description}</div>
                </div>
            </div>
        </>
    );
}


export default BakeryProducts;