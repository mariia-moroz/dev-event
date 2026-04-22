"use client";

import { createBooking } from "@/lib/actions/booking.action";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const { success, emailUsed } = await createBooking({ eventId, email, slug });

    setEmail("");

    if (emailUsed) {
      showToast.error("Email is already registered, please use different!", {
        duration: 3000,
        position: "top-center",
        transition: "bounceIn",
        // icon: "🚀",
        progress: false,
      });
      console.error("Email is already registered");
      return;
    }

    if (success) {
      setSubmitted(true);
      router.refresh();
    } else {
      console.error("Booking creation failed");
    }
  };

  return (
    <div id='book-event'>
      {submitted ? (
        <p className='text-sm'>Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email address'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <button type='submit' className='button-submit'>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
