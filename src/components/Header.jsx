import { Link, NavLink } from "react-router-dom";
import { BookOpen, ShoppingBag } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function Header() {
  const { totalItems } = useStore();
  return <header className="header"><div className="container nav-wrap">
    <Link to="/" className="brand"><span className="brand-icon"><BookOpen size={21}/></span><span>the reading room<small>BOOKS FOR EVERY CHAPTER</small></span></Link>
    <nav><NavLink to="/">Home</NavLink><NavLink to="/books">Browse books</NavLink></nav>
    <Link to="/cart" className="cart-link"><ShoppingBag size={19}/> <span>Cart</span><b>{totalItems}</b></Link>
  </div></header>;
}