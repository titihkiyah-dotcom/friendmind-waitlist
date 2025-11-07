
import React, { useState } from 'react'
const WAITLIST_ENDPOINT = "https://script.google.com/macros/s/AKfycbzkmihItBBe2WfCqLmONGwsKBxxTCBtltTX2n2mJFM9av_wiX4OZ5ILXd_1T3boAAgm5g/exec";
export default function FriendMindLanding() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  async function submit(e) {
    e.preventDefault();
    setStatus('Sending...');
    await fetch(WAITLIST_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: { "Content-Type": "application/json" }
    });
    setStatus('✅ Added to waitlist');
    setEmail(''); setName('');
  }
  return (<div className="min-h-screen flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-indigo-700 via-violet-600 to-blue-600 text-white">
    <h1 className="text-4xl font-bold mb-6">FriendMind</h1>
    <form onSubmit={submit} className="flex flex-col gap-3 w-full max-w-sm">
      <input className="p-3 text-black rounded" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
      <input className="p-3 text-black rounded" type="email" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <button className="p-3 bg-yellow-300 text-black font-bold rounded">Join Waitlist</button>
    </form>
    <p className="mt-4">{status}</p></div>);
}
