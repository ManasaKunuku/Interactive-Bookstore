import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { useStore } from "../context/StoreContext";

export default function BookCard({ book }) {
  const { addToCart } = useStore();
  return <article className="book-card">
    <Link to={`/books/${book.id}`} className={`book-cover ${book.color}`}>
      <span className="cover-mark">THE READING ROOM</span><span className="cover-title">{book.title}</span><span className="cover-author">{book.author}</span>
      <span className="cover-decoration">✳</span>
    </Link>
    <div className="book-info"><div className="book-meta"><span>{book.category}</span><span><Star size={13} fill="currentColor"/> {book.rating}</span></div>
      <Link to={`/books/${book.id}`} className="book-title">{book.title}</Link><p className="author">{book.author}</p>
      <div className="book-bottom"><strong>₹{book.price}</strong><button className="icon-btn" onClick={() => addToCart(book)} aria-label={`Add ${book.title} to cart`}><Plus size={18}/></button></div>
    </div>
  </article>;
}