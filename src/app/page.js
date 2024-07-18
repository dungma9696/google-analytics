"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");
  const router = useRouter();
  const event = ({ action, category, label, ...other }) => {
    window?.gtag?.("event", action, {
      ...other,
    });
  };

  const onClickLoginGoogle = () => {
    window?.gtag?.("event", "login", { method: "Google" });
  };

  const sendViewScreen = () => {
    setTimeout(() => {
      event({
        action: "view_item1",
        category: "ecommerce",
        label: "View Item",
      });
    }, 5000);
  };

  useEffect(() => {
    sendViewScreen();
  }, []);

  const addToCart = () => {
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

  const onClickQualifyLead = () => {
    window?.gtag?.("event", "qualify_lead", {
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

  const onClickTestNha = () => {
    window?.gtag?.("event", "test01", {
      currency: "USD",
      value: 30.03,
      lead_source: "Trade show",
    });

    window?.gtag?.("event", "test02", {
      currency: "USD",
      value: 30.03,
      lead_source: "Trade show",
    });

    router.push("https://www.google.com/");
  };

  const onClickAddToWishlist = () => {
    window?.gtag?.("event", "add_to_wishlist", {
      currency: "USD",
      value: 30.03,
      aaaaa: "111111",
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
          aaaaa: "111111",
        },
        {
          item_id: "SKU_1234522",
          item_name: "Stan and Friends Tee22",
          affiliation: "Google Merchandise Store22",
          coupon: "SUMMER_FUN22",
          discount: 1.22,
          index: 2,
          item_brand: "Google22",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 19.01,
          quantity: 1,
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
  console.log(" window?.gtag===", window?.gtag);
  return (
    <main className={styles.main}>
      <p>{new Date().toISOString()}</p>
      <div className={styles.description}>
        <input placeholder="value" onChange={(e) => setValue(e.target.value)} />
        <input placeholder="label" onChange={(e) => setLabel(e.target.value)} />
        <button onClick={addToCart}>addToCart</button>
        <button onClick={() => viewProduct(1)}>viewProduct1</button>
        <button onClick={onClickAddToWishlist}>add_to_wishlist</button>
        <button onClick={onClickLoginGoogle}>login</button>
        <button onClick={onClickGenerateLead}>generate_lead</button>
        <button onClick={onClickQualifyLead}>qualify_lead</button>
        <button onClick={onClickTestNha}>test nha</button>
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
