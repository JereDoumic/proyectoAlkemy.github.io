import { useCart } from "../hooks/useCart";


function Footer({filters}) {

    const { cart } = useCart();  
    
    return(
        <div className="card">
  <h5 className="card-header">Made by Jere Doumic</h5>
  <div className="card-body">
    <h5 className="card-title">{filters.minPrice}</h5>
    <p className="card-text">{filters.category}</p>
    <a href="#" className="btn btn-primary">Go Home</a>
  </div>
</div>
    )
}

export default Footer;