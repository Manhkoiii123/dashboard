import EmployeeWorkLocationTrends from "@/components/dashboard/chart/employee-work-location-trends";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
} from "lucide-react";

import Link from "next/link";

const EmployeesStat = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">100</div>
            </div>
            <div>
              <Button className="bg-pink-500 text-white hover:bg-pink-500 hover:text-white">
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <UserCheck2Icon />
              <div className="text-5xl font-bold">80</div>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-xs text-green-500 flex gap-1 items-center">
              <BadgeCheckIcon />
              80% of employees are present
            </span>
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Colin Murray!</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations, Colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-90 p-0 pt-4 pr-4">
          <EmployeeWorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeesStat;
