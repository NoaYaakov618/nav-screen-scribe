import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileAudio, Clock } from "lucide-react";

// Mock data for demonstration
const recordings = [
  {
    id: 1,
    date: "2024-03-10",
    time: "14:30",
    duration: "02:15",
    title: "Voice Note 1"
  },
  {
    id: 2,
    date: "2024-03-10",
    time: "16:45",
    duration: "01:30",
    title: "Voice Note 2"
  },
  {
    id: 3,
    date: "2024-03-09",
    time: "09:15",
    duration: "03:45",
    title: "Voice Note 3"
  }
];

const Reports = () => {
  return (
    <div className="container mx-auto p-4 pb-20 md:pb-4">
      <h1 className="text-2xl font-bold mb-6">Recording History</h1>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {recordings.map((recording) => (
            <Card key={recording.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">{recording.title}</CardTitle>
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