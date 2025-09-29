import BooksList from "./components/BooksList";
import LogBooksButton from "./components/LogBooksButton";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div>
      <h1>אפליקציית ספרים</h1>
      <LogBooksButton />
      <LoginButton />
      <BooksList />
    </div>
  );
}

export default App;
