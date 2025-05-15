// src/components/CardForm.jsx
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CardForm = ({ clientSecret, onComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const card = elements.getElement(CardElement);

    const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: 'Customer Name', // Replace with real name
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      onComplete(setupIntent);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded space-y-4 text-white">
      <CardElement className="bg-gray-700 p-3 rounded" />
      {error && <p className="text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Confirm Payment"}
      </button>
    </form>
  );
};

export default CardForm;
