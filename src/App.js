import BooksList from "./components/BooksList";
import LogBooksButton from "./components/LogBooksButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import RegisterButton from "./components/RegisterButton";

function App() {
  return (
    <div>
      <h1>אפליקציית ספרים</h1>
      <LogBooksButton />
      <LoginButton />
      <RegisterButton />
      <LogoutButton />
      {/* <BooksList /> */}
    </div>
  );
}

export default App;
