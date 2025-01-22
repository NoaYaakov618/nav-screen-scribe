import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileAudio, Clock, AlertTriangle } from "lucide-react";

type ViolenceCategory = "Physical violence" | "Economic violence" | "Sexual violence" | "Sexual Assault";

// Mock data for demonstration
const recordings = [
  {
    id: 1,
    date: "2024-03-10",
    time: "14:30",
    duration: "02:15",
    title: "Physical violence",
    category: "Physical violence" as ViolenceCategory
  },
  {
    id: 2,
    date: "2024-03-10",
    time: "16:45",
    duration: "01:30",
    title: "Economic violence",
    category: "Economic violence" as ViolenceCategory
  },
  {
    id: 3,
    date: "2024-03-09",
    time: "09:15",
    duration: "03:45",
    title: "Sexual violence",
    category: "Sexual violence" as ViolenceCategory
  },
  {
    id: 4,
    date: "2024-03-09",
    time: "11:30",
    duration: "04:20",
    title: "Sexual Assault",
    category: "Sexual Assault" as ViolenceCategory
  }
];

const getCategoryColor = (category: ViolenceCategory) => {
  switch (category) {
    case "Physical violence":
      return "text-red-500";
    case "Economic violence":
      return "text-yellow-500";
    case "Sexual violence":
      return "text-purple-500";
    case "Sexual Assault":
      return "text-pink-500";
    default:
      return "text-gray-500";
  }
};

const Reports = () => {
  return (
    <div className="container mx-auto p-4 pb-20 md:pb-4">
      <h1 className="text-2xl font-bold mb-6">Recording History</h1>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {recordings.map((recording) => (
            <Card key={recording.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-medium">{recording.title}</CardTitle>
                  <div className="flex items-center mt-1">
                    <AlertTriangle className={`h-4 w-4 mr-2 ${getCategoryColor(recording.category)}`} />
                    <span className={`text-sm ${getCategoryColor(recording.category)}`}>
                      {recording.category}
                    </span>
                  </div>
                </div>
                <FileAudio className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div>
                    <div>{recording.date}</div>
                    <div>{recording.time}</div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {recording.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Reports;