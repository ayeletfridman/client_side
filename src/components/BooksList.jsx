import { useEffect, useState } from "react";
import { booksService } from "../services/books";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await booksService.getAll();
        setBooks(data);
      } catch (e) {
        setErr(e.message || "שגיאה בטעינת הנתונים");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>טוען נתונים...</p>;
  if (err) return <p style={{ color: "red" }}>שגיאה: {err}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>רשימת ספרים</h2>
      {books.length === 0 ? (
        <p>אין ספרים להצגה</p>
      ) : (
        <ul>
          {books.map((b) => (
            <li key={b.id}>
              <strong>{b.title}</strong> — {b.author} ({b.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
