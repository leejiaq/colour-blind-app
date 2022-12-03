import Link from "next/link"

export default function IndexPage({ allProjectsData }) {
  return (
    <div className="scroll-smooth w-screen mx-auto h-screen bg-white dark:bg-black snap snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start relative flex items-center justify-center h-screen">
        <a href="#s">HI</a>
      </div>
      <div id="s" className="snap-start relative flex items-center justify-center h-screen">
        HI
      </div>
    </div>

  );
}
