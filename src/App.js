import './App.css';
import Nav from "./components/nav";
import BackToTop from "./components/backToTop";
import Maincontent from "./components/main-content";
import Footer from "./components/footer"


const App = () => {

  return (
    <div>
      <div className="main-container">
        <Nav />
        <BackToTop />
        <Maincontent />
        <Footer />

      </div>

      {/*   Bottom - page     */}
      <div className="end"></div>
      <div className="copy-right">
        © 2018 Madura Fashion & Lifestyle A Division of Aditya Birla Fashion & Retail Limited. All rights reserved.
             </div>
    </div>

  )
}

export default App;
