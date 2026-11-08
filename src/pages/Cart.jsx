import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useStore();
  return <main className="container page"><div className="page-heading"><span className="eyebrow">YOUR LITTLE BOOK PILE</span><h1>Shopping cart</h1><p>{cart.length ? "A good choice. Let's make these yours." : "Your next great read is just around the corner."}</p></div>
    {!cart.length ? <div className="empty-state"><ShoppingBag size={38}/><h2>Your cart is empty</h2><p>Explore the shelves and find something you love.</p><Link to="/books" className="primary-btn">Browse books</Link></div> :
    <div className="cart-layout"><div className="cart-items">{cart.map(item => <div className="cart-item" key={item.id}><div className={`mini-cover ${item.color}`}><span>{item.title}</span></div><div className="cart-item-info"><Link to={`/books/${item.id}`}>{item.title}</Link><small>{item.author}</small><b>₹{item.price}</b><button className="remove-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={14}/> Remove</button></div><div className="quantity"><button onClick={() => updateQuantity(item.id,item.quantity-1)} aria-label="Decrease quantity"><Minus size={14}/></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id,item.quantity+1)} aria-label="Increase quantity"><Plus size={14}/></button></div><strong>₹{item.price*item.quantity}</strong></div>)}</div>
    <aside className="order-summary"><h3>Order summary</h3><div><span>Subtotal</span><b>₹{totalPrice}</b></div><div><span>Delivery</span><b>{totalPrice>=999?"FREE":"₹49"}</b></div><div className="summary-total"><span>Total</span><strong>₹{totalPrice+(totalPrice>=999?0:49)}</strong></div><Link to="/checkout" className="primary-btn full-btn">Continue to checkout</Link><Link to="/books" className="continue-link">Continue shopping</Link></aside></div>}
  </main>;
}