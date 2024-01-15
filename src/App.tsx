import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { store } from "./store/store";

function App() {
  return (
    <div className="flex flex-col min-h-screen light text-foreground bg-background">
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
