"use client";

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button
      type='button'
      id='explore-btn'
      className='mt-7 mx-auto'
      onClick={() => {}}
    >
      <a href='#events'>
        Explore Event
        <Image
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          width={24}
          height={24}
          style={{ width: "auto", height: "auto" }}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
