//import Head from "next/head";
//import Image from "next/image";
//import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Home_dark() {
    return (
      <div className="bg-black w-full h-screen">
        <div className="max-w-[300px] lg:max-w-3xl mx-auto text-center lg:text-left text-white">
          <Link href="/"><button>Light</button></Link>
          <p className="text-lg font-light mt-10 text-slate-400">Eye Test</p>
          <h1 className="text-3xl">Colour Blind Test</h1>
          <p className="mt-10">
          </p>
        <div className="text-center lg:text-left">

</div>
        </div>
      </div>
    );
}