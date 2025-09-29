import BooksList from "./components/BooksList";
import LogBooksButton from "./components/LogBooksButton";

function App() {
  return (
    <div>
      <h1>אפליקציית ספרים</h1>
      <LogBooksButton />
      <BooksList />
    </div>
  );
}

export default App;
