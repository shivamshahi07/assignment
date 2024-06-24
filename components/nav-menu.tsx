import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, Sparkles } from "lucide-react";
import Link from "next/link";
// import { navItems } from "./nav-items";
// import { SocialItems } from "../../ui/dropdown/social-items";
// import { link } from "fs";

export function NavigationMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent border-none rounded-xl "
          size={"icon"}
        >
          <MenuIcon className="h-5 w-5 justify-center flex  items-center" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="w-full flex flex-col items-center text-center">
            <DrawerTitle>Preloop</DrawerTitle>
            <DrawerDescription className="mt-8 "></DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-16 space-y-4 ">
            <div className="flex flex-col items-center justify-center space-y-6  text-lg">

            <Link className="hover:text-orange-600" href="/">Home</Link>
                    <Link className="hover:text-orange-600" href="/contact">Contact</Link>
                    <Link className="hover:text-orange-600" href="/features">Features</Link>
                    <Link className="hover:text-orange-600" href="/pricing">Pricing</Link>
                    
              {/* {navItems.map((item) => {
                return (
                  <Button
                    key={item.id}
                    className="space-x-1 hover:no-underline hover:text-blue-500"
                    variant={"link"}
                    size={"lg"}
                    asChild
                  >
                    <DrawerClose asChild>
                      <Link href={item.source}>{item.name}</Link>
                    </DrawerClose>
                  </Button>
                );
              })} */}
              {/* <div>
                Socials come here 
                
                {/* {SocialItems.map((items) => {
                  return (
                    <Button
                      key={items.id}
                      className=" hover:text-blue-500"
                      variant={"link"}
                    >
                      <Link
                        href={items.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {items.icon}
                      </Link>
                    </Button>
                  );
                })} */}
              {/* </div>
              <div>(in progress)</div> */} 

              <Button size={"lg"} variant={"link"} asChild>
                <DrawerClose>
                  <Link href={""}></Link>
                </DrawerClose>
              </Button>
            </div>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
