import "./styles.css";
import { PAGE_SIZE } from "./constant";
import Card from "./component/Card";
import Pagination from "./component/Pagination";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = (n) => {
    setCurrentPage(n);
  };
  const fetchProduct = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=500"); // Fixed typo: `ftech` → `fetch`
      const json = await data.json();
      setProducts(json.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const total_product = products?.length;
  const totalPages = Math.ceil(total_product / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return !products?.length ? (
    <div>No product found </div>
  ) : (
    <div className="App">
      <h1>
        Pagination is {currentPage}/{totalPages}
      </h1>
      <Pagination
        handlePrev={handlePrev}
        handleChange={handleChange}
        handleNext={handleNext}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <div className="product-container">
        {products.slice(start, end).map((p, index) => (
          <Card key={p.id} image={p.images[0]} title={p.title} />
        ))}
      </div>
    </div>
  );
}
