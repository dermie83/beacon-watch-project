import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
    Legend,
  } from "recharts";

import { formatTimestampToDay, formatTimestampToNumericHour } from "@/app/lib/utils";

type HourlyGraphProps = {
  timestamp: number | undefined;
  iconCode?: number | undefined;
  maxTemp: number | undefined;
  feelsLike: number | undefined;
  windSpeed: number | undefined;
  precip: number | undefined;
};

export default function LineGraph({
  timestamp = 999,
  iconCode = 999,
  maxTemp = 31,
  feelsLike = 30,
  windSpeed = 19,
  precip = 0.1,
}: HourlyGraphProps) {

  const dayDate = formatTimestampToDay(timestamp);
  const hourDate = formatTimestampToNumericHour(timestamp);

  return (
    <div>
              <h2 className="text-xl font-bold mb-2 text-white">Temperature</h2>
              <div className="max-w-4xl w-full overflow-x-auto">
                <LineChart
                  width={100}
                  height={400}
                  data={[1,2,3]}
                >
                  <XAxis dataKey="hour" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="wind_spd" stroke="#8884d8" />
                  <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="rh" stroke="#dc34ac" />
                </LineChart>
              </div>
            </div>
  );}