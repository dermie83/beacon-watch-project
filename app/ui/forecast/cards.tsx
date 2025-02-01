// import {
//   BanknotesIcon,
//   ClockIcon,
//   UserGroupIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';
import { getWeather } from '@/app/lib/data';
import { lusitana } from '../fonts';

const lighthouses = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Hook',
    latitude: 52.1237453,
    longitude: -6.9293683,
    posix: [52.1237453,-6.9293683]

  },
  {
    id: '410544b8-4001-4271-9855-fec4b6a6442a',
    name: 'Muglins',
    latitude: 53.2755975,
    longitude: -6.0758683,
    posix: [53.2755975,-6.0758683]
  },
];


export default async function CardWrapper() {
  
  const {current,daily,hourly} = await getWeather(lighthouses[0].latitude, lighthouses[0].longitude, 'Europe/Berlin' );

  const dailyTemps = daily.map((item) => item.maxTemp);
  const feelsLikeTemps = hourly.map((item) => item.feelsLike);
  
  return (
      <div className={`flex flex-col items-center justify-center border border-foregroundColor rounded-md p-0.5`}>
        <Card title="Current" value={current.currentTemp} />
        <Card title="Tomorrows Temp" value={dailyTemps[1]} />
        <Card title="Feels Like Temp" value={feelsLikeTemps[0]} />
      </div>
    );
}

export function Card({
  title,
  value,
}: {
  title:string,
  value:number | string[]
}) {

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

