import Image from "next/image";
const EventDetailsItem = ({ icon, alt, label }: { icon: string; alt: string; label: string }) => {
  return (
    <div className='flex-row-gap-2 items-center'>
      <Image src={icon} alt={alt} width={17} height={17} style={{ height: "auto", width: "auto" }} />
      <p>{label}</p>
    </div>
  );
};

export default EventDetailsItem;
