import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  return <div className="app-shell"><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/books" element={<Books/>}/><Route path="/books/:id" element={<BookDetails/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="*" element={<main className="container page empty-state"><h1>Page not found</h1><a className="primary-btn" href="/">Go home</a></main>}/></Routes><Footer/></div>;
}