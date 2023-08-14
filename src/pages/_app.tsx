import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "y/utils/api";
import "y/styles/globals.css";
import Head from "next/head";
import { SideNav } from "y/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="This  is a Twitter clone By yuvraj chaturvedi" />
      </Head>
      <div className="container mx-auto flex items-start">
        <SideNav/>
        <div className ="min-h-screen flex-grow border-x"></div>
        <Component {...pageProps} />
      </div>
      
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
