"use client";
import { columns } from "@/components/dashboard/table/employees/column";
import { DataTable } from "@/components/ui/data-table";

const data = [
  {
    id: 1,
    firstName: "Minh",
    lastName: "Nguyen",
    teamName: "alpha",
    isTeamLeader: true,
  },
  {
    id: 2,
    firstName: "Anh",
    lastName: "Tran",
    teamName: "alpha",
    isTeamLeader: false,
  },
  {
    id: 3,
    firstName: "Tuan",
    lastName: "Le",
    teamName: "alpha",
    isTeamLeader: false,
  },
  {
    id: 4,
    firstName: "Lan",
    lastName: "Pham",
    teamName: "canary",
    isTeamLeader: true,
  },
  {
    id: 5,
    firstName: "Hoa",
    lastName: "Vu",
    teamName: "canary",
    isTeamLeader: false,
  },
  {
    id: 6,
    firstName: "Mai",
    lastName: "Do",
    teamName: "canary",
    isTeamLeader: false,
  },
  {
    id: 7,
    firstName: "Huy",
    lastName: "Pham",
    teamName: "delta",
    isTeamLeader: true,
  },
  {
    id: 8,
    firstName: "Nam",
    lastName: "Bui",
    teamName: "delta",
    isTeamLeader: false,
  },
  {
    id: 9,
    firstName: "Linh",
    lastName: "Hoang",
    teamName: "delta",
    isTeamLeader: false,
  },
];

const EmployeeTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default EmployeeTable;
