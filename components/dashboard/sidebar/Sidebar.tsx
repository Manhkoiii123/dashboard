"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon, User } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  return (
    <>
      <div className=" p-4 flex-col hidden md:flex">
        <header className=" border-b  pb-4 items-center justify-center">
          <h4 className="flex items-center gap-4">
            <User size={40} /> SupportMe
          </h4>
        </header>
      </div>
    </>
  );
};

export default Sidebar;

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 flex justify-between md:hidden sticky top-0 left-0  border-b border-border">
      <h4 className="flex items-center gap-4">
        <User size={40} /> SupportMe
      </h4>
      <Drawer
        direction="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpenChange={(open) => setOpen(open)}
      >
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <Sidebar />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
