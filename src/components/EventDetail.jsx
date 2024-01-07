import React, { useState } from 'react';
import Carddata from '../constants/Carddata';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const EventDetail = () => {
  const { id } = useParams();
  const eventData = Carddata.find((event) => event.id === id);

  const [selectedTickets, setSelectedTickets] = useState(1);

  const handleTicketChange = (e) => {
    const selected = parseInt(e.target.value, 10);
    setSelectedTickets(selected);
  };

  if (!eventData) {
    return <h1 className='text-xl bg-black text-white'>Event not found</h1>;
  }

  const totalPrice = eventData.price * selectedTickets;

  const backgroundStyle = {
    backgroundImage: `url(${eventData.imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '600px',
    position: 'relative',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className='bg-black text-white p-8 pt-32 relative'
    >
      <div className='' style={backgroundStyle}>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30'></div>
        <h1 className='text-8xl mb-4 z-10 text-purple-500 font-bold'>{eventData.title}</h1>
        <h3 className='text-4xl mb-4 z-10 text-black font-bold'>{eventData.description}</h3>
      </div>
      <p className='text-lg mb-4 z-10'>Price per ticket: ${eventData.price}</p>
      <div className='mb-6 z-10'>
          <label className='mr-2 text-lg'>Select number of tickets:</label>
          <select
            value={selectedTickets}
            onChange={handleTicketChange}
            className='border rounded-md px-3 py-1 text-black font-mono'
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

      <div className='mb-6 relative z-10'>
        <label className='block text-lg mb-2'>Payment Information:</label>
        <input
          type='number'
          placeholder='Card Number'
          className="w-full ml-2 py-2 mb-4 px-3 rounded-md bg-white focus:ring focus:ring-purple-500 text-black font-mono text-xl"
        />
        <input
          type='text'
          placeholder='Name on Card'
          className="w-full ml-2 py-2 px-3 mb-4 rounded-md bg-white focus:ring focus:ring-purple-500 text-black font-mono text-xl"
        />
        <div className='flex justify-between mb-4'>
          <input
            type='month'
            id="start" name="start"
            min="2010-08" value="2024-01"
            placeholder='Expiry Date'
            className="w-full ml-2 py-2 px-3 mb-4 rounded-md bg-white focus:ring focus:ring-purple-500 text-black font-mono text-xl"
          />
          <input
            type='password'
            placeholder='CVV'
            className="w-full ml-2 py-2 px-3 mb-4 rounded-md bg-white focus:ring focus:ring-purple-500 text-black font-mono text-xl"
          />
        </div>
      </div>

      <p className='text-xl text-white font-mono mb-6 z-10 font-bold  '>Total Price: (in rupees) {totalPrice}</p>
    </motion.div>
  );
};

export default EventDetail;
