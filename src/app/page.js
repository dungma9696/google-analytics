"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const sendFacebookPixelEvent = (name, options = {}) => {
  console.log("sendFacebookPixelEvent");
  if (window?.ttq?.track) {
    console.log("======");
    window?.ttq?.track("CompletePayment", {
      content_type: "content_type1",
      value: 9,
      currency: "USD",
    });
  }
};

export default function Home() {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");

  const [tiktokPixelIds, setTiktokPixelIds] = useState([
    "CRUFLM3C77UDN9PK8TB0",
    "CRUGLJRC77UDN9PK905G",
  ]);

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

  useEffect(() => {
    const elementScriptFacebook = document.querySelector("#tiktok-pixel");
    if (tiktokPixelIds.length > 0 && !elementScriptFacebook) {
      const script = document.createElement("script");
      const tiktokInit = tiktokPixelIds
        .map((item) => `ttq.load('init', '${item}');`)
        .join("");
      script.async = true;
      script.id = "tiktok-pixel";
      script.text = `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

 ${tiktokInit}
}(window, document, 'ttq');`;
      document.body.append(script);
    }
  }, [tiktokPixelIds]);

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
