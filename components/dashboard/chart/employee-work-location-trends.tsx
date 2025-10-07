"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Jan",
    office: 78,
    work_from_home: 45,
  },
  {
    name: "Feb",
    office: 72,
    work_from_home: 48,
  },
  {
    name: "Mar",
    office: 88,
    work_from_home: 38,
  },
  {
    name: "Apr",
    office: 55,
    work_from_home: 50,
  },
  {
    name: "May",
    office: 46,
    work_from_home: 58,
  },
  {
    name: "Jun",
    office: 63,
    work_from_home: 37,
  },
  {
    name: "Jul",
    office: 58,
    work_from_home: 52,
  },
  {
    name: "Aug",
    office: 52,
    work_from_home: 58,
  },
  {
    name: "Sep",
    office: 47,
    work_from_home: 68,
  },
  {
    name: "Oct",
    office: 42,
    work_from_home: 46,
  },
  {
    name: "Nov",
    office: 56,
    work_from_home: 44,
  },
  {
    name: "Dec",
    office: 53,
    work_from_home: 49,
  },
];
const EmployeeWorkLocationTrends = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          formatter={(value, name) => {
            if (name === "work_from_home") {
              return [value, "Work from home"];
            } else if (name === "office") {
              return [value, "Office"];
            }
          }}
        />
        <Legend
          formatter={(value) => {
            if (value === "work_from_home") {
              return <div className="text-sm">Work from home</div>;
            } else if (value === "office") {
              return <div className="text-sm">Office</div>;
            }
          }}
        />
        <Bar dataKey="office" stackId="a" fill="#db2979" />
        <Bar dataKey="work_from_home" stackId="a" fill="#6b7280" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EmployeeWorkLocationTrends;
