import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/css/main.css";
import Link from "next/link";
import Script from "next/script";

import type { Metadata } from "next";
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--urbanist",
  display: "swap",
});
const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--playpair",
  display: "swap",
});
const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--dmMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zelio - Personal Portfolio Template",
  description: "Zelio - Personal Portfolio Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" className="zelio">
      <head>
        <title>
          Sarmed Rizvi | Expert AI Agent Developer & Digital Innovator
        </title>
        <meta
          title="Sarmed Rizvi | Expert AI Agent Developer & Digital Innovator"
          name="description"
          content="Discover Sarmed Rizvi's expertise in AI-driven solutions, including intelligent chatbots, custom automation, and real-time API integrations. With 8+ years of experience, 162+ completed projects, and 440+ satisfied clients, Sarmed specializes in revolutionizing businesses through cutting-edge AI technologies like OpenAI, LangChain, and TensorFlow."
        />

        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){ 
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; 
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; 
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); 
            })(window, document, "clarity", "script", "qhwmr38vuf");`,
          }}
        />

        {/* <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script> */}
      </head>

      <body
        className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}
      >
        {children}
        <Link
          href="https://wa.me/923152964742"
          target="_blank"
          rel="noopener noreferrer"
          className="reach-out"
        >
          <img
            src="/assets/imgs/index-2/whatsapp.svg"
            alt="whatsapp logo"
            className="whatsapp-logo"
          />
        </Link>
      </body>
    </html>
  );
}
