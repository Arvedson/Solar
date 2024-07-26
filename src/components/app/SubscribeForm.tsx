// src/components/SubscribeForm.tsx
import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(`Failed to subscribe: ${errorData.error}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center gap-2">
      <input
        type="email"
        placeholder="Tu correo electrónico"
        className="p-2 border border-gray-300 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="p-2 bg-gray-700 text-white rounded-md hover:bg-black" type="submit">
        Suscribirse
      </button>
      {message && <p className="text-sm text-gray-700 mt-2 md:mt-0">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
