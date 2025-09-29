// src/components/LogBooksButton.jsx
import { booksService } from "../services/books";

export default function LogBooksButton() {
  const handleClick = async () => {
    try {
      const data = await booksService.getAll();
      console.log("Books:", data);
      alert("הספרים הודפסו לקונסול (F12)");
    } catch (e) {
      console.error("Failed to fetch books:", e);
      alert("שגיאה בשליפת ספרים (בדוק קונסול)");
    }
  };

  return <button onClick={handleClick}>הדפס ספרים לקונסול</button>;
}
