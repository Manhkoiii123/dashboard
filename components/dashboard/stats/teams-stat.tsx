"use client";
import SupportTicketsResolved from "@/components/dashboard/chart/support-tickets-resolved";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, PieChartIcon, StarIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
const teamLeaders = [
  {
    firstName: "Minh",
    lastName: "Nguyen",
  },
  {
    firstName: "Anh",
    lastName: "Tran",
  },
  {
    firstName: "Tuan",
    lastName: "Le",
  },
  {
    firstName: "Lan",
    lastName: "Pham",
  },
  {
    firstName: "Hoa",
    lastName: "Vu",
  },
  {
    firstName: "Mai",
    lastName: "Do",
  },
  {
    firstName: "An",
    lastName: "Bui",
  },
  {
    firstName: "Huy",
    lastName: "Pham",
  },
  {
    firstName: "Linh",
    lastName: "Hoang",
  },
];

const dataChart = [
  {
    name: "Hà Nội",
    value: 28,
    color: "#ef4444",
  },
  {
    name: "Đà Nẵng",
    value: 22,
    color: "#3b82f6",
  },
  {
    name: "Hồ Chí Minh",
    value: 30,
    color: "#22c55e",
  },
  {
    name: "Cần Thơ",
    value: 14,
    color: "#eab308",
  },
  {
    name: "Hải Phòng",
    value: 18,
    color: "#a855f7",
  },
  {
    name: "Nha Trang",
    value: 12,
    color: "#f97316",
  },
  {
    name: "Huế",
    value: 10,
    color: "#06b6d4",
  },
];

const TeamsStat = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button className="bg-pink-500 text-white hover:bg-pink-500 hover:text-white">
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <RechartsTooltip />
                <Pie data={dataChart} dataKey="value" nameKey="name">
                  {dataChart.map((i, index) => (
                    <Cell key={index} fill={i.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Check />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-90 p-0 pt-4 pr-4">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamsStat;
