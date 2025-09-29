import { booksService } from "../services/books";

export default function LogBooksButton() {
  const handleClick = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        alert("אין טוקן בלוקאל– בצעי Login ואז נסי שוב");
        return;
      }

      const data = await booksService.getAll();
      console.log("Books:", data);
      alert("הספרים הודפסו לקונסול (F12)");
    } catch (e) {
      const status = e?.response?.status;
      const msg = e?.response?.data?.message || e.message;
      if (status === 401) {
        alert("401 Unauthorized: " + msg + " — בצעי Login שוב");
      } else {
        alert("שגיאה בשליפת ספרים: " + msg);
      }
      console.error("Failed to fetch books:", e);
    }
  };

  return <button onClick={handleClick}>הדפס ספרים לקונסול</button>;
}
