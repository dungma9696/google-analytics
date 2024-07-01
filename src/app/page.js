"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  // useEffect(() => {
  //   sendGTMEvent({ event: "view_cart", value: "xyz_sendGTMEvent" });
  //   sendGAEvent({ event: "view_cart", value: "xyz_sendGAEvent" });
  // }, []);

  const event = ({ action, category, label, value }) => {
    window?.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const addToCart = () => {
    sendGTMEvent({ event: "add_to_cart", value: "Tesla" });
    sendGAEvent({ event: "add_to_cart", value: "Tesla" });
    // event({
    //   action: "add_to_cart",
    //   category: "ecommerce",
    //   label: "Item added to cart",
    //   value: "Tesla",
    // });
  };

  const viewProduct = (id) => {
    sendGTMEvent({
      event: "viewProduct",
      value: "viewProduct1=" + id,
      category: "ecommerce2",
    });
    sendGAEvent({
      event: "viewProduct",
      value: "viewProduct1=" + id,
      category: "ecommerce2",
    });
    // event({
    //   action: "viewProduct",
    //   category: "ecommerce",
    //   label: "view Product detail",
    //   value: "viewProduct1" + id,
    // });
  };
  // useEffect(() => {
  //   addToCart();
  // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={addToCart}>click1</button>
        <button onClick={() => viewProduct(1)}>viewProduct1</button>
        <button onClick={() => viewProduct(2)}>viewProduct2</button>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
