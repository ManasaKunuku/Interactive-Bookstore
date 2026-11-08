import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useStore();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", address:"", city:"", pincode:"" });
  const [error, setError] = useState("");
  const total = totalPrice + (totalPrice >= 999 ? 0 : 49);
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    if (!cart.length) return;
    if (!/^[6-9]\d{9}$/.test(form.phone)) return setError("Enter a valid 10-digit Indian mobile number.");
    if (!/^\d{6}$/.test(form.pincode)) return setError("Enter a valid 6-digit PIN code.");
    setError(""); setPlaced(true); clearCart();
  };
  if (placed) return <main className="container page"><div className="success-state"><CheckCircle2 size={58}/><span className="eyebrow">ORDER CONFIRMED</span><h1>Happy reading, {form.name.split(" ")[0]}!</h1><p>Your demo order has been placed successfully. This project does not process real payments.</p><Link to="/books" className="primary-btn">Explore more books</Link></div></main>;
  if (!cart.length) return <main className="container page empty-state"><h2>No items to checkout</h2><Link to="/books" className="primary-btn">Browse books</Link></main>;
  return <main className="container page"><div className="page-heading"><span className="eyebrow">ALMOST YOURS</span><h1>Checkout</h1><p>Enter your delivery details to place your demo order.</p></div><div className="checkout-layout"><form className="checkout-form" onSubmit={submit}><h2>Delivery information</h2><div className="form-grid"><label>Full name<input name="name" value={form.name} onChange={update} required placeholder="Your name"/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com"/></label><label>Mobile number<input name="phone" value={form.phone} onChange={update} required maxLength="10" placeholder="10-digit mobile number"/></label><label>PIN code<input name="pincode" value={form.pincode} onChange={update} required maxLength="6" placeholder="6-digit PIN code"/></label><label className="wide">Address<textarea name="address" value={form.address} onChange={update} required rows="3" placeholder="House no., street, area"/></label><label className="wide">City<input name="city" value={form.city} onChange={update} required placeholder="City"/></label></div>{error && <p className="form-error">{error}</p>}<button className="primary-btn" type="submit">Place order · ₹{total}</button></form><aside className="order-summary"><h3>Your order</h3>{cart.map(item=><div key={item.id}><span>{item.title} × {item.quantity}</span><b>₹{item.price*item.quantity}</b></div>)}<div><span>Delivery</span><b>{totalPrice>=999?"FREE":"₹49"}</b></div><div className="summary-total"><span>Total</span><strong>₹{total}</strong></div><small className="demo-note">Demo checkout only — no payment is collected.</small></aside></div></main>;
}