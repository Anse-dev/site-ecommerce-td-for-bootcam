import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageDetailProduct from "./pages/PageDetailProduct";
import Header from "./composants/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/product/:productId" element={<PageDetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
