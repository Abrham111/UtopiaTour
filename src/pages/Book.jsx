import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  tourDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Please enter a valid date.',
  }),
  places: z.string().min(1, { message: 'Please select a place to visit.' }),
  groupSize: z.string().min(1, { message: 'Please select a group size.' }),
  specialRequests: z.string().optional(),
  paymentMethod: z.enum(['credit_card', 'paypal', 'bank_transfer'], {
    required_error: 'Please select a payment method.',
  }),
});

export default function BookTourForm() {
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {
    // Simulate a successful booking
    setSubmitMessage('Tour booked successfully!');
    reset();
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Fill the form and we will get back to you ASAP</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            id="name"
            {...register('name')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="places" className="block text-gray-700 text-sm font-bold mb-2">
            Place to Visit
          </label>
          <select
            id="places"
            {...register('Places')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a Place</option>
            <option value="bahirdar">Bahir Dar</option>
            <option value="lalibela">Lalibela</option>
            <option value="gondor">Gondor</option>
            <option value="semien">Semien</option>
            <option value="harer">Harer</option>
          </select>
          {errors.places && <p className="text-red-500 text-xs italic">{errors.places.message}</p>}
        </div>

        <div>
          <label htmlFor="tourDate" className="block text-gray-700 text-sm font-bold mb-2">
            Tour Date
          </label>
          <input
            id="tourDate"
            type="date"
            {...register('tourDate')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.tourDate && <p className="text-red-500 text-xs italic">{errors.tourDate.message}</p>}
        </div>

        <div>
          <label htmlFor="groupSize" className="block text-gray-700 text-sm font-bold mb-2">
            Group Size
          </label>
          <select
            id="groupSize"
            {...register('groupSize')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select group size</option>
            <option value="1-5">1-5 people</option>
            <option value="6-10">6-10 people</option>
            <option value="11-15">11-15 people</option>
            <option value="16+">16+ people</option>
          </select>
          {errors.groupSize && <p className="text-red-500 text-xs italic">{errors.groupSize.message}</p>}
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-gray-700 text-sm font-bold mb-2">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            {...register('specialRequests')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
          ></textarea>
        </div>

        <div>
          <span className="block text-gray-700 text-sm font-bold mb-2">Payment Method</span>
          <div className="space-y-2">
            {['credit_card', 'paypal', 'bank_transfer'].map((method) => (
              <label key={method} className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  value={method}
                  className="form-radio h-5 w-5 gap-3 text-blue-600"
                />
                <span className="mr-8 text-gray-700">
                  {method.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </label>
            ))}
          </div>
          {errors.paymentMethod && <p className="text-red-500 text-xs italic">{errors.paymentMethod.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Book Tour
          </button>
        </div>

        {submitMessage && (
          <p className={`text-sm ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  );
}