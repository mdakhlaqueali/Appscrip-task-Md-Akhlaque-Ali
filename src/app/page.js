import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Description from "./components/Description/Description";
import Main from "./components/Main/Main";

import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Description />
      <Main />
      <Footer />
    </main>
  );
}
