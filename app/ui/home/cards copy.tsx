// import {
//   BanknotesIcon,
//   ClockIcon,
//   UserGroupIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';
import { getWeather } from '@/app/lib/data';

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
  console.log("current weather...",current);
  console.log("first daily reading...",daily[0]);
  console.log("first hourly reading...",hourly[0])
  return (
      <div className={`flex flex-col items-center justify-center border border-foregroundColor rounded-md p-0.5`}>
      </div>
    );
}

