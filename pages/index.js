import { faker } from "@faker-js/faker";
import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";

import Login from "../components/Login";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Stories from "../components/Stories";
import ManagePost from "../components/ManagePost";

export default function Home({ contacts, posts }) {
  const { data: session, loading } = useSession();
  if (!session) return <Login />;

  return (
    <div className="bg-zinc-100">
      <Head>
        <title>Facebook clone</title>
        <meta name="description" content="Facebook clone" />
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      {/* Header */}
      <Header />
      <div className="flex justify-between min-h-screen lg:px-3">
        {/* Left sidebar */}
        <LeftSidebar />
        {/* Main content */}
        <main className="lg:w-5/12 min-w-[465px] flex justify-center mt-3">
          <div className="w-full">
            <Stories contacts={contacts} />
            <ManagePost />
          </div>
        </main>
        {/* Right sidebar */}
        <RightSidebar contacts={contacts} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const contacts = Array(15)
    .fill(null)
    .map((_, idx) => ({
      id: idx,
      name: faker.name.findName(),
      src: faker.image.people(180, 300, true),
    }));

  return {
    props: {
      session,
      contacts,
    },
  };
}
