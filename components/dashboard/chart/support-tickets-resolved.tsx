"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    delta: 320,
    alpha: 250,
    canary: 290,
  },
  {
    name: "Feb",
    delta: 370,
    alpha: 310,
    canary: 260,
  },
  {
    name: "Mar",
    delta: 285,
    alpha: 395,
    canary: 310,
  },
  {
    name: "Apr",
    delta: 340,
    alpha: 275,
    canary: 215,
  },
  {
    name: "May",
    delta: 390,
    alpha: 345,
    canary: 280,
  },
  {
    name: "Jun",
    delta: 210,
    alpha: 240,
    canary: 225,
  },
  {
    name: "Jul",
    delta: 355,
    alpha: 380,
    canary: 300,
  },
  {
    name: "Aug",
    delta: 290,
    alpha: 265,
    canary: 335,
  },
  {
    name: "Sep",
    delta: 370,
    alpha: 325,
    canary: 250,
  },
  {
    name: "Oct",
    delta: 315,
    alpha: 360,
    canary: 295,
  },
  {
    name: "Nov",
    delta: 285,
    alpha: 215,
    canary: 345,
  },
  {
    name: "Dec",
    delta: 400,
    alpha: 290,
    canary: 275,
  },
];

const SupportTicketsResolved = () => {
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="alpha" stroke="#3b82f6" />
        <Line type="monotone" dataKey="canary" stroke="#f97316" />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SupportTicketsResolved;
