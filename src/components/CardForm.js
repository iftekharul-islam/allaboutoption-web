// src/components/AddCardModal.jsx
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CardForm = ({ isOpen, onClose, clientSecret, onComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError('');

    const cardElement = elements.getElement(CardElement);

    const { setupIntent, error } = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name', // Ideally dynamic
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      onComplete(setupIntent);
      onClose(); // Close modal if successful
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-lg shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-600 text-xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Add a Payment Method</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardElement className="border rounded p-3" />
          <p className="text-sm text-gray-600">
            By providing your card information, you allow <strong>IAATO</strong> to charge your card for future payments in accordance with their <a href="/terms" className="underline">terms</a>.
          </p>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading || !stripe}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Set up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
