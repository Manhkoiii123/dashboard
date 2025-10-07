import EmployeeTable from "@/components/dashboard/table/employees/employee-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Employees = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <EmployeeTable />
      </CardContent>
    </Card>
  );
};

export default Employees;
