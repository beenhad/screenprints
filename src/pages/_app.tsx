import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useFirstMountState } from "react-use";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isFirstMount = useFirstMountState();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0);
      }}
    >
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: isFirstMount ? 40 : 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: isFirstMount ? 0.8 : 0,
          },
        }}
        exit={{
          opacity: 0,
          y: 20,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className="flex flex-col min-h-screen"
      >
        <main className="grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
