//import Head from "next/head";
//import Image from "next/image";np
import Link from "next/link"

export default function Home() {
    return (
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="max-w-[300px] lg:max-w-3xl mx-auto text-center lg:text-left">
          <Link href="/dark"><button>Dark</button></Link>
          <p className="text-lg font-light mt-10 text-slate-500">Eye Test</p>
          <h1 className="text-3xl">Colour Blind Test</h1>
          <p className="mt-10">
            What is color blindness? If you have color blindness, it means you
            see colors differently than most people. Most of the time, color
            blindness makes it hard to tell the difference between certain
            colors. Usually, color blindness runs in families. Want to know whether you're colour blind? Let's get started!.
          </p>
        <div className="text-center lg:text-left">
          <Link href="/test"><button className="px-20 py-3 bg-white text-slate-800 rounded-xl mt-10 border-2 border-solid border-slate-900 shadow-sm shadow-[#B6E0FE] hover:border-slate-900 hover:bg-slate-900 hover:scale-110 duration-200 hover:shadow-none hover:text-slate-100 font-bold mx-auto">
            Get started
          </button></Link></div>
          <Link href="/more" className="underline text-slate-400">
            <p className="mt-6">
              Learn more
              </p>
            </Link>
        </div>
      </div>
    );
}