import Header from "../components/Header";
import Footer from "../components/Footer";
import DonationForm from "../components/DonationForm";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

export default function Home() {
  const [raised, setRaised] = useState(12000);
  const goal = 50000;

  const handleDonate = (amount) => {
    setRaised(raised + amount);
  };

  return (
    <div className="page-wrapper">
      <Header />

      <section className="hero">
        <h1>Support Our Mission</h1>
        <p>Your donation helps us change lives. Every contribution matters.</p>
      </section>

      <section className="stats-section">
        <h2>Donation Progress</h2>
        <ProgressBar raised={raised} goal={goal} />
        <p className="raised-text">₹{raised} raised of ₹{goal} goal</p>
      </section>

      <DonationForm onDonate={handleDonate} />

      <Footer />
    </div>
  );
}
