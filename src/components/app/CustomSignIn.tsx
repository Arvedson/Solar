"use client";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CustomSignIn = () => {
  const { isLoaded, signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signIn) {
      console.error("SignIn object is not available.");
      setError("Failed to sign in");
      return;
    }
    try {
      console.log("Attempting to sign in with:", { email, password });
      const createdSessionId = await signIn.create({
        identifier: email,
        password,
      });
      console.log("Sign in successful. Session ID:", createdSessionId);
      setSuccess("Has iniciado sesión con éxito");
      setError("");
      setTimeout(() => {
        router.push("/admin2");
      }, 3000); // Redirigir después de 3 segundos para dar tiempo de ver el mensaje
    } catch (err) {
      console.error("Error during sign in:", err);
      setError("Failed to sign in");
      setSuccess("");
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default CustomSignIn;
