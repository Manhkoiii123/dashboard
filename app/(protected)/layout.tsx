import Sidebar, { MobileSidebar } from "@/components/dashboard/sidebar/Sidebar";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const user = cookieStore.get("user")?.value;
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="md:w-[250px] w-full">
        <Sidebar />
        <MobileSidebar />
      </div>
      <div className="p-4">
        <h1 className="pb-4">Welcome back, {user}!</h1>
        {children}
      </div>
    </div>
  );
}
