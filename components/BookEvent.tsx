"use client";

import React, { useState } from "react";

const BookEvent = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    setSubmitted(true);
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
