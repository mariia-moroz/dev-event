"use client";

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button type='button' id='explore-btn' className='mt-7 mx-auto' onClick={() => {}}>
      <a href='#events'>
        Explore Event
        <Image
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          width={24}
          height={24}
          className='h-[24px] w-[24px] shrink-0'
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
