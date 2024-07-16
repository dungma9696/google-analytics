"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");

  const event = ({ action, category, label, ...other }) => {
    window?.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      ...other,
    });
  };

  const onClickLoginGoogle = () => {
    window?.gtag?.("event", "login", { method: "Google" });
  };

  const sendViewScreen = () => {
    setTimeout(() => {
      event({
        action: "view_item",
        category: "ecommerce",
        label: "View Item",
      });
    }, 500);
  };

  useEffect(() => {
    sendViewScreen();
  }, []);
  // useEffect(() => {
  //   if (window?.gtag) {
  //     debugger;
  //     event({
  //       action: "viewwww",
  //       category: "viewwww",
  //       label: label || "Item added to cart",
  //       value: "add to cart" + value,
  //     });
  //   }

  // }, [window?.gtag]);

  const addToCart = () => {
    // sendGTMEvent({ event: "add_to_cart", value: "Tesla" });
    // sendGAEvent({ event: "add_to_cart333", value: "Tesla" });
    event({
      action: "add_to_cart",
      category: "ecommerce",
      label: "Item added to cart",
      items: [
        {
          item_id: "item_id" + Math.round(Math.random() * 100),
          item_name: "item_name",
          quantity: 2,
          price: 2334,
        },
      ],
    });
  };

  const onClickGenerateLead = () => {
    window?.gtag?.("event", "generate_lead", {
      currency: "USD",
      value: 30.03,
      lead_source: "Trade show",
      items: [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 10.01,
          quantity: 3,
        },
      ],
    });
  };
  const viewProduct = (id) => {
    event({
      action: "viewProduct1",
      category: "ecommerce",
      label: label || "view Product detail",
      value: "viewProduct1" + value,
    });
  };

  return (
    <main className={styles.main}>
      <p>{new Date().toISOString()}</p>
      <div className={styles.description}>
        <input placeholder="value" onChange={(e) => setValue(e.target.value)} />
        <input placeholder="label" onChange={(e) => setLabel(e.target.value)} />
        <button onClick={addToCart}>addToCart</button>
        <button onClick={() => viewProduct(1)}>viewProduct1</button>
        <button onClick={() => viewProduct(2)}>viewProduct2</button>
        <button onClick={onClickLoginGoogle}>login</button>
        <button onClick={onClickGenerateLead}>generate_lead</button>

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
