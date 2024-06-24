import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowDownIcon, BellDotIcon, BellIcon, Briefcase, HandCoins, MessageSquare, MessageSquareDot, Sparkles, Users } from "lucide-react";
import { NavigationMenu } from "./nav-menu";
import { Badge } from "./ui/badge";

const Nav = () => {
  return (
    <main className="flex justify-between items-center fixed top-0 left-0 right-0 z-10 py-3 px-4 sm:px-8 border-b transition-all duration-500 bg-white/40 backdrop-blur-md">
      <div id="logo-div" className="">
        <div className="text-orange-600 bg-slate-300 px-3 py-2 rounded-md">Logo</div>
      </div>
      <div className="flex items-center justify-center">

      <div className="mr-10 shadow-lg rounded-full shadow-slate-400">
      <Button className="bg-orange-600 text-white rounded-full  ">

        <Briefcase className="mr-1 "/>Jobs
        </Button>
      </div>
      <div className="bg-white rounded-full  p-3 shadow-inner shadow-slate-400 ">
        <ul className="items-center flex justify-center gap-6  ">
            <li className="items-center flex justify-center" id="">
            <MessageSquare className="text-orange-400" id="" />Messages
            </li>
            <li className="items-center flex justify-center"><HandCoins />payments</li>
            <li className="items-center flex justify-center"><Users />applications</li>
        </ul>
      </div>
      </div>
      <div className="flex items-center justify-center gap-16 border p-1  ">

        <div className="-mt-6" id="notification-container">
            <BellIcon className=" "/>
            <Badge className=" " id="notification-counter"/>
        </div>
        <div className=" flex items-center justify-center " >
            <Image src="/atlassian-logo.png" width={30} height={10} alt="" className="rounded-full "/>
            <ArrowDownIcon/>


        </div>
      </div>
      {/* <div
        id="nav-link-div"
        className="lg:flex items-center hidden justify-center"
      >
        <ul className="flex items-center justify-center space-x-6 ">
          <Link className="hover:text-orange-600" href="/">
            Home
          </Link>
          <Link className="hover:text-orange-600" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-orange-600" href="/features">
            Features
          </Link>
          <Link className="hover:text-orange-600" href="/pricing">
            Pricing
          </Link>
          <Button className="rounded-full  bg-orange-400">
            Request Demo
            <Sparkles />
          </Button>
        </ul>
      </div> */}
      {/* <div className="flex lg:hidden items-center justify-center ">
        <Button className="rounded-full  bg-orange-400 m-1  ">
          Request Demo
          <Sparkles />
        </Button>
        <NavigationMenu />
      </div> */}
    </main>
  );
};

export default Nav;