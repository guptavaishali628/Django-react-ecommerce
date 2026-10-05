import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "../pages/ProductList.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;