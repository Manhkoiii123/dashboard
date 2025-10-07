import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => {
      const firstName: string = row.getValue("firstName");
      const lastName: string = row.getValue("lastName");

      return (
        <Avatar>
          <AvatarFallback className="uppercase">
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: "First name",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "isTeamLeader",
    header: "",
    cell: ({ row }) => {
      const isTeamLeader: boolean = row.getValue("isTeamLeader");
      return isTeamLeader ? <Badge variant="success">Team leader</Badge> : null;
    },
  },
];
