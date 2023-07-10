import Commerce from '@chec/commerce.js';

const publicKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;

if (!publicKey) {
  throw new Error('Chec API public key not found. Please check your environment variables.');
}

// Create a new Commerce instance with your Chec API public key
export const commerce = new Commerce(publicKey, true);

