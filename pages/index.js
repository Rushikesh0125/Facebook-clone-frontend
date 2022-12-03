import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Header from '../Components/Header'
import Login from '../Components/Login';
import Sidebar from '../Components/Sidebar';
import Feed from '../Components/Feed';
import RightSidebar from '../Components/RightSidebar';


export default function Home({ session }) {
  if(!session) return <Login/>;
  return (
    <div>
      <Head>
        <title>Facebook-spring-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex bg-gray-100" >
        {/* sidebar */}
        <Sidebar />
        {/* posts and create post */}
        <Feed />
        {/* right sidebar */}
        <RightSidebar />
      </main>

      
    </div>
  );
}

export async function getServerSideProps(context){
    const session = await getSession(context);
    return{
      props: { session },
    };
}
