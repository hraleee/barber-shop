"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Login fallito");
        
      }
      setSuccess("Login effettuato!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Errore di rete");
      } else {
        setError("Errore di rete");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 font-[family-name:var(--font-geist-sans)] bg-[linear-gradient(120deg,_#1e3a8a_0%,_#fff_60%,_#b91c1c_100%)] bg-no-repeat bg-cover"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-5 w-full max-w-md bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-2 border-blue-900 items-center"
      >
        {/* Logo Barber Shop */}
        <a href="/" aria-label="Torna alla home" className="mb-2 block group">
          <svg
            className="w-24 h-24 drop-shadow-2xl group-hover:scale-110 group-hover:drop-shadow-[0_0_24px_rgba(185,28,28,0.5)] transition-transform"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="26" y="6" width="12" height="52" rx="6" fill="#fff" stroke="#1e3a8a" strokeWidth="3" />
            <rect x="26" y="6" width="12" height="52" rx="6" fill="url(#barber-stripes)" />
            <ellipse cx="32" cy="6" rx="6" ry="3" fill="#1e293b" />
            <ellipse cx="32" cy="58" rx="6" ry="3" fill="#1e293b" />
            <defs>
              <pattern id="barber-stripes" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                <rect x="0" y="0" width="6" height="12" fill="#b91c1c" />
                <rect x="6" y="0" width="6" height="12" fill="#1e3a8a" />
              </pattern>
            </defs>
          </svg>
        </a>
        <h2 className="text-3xl font-extrabold mb-2 text-center text-red-700 tracking-tight">Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="focus:ring-2 focus:ring-blue-900 border-blue-900 text-lg py-3 px-4 rounded-xl bg-white/80 shadow-sm"
        />
        <div className="flex flex-col gap-2 w-full">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="focus:ring-2 focus:ring-red-700 border-red-700 text-lg py-3 px-4 rounded-xl bg-white/80 shadow-sm"
          />
          <a href="#" className="text-sm text-blue-900 hover:underline self-end font-medium transition-colors">Password dimenticata?</a>
        </div>
        <button
          type="submit"
          className="bg-red-700 hover:bg-blue-900 text-white rounded-xl px-4 py-3 font-bold shadow-lg text-lg transition-colors disabled:opacity-60 w-full"
          disabled={loading}
        >
          {loading ? "Accesso..." : "Accedi"}
        </button>
        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
        {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
        <div className="mt-2 text-center w-full">
          <span className="text-gray-700">Non hai un account? </span>
          <a href="#" className="text-red-700 hover:underline font-semibold transition-colors">Registrati</a>
        </div>
      </form>
    </div>
  );
}
