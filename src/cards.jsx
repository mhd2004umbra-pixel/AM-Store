import './cards.css'

export default function ProductCard({product={}}) {
  return (
    <div className="product-card">
      <img className="image" src={product.image} alt={product.name || 'product'}/>
      <div className='button-style'>
        <button className='card-button'>info</button>
        <button className='card-button'>fav</button>
        <button className='card-button'>Add to cart</button>
      </div>
        <h3 className='name'>{product.name ?? "no"}</h3>
        <div className='card-footer'>
        <p className='stock'>stock: {product.stock}</p>
        <p className='price'>price: {product.price}</p>
        </div>
    </div>
  )
}