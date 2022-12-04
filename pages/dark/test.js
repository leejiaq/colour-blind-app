//import Head from "next/head";
//import Image from "next/image";
//import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home_dark() {
    return (
      <div className="bg-black text-white w-full h-screen">
        <div className="rounded-full w-24 h-24 bg-amber-400 absolute left-1/2 top-1/2 blur-3xl"></div>
        <div className="rounded-full w-32 h-32 absolute left-[35%] top-[45%] blur-3xl bg-emerald-300"></div>
        <div className="rounded-full w-24 h-24 bg-rose-300 absolute left-[59%] top-1/2 blur-3xl"></div>
        <div className="scroll-smooth w-screen mx-auto h-screen snap snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start relative flex items-center justify-center h-screen text-center flex-col">
        <h1 className="text-3xl">Colour Blind Test</h1>
        <a href="#1"><button className="px-20 py-3 bg-black text-slate-400 rounded-xl mt-10 border-2 border-solid border-slate-700 hover:border-slate-200 hover:bg-slate-200 hover:scale-110 duration-200 hover:shadow-none hover:text-slate-800 font-bold mx-auto">
            Get started
          </button></a>
      </div>
      <div id="1" className="snap-start relative flex items-center justify-center h-screen w-screen">
        <div className="lg:grid grid-cols-2 lg:grid-rows-none gap-2 gap-y-5 w-screen grid-rows-2 lg:max-w-5xl bg-slate-600 p-10 rounded-3xl bg-opacity-30">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ishihara_9.svg/360px-Ishihara_9.svg.png" alt="" className="bg-white rounded-3xl p-5 mx-auto max-w-xs" />
       <div className="grid-cols-3 grid grid-rows-3 gap-4 text-2xl mt-10 lg:mt-0">
        <a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">71</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">73</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">74</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">76</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">78</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">79</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">81</a><a href="#2" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">84</a><a href="#2" className="p-5 bg-slate-400 rounded-3xl flex items-center justify-center">Skip</a>
       </div>
       </div>
      </div>
      <div id="2" className="snap-start relative flex items-center justify-center h-screen w-screen">
        <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-8 w-screen lg:max-w-5xl bg-slate-600 p-10 rounded-3xl bg-opacity-30 z-20 max-h-[90%]">
       <img src="https://www.colorlitelens.com/images/Ishihara/Ishihara_00.jpg" alt="" className="bg-white rounded-3xl p-5 max-w-xs mx-auto" />
       <div className="grid-cols-3 grid grid-rows-3 gap-4 text-2xl mt-10 lg:mt-0">
        <a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">10</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">11</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">12</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">13</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">14</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">15</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">16</a><a href="#3" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">17</a><a href="#3" className="p-5 bg-slate-400 rounded-3xl flex items-center justify-center">Skip</a>
       </div>
       </div>
       
      </div>
      <div id="3" className="snap-start relative flex items-center justify-center h-screen w-screen">
        <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-2 w-screen lg:max-w-5xl bg-slate-600 p-10 rounded-3xl bg-opacity-30 z-20 max-h-[90%]">
       <img src="https://www.colour-blindness.com/CBTests/ishihara/Plate10.gif" alt="" className="bg-white rounded-3xl p-5 lg:w-96 max-w-xs mx-auto" />
       <div className="grid-cols-3 grid grid-rows-3 gap-4 text-2xl mt-10 lg:mt-0">
        <a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">1</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">2</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">3</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">4</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">5</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">6</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">7</a><a href="#4" className="p-5 bg-slate-500 rounded-3xl flex items-center justify-center">8</a><a href="#4" className="p-5 bg-slate-400 rounded-3xl flex items-center justify-center">Skip</a>
       </div>
       </div>
      </div>
      <div id="4" className="snap-start relative flex items-center justify-center h-screen text-center flex-col">
        <Link href="/dark/result"><button className="px-20 py-3 bg-black text-slate-400 rounded-xl mt-10 border-2 border-solid border-slate-700 hover:border-slate-200 hover:bg-slate-200 hover:scale-110 duration-200 hover:shadow-none hover:text-slate-800 font-bold mx-auto">
            See your result
          </button></Link>
      </div>
    </div>
        
      </div>
    );
}