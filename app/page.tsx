import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Database,
  Dot,
  Edit2Icon,
  EyeIcon,
  MapPin,
  MessageSquare,
  Trash2Icon,
  UserCheck2Icon,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex ">
      <div className="mt-24 w-2/3 ">
        <ul className="flex  justify-start gap-8 ml-20  ">
          <li className="text-orange-500 ">
            Job preview <Separator className=" h-0.5 w-0.4 bg-orange-500" />
          </li>
          <li>Applicants </li>
          <li>Match</li>
          <li>Messages</li>
        </ul>
        <Separator />
        <div className="flex items-center justify-start ml-20 mt-10 ">
          <h1 className="text-3xl font-bold ">Senior Product Designer</h1>
          <span className="text-slate-700 text-sm flex items-center justify-center gap-4 ">
            <span className="flex items-center justify-center text-sm ">
              <Dot className="ml-1" />
              posted 2 days ago{" "}
            </span>

            <div className="bg-green-200 border border-green-500 rounded-full flex items-center justify-center px-2 text-md ">
              {" "}
              <Dot className="-ml-1 text-green-500 w-full  " />
              Open
            </div>
          </span>
        </div>
        <div>
          <ul className="flex justify-start ml-20 mt-5  ">
            <li className="flex justify-center ">
              <MapPin />
              Delaware,USA
            </li>
            <li>
              <Dot className="text-slate-500" />
            </li>
            <li className="flex justify-center ">
              <Database />
              300k-400k
            </li>
          </ul>
        </div>
        <Separator className="mt-3 " />

        <div className="flex items-center justify-start gap-8 ml-20 mt-4 ">
          <div className="w-1/4">
            skills Required
            <ul className="flex-col flex-col-1 justify-start space-y-2">
              <li className="flex items-center justify-start">
                <Image src="/figma.png" width={20} height={20} alt="" />
                Figma
              </li>
              <li className="flex items-center justify-start">
                <Image src="/illus.png" width={20} height={20} alt="" />
                Adobe Illustrator
              </li>
              <li className="flex items-center justify-start">
                <Image src="/xd.png" width={20} height={20} alt="" />
                Adobe Xd
              </li>
            </ul>
          </div>
          <div className="w-1/4 mb-12">
            preferred language
            <ul className="flex-col flex-col-1 ">
              <li>English</li>
            </ul>{" "}
          </div>
          <div className="w-1/4 mb-12">
            type{" "}
            <ul className="flex-col flex-col-1 ">
              <li>Full time</li>
            </ul>
          </div>
          <div className="w-1/4 mb-12">
            Years of Experience
            <ul className="flex-col flex-col-1 ">
              <li>3+ years of experience </li>
            </ul>{" "}
          </div>
        </div>
        <Separator />
        <div className="ml-20 font-light mt-5">
          <div className="text-md font-light ">About the job </div>
          <div>
            <ol type="1" className="">
              <li className="mt-1 ">Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related
                works
              </li>
            </ol>
            Benefits:
            <ul id="hehe">
              <li>Health Insurance</li>
              <li>Provident Fund</li>
            </ul>
            Schedule:
            <ul id="hehe">
              <li>Day Shift</li>
            </ul>
            Supplemental pay types::
            <ul id="hehe">
              <li>Performance bonus</li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-start ml-20 gap-5 mt-5  ">
          <Image
            src="/atlassian-logo.png"
            width={50}
            height={50}
            alt=""
            className=" rounded-md  "
          />
          Atlassian{" "}
          <Button className="text-blue-800 rounded-xl  shadow-lg   bg-blue-300   ">
            follow
          </Button>
        </div>
        <div className="ml-20 flex items-center justify-start mt-5 ">
          <div className="w-1/2 ">
            <span className="font-extralight">Company size</span>
            <ul>
              <li className="font-medium ">1k-2k Employees</li>
            </ul>
            <span className="font-extralight">Sector</span>
            <ul>
              <li className="font-medium ">
                Information Technology, Infrastructure
              </li>
            </ul>
            <span className="font-extralight">Founded in</span>
            <ul>
              <li className="font-medium ">2019</li>
            </ul>
          </div>
          <div className="w-1/2">
            <span className="font-extralight">Type</span>
            <ul>
              <li className="font-medium ">Private</li>
            </ul>
            <span className="font-extralight">Funding</span>
            <ul>
              <li className="font-medium ">Bootstraped</li>
            </ul>
            <span className="font-extralight">Founded by</span>
            <ul>
              <li className="font-medium ">
                Scott Farquahar, Mike Cannon-Brookes
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link
            href="www.google.com"
            className="hover:text-blue-500 underline ml-20 font-light mt-2 "
          >
            Report this listing
          </Link>
        </div>
      </div>
      <div className="w-0.5 bg-gray-300"></div> {/* Vertical rule */}
      <div className="w-1/3 mt-24 ">
        <div className="flex items-center justify-center  space-x-6 ">
          <Button className="bg-red-300  text-red-500 ">
            <Trash2Icon />
            Delete this Job
          </Button>
          <Button className="bg-red-500  text-white ">
            <Edit2Icon />
            Edit this Job
          </Button>
        </div>
        <div className="mt-10 text-xl space-y-5  ">
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-start">
              <Users />
              Applicants
            </div>

            <div>400</div>
          </div>
          <Separator />
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-start">
              <UserCheck2Icon />
              Matches
            </div>
            <div>100</div>
          </div>
          <Separator />
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-start">
              <MessageSquare />
              Messages
            </div>
            <div>147</div>
          </div>
          <Separator />
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-start">
              <EyeIcon />
              Views
            </div>
            <div>800</div>
          </div>
        </div>
        <div className="rounded-2xl shadow-2xl p-3 m-10 ">
        &quot;A quote from Atlassian".&quot;
          <div className="flex items-center space-x-5 justify-start">
            <Image
              src="/quote.png"
              width={40}
              height={40}
              alt="quote"
              className="mt-10 rounded-full "
            />
            <div className="flex flex-col mt-8 ">
              Name<span className="font-light ">description</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
