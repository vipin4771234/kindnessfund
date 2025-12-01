import { useState } from "react";

export default function DonationForm({ onDonate }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!amount) return;

    onDonate(Number(amount));

    setName("");
    setAmount("");
    setMessage("");
  };

  return (
    <form className="donation-form" onSubmit={submit}>
      <h3>Make a Donation</h3>

      <input
        type="text"
        placeholder="Your Name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Donation Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <textarea
        placeholder="Message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Donate Now</button>
    </form>
  );
}
