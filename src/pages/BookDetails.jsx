import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Star, Check } from "lucide-react";
import { books } from "../data/books";
import { useStore } from "../context/StoreContext";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find(item => item.id === Number(id));
  const { addToCart } = useStore();
  if (!book) return <main className="container page"><div className="empty-state"><h2>Book not found</h2><Link to="/books" className="text-link">Back to books</Link></div></main>;
  return <main className="container page"><Link to="/books" className="back-link"><ArrowLeft size={16}/> Back to collection</Link><div className="detail-layout">
    <div className={`detail-cover book-cover ${book.color}`}><span className="cover-mark">THE READING ROOM</span><span className="cover-title">{book.title}</span><span className="cover-author">{book.author}</span><span className="cover-decoration">✳</span></div>
    <div className="detail-copy"><span className="eyebrow">{book.category.toUpperCase()}</span><h1>{book.title}</h1><p className="detail-author">by {book.author}</p><div className="rating-line"><Star size={16} fill="currentColor"/> {book.rating} <span>•</span> Reader favourite</div><p className="detail-description">{book.description}</p><div className="detail-price">₹{book.price}</div><button className="primary-btn" onClick={() => addToCart(book)}>Add to cart <span>＋</span></button><div className="stock-note"><Check size={15}/> In stock and ready to ship</div><div className="detail-perks"><span>✓ Secure checkout</span><span>✓ Carefully packed</span></div></div>
  </div></main>;
}