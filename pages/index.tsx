import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(0);
  const [email, setEmail] = useState("");

  const addToCart = () => setCart(cart + 1);
  const handleSubscribe = () => {
    alert("Grazie per esserti iscritto alla newsletter!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4">
      <Head>
        <title>FicoLux - Olio di Fico d'India</title>
        <meta name="description" content="Scopri l'olio puro di fico d'India biologico per viso, corpo e capelli. Spedizione veloce in tutta Europa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-4 shadow-md bg-white rounded-2xl">
        <h1 className="text-2xl font-bold text-green-900">FicoLux - Olio di Fico d'India</h1>
        <div className="flex items-center gap-6">
          <span className="material-icons text-green-700">person</span>
          <span className="material-icons text-green-700">shopping_cart</span>
          <span className="text-green-900 font-medium">{cart}</span>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="rounded-2xl shadow-lg bg-white">
          <img src="/images/olio-fico.jpg" alt="Olio di fico d'india" className="w-full h-80 object-cover rounded-t-2xl" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Olio Puro di Fico d'India Bio</h2>
            <p className="text-green-700 text-sm mb-4">
              Rigenerante, antiossidante, 100% naturale. Estratto a freddo dai semi di fico d'India. Ideale per viso, corpo e capelli.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-900">€29.90</span>
              <button onClick={addToCart} className="bg-green-700 text-white hover:bg-green-800 rounded-xl px-4 py-2">Aggiungi al carrello</button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl shadow-md bg-white p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Benefici</h3>
          <ul className="list-disc pl-6 text-green-700 text-sm space-y-1">
            <li>Altissimo contenuto di vitamina E e acidi grassi essenziali</li>
            <li>Combatte i radicali liberi e l'invecchiamento</li>
            <li>Lenisce e idrata pelli sensibili o mature</li>
            <li>Assorbimento rapido senza effetto unto</li>
            <li>Ideale per trattamenti anti-età</li>
          </ul>
        </div>
      </main>

      <section className="bg-white rounded-2xl shadow-lg p-6 mt-12">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Iscriviti alla newsletter</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="email" placeholder="Inserisci la tua email" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl p-2 border" />
          <button onClick={handleSubscribe} className="bg-green-700 text-white hover:bg-green-800 rounded-xl px-4 py-2">Iscriviti</button>
        </div>
      </section>

      <section className="mt-12 bg-green-100 p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold text-green-800 mb-2">FAQ</h3>
        <ul className="text-green-700 text-sm space-y-2">
          <li><strong>Quanto dura il prodotto?</strong> Circa 12 mesi dall'apertura.</li>
          <li><strong>È adatto a tutti i tipi di pelle?</strong> Sì, anche per pelli sensibili.</li>
          <li><strong>Effettuate spedizioni internazionali?</strong> Sì, in tutta Europa.</li>
        </ul>
      </section>

      <footer className="text-center mt-12 text-green-800 text-sm">
        &copy; 2025 FicoLux. Tutti i diritti riservati. | info@ficolux.com | Assistenza
      </footer>
    </div>
  );
}
