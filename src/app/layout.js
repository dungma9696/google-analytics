import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1094030432055690');
   fbq('init', '3773904702857416');
  fbq('track', 'PageView');`}

        {/* 3773904702857416 */}
        {/* 1094030432055690 */}
        {/* <!-- Meta Pixel Code -->
<Script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3773904702857416');
fbq('track', 'PageView');
</Script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=3773904702857416&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code --> */}
      </Script>

      <Script id="tiktok" strategy="lazyOnload">
        {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('CRUFLM3C77UDN9PK8TB0');
  ttq.page();
}(window, document, 'ttq');`}
      </Script>
      {/* <GoogleAnalytics gaId={`G-1TYYGE26JN`} /> */}
      {/* <GoogleTagManager gtmId={`G-1TYYGE26JN`} />
      <GoogleAnalytics gaId={`G-1TYYGE26JN`} /> */}
      {/* <GoogleAnalytics gaId="G-GYPX8YSP08" />
      <GoogleTagManager gtmId="G-GYPX8YSP08" /> */}
    </html>
  );
}
