"use client";
import { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import FilterSidebar from "../filter-sidebar/Sidebar";

interface Product {
  id: number;
  name: string;
  image: string;
  status: string;
  stock?: string;
  newProduct?: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsFilterVisible(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={styles.productList}>
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      <div className={styles.productListHeader}>
        {!isMobile ? (
          <>
            <div className={styles.hideFilterDiv}>
              <span
                className={styles.itemCount}
              >{`${products.length} ITEMS`}</span>
              <button className={styles.hideButton} onClick={toggleFilter}>
                {isFilterVisible ? "< HIDE FILTER" : "< SHOW FILTER"}
              </button>
            </div>
            <select className={styles.recommendedButton}>
              <option>RECOMMENDED</option>
            </select>
          </>
        ) : (
          <div className={styles.mobileTabContainer}>
            <button className={styles.filterTab} onClick={toggleFilter}>
              FILTER
            </button>
            <select className={styles.recommendedButton}>
              <option>RECOMMENDED</option>
            </select>
          </div>
        )}
      </div>

      <div className={styles.contentWrapper}>
        {!isMobile && isFilterVisible && <FilterSidebar />}
        <div className={styles.productSection}>
          {isMobile && isFilterVisible && <FilterSidebar />}
          <div
            className={`${styles.productGrid} ${
              isFilterVisible && !isMobile
                ? styles.filterVisible
                : styles.filterHidden
            }`}
          >
            {products.map((product) => (
              <div key={product.id} className={styles.productItem}>
                <div
                  className={`${styles.productCard} ${
                    product.stock === "OUT OF STOCK" ? styles.outOfStock : ""
                  }`}
                >
                  {product.newProduct && (
                    <div className={styles.newProduct}>
                      {product.newProduct}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={
                      product.stock === "OUT OF STOCK"
                        ? styles.blurredImage
                        : ""
                    }
                  />
                  {product.stock === "OUT OF STOCK" && (
                    <div className={styles.stockStatus}>{product.stock}</div>
                  )}
                </div>
                <div className={styles.productStatusContainer}>
                  <h5 className={styles.productName}>{`${product.name.slice(
                    0,
                    20
                  )}...`}</h5>
                  <div className={styles.heartContainer}>
                    <p className={styles.productStatus}>
                      <a className={styles.signIn} href="#">
                        Sign in{" "}
                      </a>
                      {`${product.status}`}
                    </p>
                    <button
                      className={`${styles.likeButton} ${
                        likedProducts.has(product.id) ? styles.liked : ""
                      }`}
                      onClick={() => toggleLike(product.id)}
                    >
                      <svg
                        className={styles.heartIcon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
