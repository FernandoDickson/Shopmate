import useTitle from "../hooks/useTitle";
import "./CartCard.css";

export default function CartCard({product}) {

  const {name, price, image} = product;
  
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </div>
  )
}
