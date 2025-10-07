import EmployeesStat from "@/components/dashboard/stats/employees-stat";
import TeamsStat from "@/components/dashboard/stats/teams-stat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStat />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStat />
      </TabsContent>
    </Tabs>
  );
};

export default Dashboard;
