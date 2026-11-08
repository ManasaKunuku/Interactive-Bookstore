import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { books } from "../data/books";
import BookCard from "../components/BookCard";

export default function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const categories = ["All", ...new Set(books.map(book => book.category))];
  const filtered = useMemo(() => {
    let result = books.filter(book => (category === "All" || book.category === category) &&
      `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(search.toLowerCase()));
    if (sort === "low") result = [...result].sort((a,b) => a.price-b.price);
    if (sort === "high") result = [...result].sort((a,b) => b.price-a.price);
    if (sort === "rating") result = [...result].sort((a,b) => b.rating-a.rating);
    return result;
  }, [search, category, sort]);
  return <main className="container page"><div className="page-heading"><span className="eyebrow">THE BOOKSHELF</span><h1>Find your next read.</h1><p>Browse our collection of stories, ideas, and inspiration.</p></div>
    <div className="toolbar"><label className="search-box"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title, author, or category..."/></label><label className="sort-box"><SlidersHorizontal size={17}/><select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></label></div>
    <div className="filter-row">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category===item?"active":""}`}>{item}</button>)}</div>
    <p className="result-count">{filtered.length} books found</p>
    {filtered.length ? <div className="book-grid">{filtered.map(book => <BookCard key={book.id} book={book}/>)}</div> : <div className="empty-state"><BookOpen size={35}/><h3>No books found</h3><p>Try another title or choose a different category.</p><button className="secondary-btn" onClick={() => {setSearch("");setCategory("All");}}>Clear filters</button></div>}
  </main>;
}