import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events`} id='event-card'>
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className='poster'
      />
      <p className='title'>{title}</p>
      <p className='slug'>{slug}</p>
      <p className='location'>{location}</p>
      <p className='date'>{date}</p>
      <p className='time'>{time}</p>
    </Link>
  );
};

export default EventCard;
