import Link from "next/link"

export default function Home_dark() {
    return (<div className="flex flex-col bg-black items-center justify-center h-screen w-screen text-white text-5xl"><div className="rounded-full w-24 h-24 bg-amber-400 absolute left-1/2 top-[55%] blur-3xl"></div>
        <div className="rounded-full w-32 h-32 absolute left-[35%] top-[38%%] blur-3xl bg-emerald-300"></div>
        <div className="rounded-full w-24 h-24 bg-rose-300 absolute left-[50%] top-[40%] blur-3xl"></div><span className="opacity-40">You have stong deutan</span><Link href="/dark"><button className="px-20 py-3 text-slate-400 rounded-xl mt-10 border-2 border-solid border-slate-700 hover:border-slate-200 hover:bg-slate-200 hover:scale-110 hover:shadow-none hover:text-slate-800 font-bold mx-auto text-base hover:opacity-30 duration-500">
            Return to homepage
          </button></Link></div>);
}