import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileAudio, Clock, AlertTriangle, MapPin, Play } from "lucide-react";

type ViolenceCategory = "Physical violence" | "Economic violence" | "Sexual violence" | "Sexual Assault";

const israeliAddresses = [
  "123 Ben Yehuda St, Tel Aviv-Yafo, Israel",
  "45 King George St, Jerusalem, 9426117, Israel",
  "78 HaNassi Ave, Haifa, 3244103, Israel",
  "234 Herzl Blvd, Beer Sheva, 8424926, Israel",
  "567 Rothschild Blvd, Tel Aviv-Yafo, 6688312, Israel",
  "89 Dizengoff St, Tel Aviv-Yafo, 6433222, Israel",
  "12 Yad Harutzim St, Netanya, 4250412, Israel",
  "345 Weizmann St, Herzliya, 4635729, Israel",
  "678 Jabotinsky Rd, Ramat Gan, 5252378, Israel",
  "91 HaAtzmaut St, Ashdod, 7752101, Israel"
];

const getRandomAddress = () => {
  const randomIndex = Math.floor(Math.random() * israeliAddresses.length);
  return israeliAddresses[randomIndex];
};

const recordings = [
  {
    id: 1,
    date: "2024-03-10",
    time: "14:30",
    duration: "02:15",
    location: getRandomAddress(),
    category: "Physical violence" as ViolenceCategory
  },
  {
    id: 2,
    date: "2024-03-10",
    time: "16:45",
    duration: "01:30",
    location: getRandomAddress(),
    category: "Economic violence" as ViolenceCategory
  },
  {
    id: 3,
    date: "2024-03-09",
    time: "09:15",
    duration: "03:45",
    location: getRandomAddress(),
    category: "Sexual violence" as ViolenceCategory
  },
  {
    id: 4,
    date: "2024-03-09",
    time: "11:30",
    duration: "04:20",
    location: getRandomAddress(),
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
  const handlePlay = (id: number) => {
    console.log(`Playing recording ${id}`);
    // Add actual play functionality here when needed
  };

  return (
    <div className="container mx-auto p-4 pb-20 md:pb-4">
      <h1 className="text-2xl font-bold mb-6">Violence Events Recording</h1>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {recordings.map((recording) => (
            <Card key={recording.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <AlertTriangle className={`h-4 w-4 mr-2 ${getCategoryColor(recording.category)}`} />
                    <span className={getCategoryColor(recording.category)}>
                      {recording.category}
                    </span>
                  </div>
                </div>
                <FileAudio className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <div>{recording.date}</div>
                    <div>{recording.time}</div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-xs">{recording.location}</span>
                    </div>
                    <button
                      onClick={() => handlePlay(recording.id)}
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Play Recording
                    </button>
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