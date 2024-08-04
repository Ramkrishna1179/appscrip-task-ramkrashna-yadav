"use client";
import Head from "next/head";
import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";
import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        let products = await res.json();

        products = products.map((product: any, index: number) => {
          if (index === 0) {
            product.new_product = "NEW PRODUCT";
          } else if (index === 1) {
            product.out_of_stock = "OUT OF STOCK";
          }
          return product;
        });

        const formattedProducts = products.map((product: any) => ({
          id: product.id,
          name: product.title,
          image: product.image,
          status: "or Create an account to see pricing",
          stock: product.out_of_stock,
          newProduct: product.new_product,
        }));

        setProducts(formattedProducts);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Explore our wide range of products" />
      </Head>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}
