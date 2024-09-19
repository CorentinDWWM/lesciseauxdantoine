import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className={`${styles.appContainer}`}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default App;
