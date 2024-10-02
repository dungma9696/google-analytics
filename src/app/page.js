"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const sendFacebookPixelEvent = (name, options = {}) => {
  console.log("sendFacebookPixelEvent");
  if (window?.ttq) {
    window?.ttq("CompletePayment", {
      content_type: "content_type1",
      currency: "USD",
    });
  }
};

export default function Home() {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");

  // useEffect(() => {
  //   sendViewScreen();
  // }, []);

  const addToCart = () => {};

  const onClickGenerateLead = () => {};

  const onClickQualifyLead = () => {};

  const onClickTestNha = () => {};

  const onClickAddToWishlist = () => {};
  const viewProduct = (id) => {};
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(" window?.gtag===", window?.gtag);
    }
  }, []);

  return (
    <main className={styles.main}>
      <p>sssssss</p>
      <div className={styles.description}>
        <button
          onClick={() => {
            sendFacebookPixelEvent("CompletePayment", {
              content_ids: "1",
              value: 22,
            });
          }}
        >
          AddToCart{" "}
        </button>

        <button
          onClick={() => {
            sendFacebookPixelEvent("AddToWishlist", {
              content_ids: "1",
              value: 22,
              currency: "USD",
            });
          }}
        >
          AddToWishlist{" "}
        </button>
        <button
          onClick={() => {
            sendFacebookPixelEvent("Search", {
              content_ids: "12",
              contents: "search",
              currency: "USD",
            });
          }}
        >
          Search{" "}
        </button>
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
