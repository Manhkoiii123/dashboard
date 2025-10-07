"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MenuIcon,
  Settings,
  User,
  UserRound,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "universal-cookie";
const menu = [
  {
    label: "My dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard",
  },
  {
    label: "Teams",
    icon: <Users size={20} />,
    href: "/dashboard/teams",
  },
  {
    label: "Employees",
    icon: <User size={20} />,
    href: "/dashboard/employees",
  },
  {
    label: "Account",
    icon: <UserRound size={20} />,
    href: "/dashboard/account",
  },
  {
    label: "Settings",
    icon: <Settings size={20} />,
    href: "/dashboard/settings",
  },
];
const SidebarContent = ({ onClose }: { onClose?: () => void }) => {
  const pathname = usePathname();
  const cookies = new Cookies();
  const router = useRouter();
  const handleLogout = () => {
    console.log("logout");
    cookies.remove("isLoggedIn");
    cookies.remove("user");
    router.push("/sign-in");
  };
  return (
    <div className="p-4 pt-0 md:p-0 flex flex-col h-full">
      <header className="hidden md:flex border-b pb-4 items-center justify-center">
        <span className="flex items-center gap-4 text-2xl font-bold">
          <User size={40} /> SupportMe
        </span>
      </header>
      <div className="flex flex-col gap-4 mt-4 grow">
        {menu.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={cn(
              "flex items-center gap-4 px-4 py-2 rounded-md hover:bg-pink-200 transition-all duration-300",
              pathname === item.href &&
                "bg-pink-500 text-white hover:bg-pink-500 hover:text-white "
            )}
            onClick={onClose}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      <footer className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback className="bg-pink-300 ">MT</AvatarFallback>
          </Avatar>
          <button onClick={handleLogout} className="cursor-pointer">
            Logout
          </button>
        </div>
        <ModeToggle />
      </footer>
    </div>
  );
};
const Sidebar = () => {
  return (
    <>
      <div className=" p-4 flex-col hidden md:flex h-screen">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 flex md:hidden justify-between sticky top-0 left-0  border-b border-border">
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
          <SidebarContent onClose={() => setOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
