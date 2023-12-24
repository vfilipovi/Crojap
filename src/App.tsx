import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="flex flex-col min-h-screen light text-foreground bg-background">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
