import { ResponsiveLine } from "@nivo/line";
import pi from "./Pi";

const data = [
  {
    id: "pi",
    color: "hsl(155, 70%, 50%)",
    data: pi,
  },
];

function App() {
  return (
    <div>
      <div className="wrapper">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisBottom={null}
          axisRight={null}
          enableGridX={false}
          colors={{ scheme: "category10" }}
        />
      </div>
    </div>
  );
}

export default App;
