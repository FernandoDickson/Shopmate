import "./ProductCard.css";

export default function ProductCard({product}) {

  const {name,price, image} = product;

  return (
    <dive className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name} </p>
      <div className="action">
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </dive>
  )
}
