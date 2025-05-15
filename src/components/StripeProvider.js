// components/StripeProvider.jsx
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RIWCGPOQf4tlwz0g3osQ4QaVr7cbuYhoyCLLaDgcjnLtmVvR7iQT9Ww26ZFstLQhILxiWavmSEskyIbZB8LdnOO00WTZvMtBo'); // replace with your Stripe public key

const StripeProvider = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;
