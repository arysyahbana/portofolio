import { useState, useEffect } from "react";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import SplashScreen from "@/components/SplashScreen";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 1000); // Tambahkan delay agar transisi lebih smooth

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return loading ? (
    <SplashScreen onFinish={() => setLoading(false)} />
  ) : (
    <Component {...pageProps} />
  );
}
