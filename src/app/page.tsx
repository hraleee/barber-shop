"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Profilo Dinamico",
    description:
      "Presenta il tuo talento con portfolio, certificazioni e feedback reali.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"
        />
      </svg>
    ),
  },
  {
    title: "Match Intelligente",
    description:
      "Algoritmi avanzati per trovare le offerte di lavoro o i talenti più adatti.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Networking Potenziato",
    description:
      "Costruisci connessioni strategiche con aziende e professionisti top.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "Profilo professionale base",
      "Accesso alle offerte di lavoro",
      "Connessioni limitate",
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: "€29 / mese",
    features: [
      "Profilo professionale completo",
      "Match intelligente avanzato",
      "Connessioni illimitate",
      "Supporto prioritario",
    ],
    highlight: true,
  },
  {
    title: "Aziende",
    price: "Contattaci",
    features: [
      "Ricerca talenti illimitata",
      "Gestione team e offerte",
      "Integrazioni personalizzate",
      "Account manager dedicato",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "Serve la prenotazione?",
    answer:
      "La prenotazione è consigliata per garantirti il servizio all'orario desiderato, ma accettiamo anche clienti senza appuntamento in base alla disponibilità.",
  },
  {
    question: "Quali prodotti utilizzate?",
    answer:
      "Utilizziamo solo prodotti professionali e di alta qualità, selezionati per la cura di barba e capelli.",
  },
  {
    question: "Fate anche tagli per bambini?",
    answer:
      "Certo! Offriamo tagli su misura anche per bambini e ragazzi, con la massima attenzione e professionalità.",
  },
  {
    question: "Posso acquistare prodotti in negozio?",
    answer:
      "Sì, nel nostro barber shop puoi acquistare i prodotti che utilizziamo durante i trattamenti per continuare la cura anche a casa.",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-red-900 via-blue-900 to-blue-700 text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            BARBER SHOP
          </h1>
          <p className="text-lg md:text-xl opacity-90 text-white">
            Tradizione, stile e cura per la tua barba e i tuoi capelli. Vivi l'esperienza autentica del barbiere di fiducia, dove ogni dettaglio conta.
          </p>
          <Button
            asChild
            className="mt-4 px-10 py-4 text-lg font-semibold rounded-lg bg-red-700 hover:bg-red-800 text-white shadow-lg border-0"
          >
            <a href="/login" aria-label="Prenota ora">
              Prenota ora
            </a>
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full max-w-md md:max-w-lg rounded-xl overflow-hidden shadow-lg border-4 border-white"
        >
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Barber Shop"
            width={800}
            height={600}
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Features */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-14 text-red-800"
        >
          I nostri punti di forza
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-700"
          >
            <div className="mb-6 flex justify-center">
              <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-700">Taglio su misura</h3>
            <p className="text-gray-700">Tagli personalizzati per ogni stile, eseguiti da barbieri esperti.</p>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900"
          >
            <div className="mb-6 flex justify-center">
              {/* Icona forbice da barbiere stilizzata */}
              <svg className="w-10 h-10 text-red-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l6 8M18 8l-6 8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Prodotti di qualità</h3>
            <p className="text-gray-700">Utilizziamo solo prodotti professionali per la cura di barba e capelli.</p>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-700"
          >
            <div className="mb-6 flex justify-center">
              <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-700">Esperienza rilassante</h3>
            <p className="text-gray-700">Ambiente accogliente e servizi pensati per il tuo relax e benessere.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-10 text-red-800"
        >
          BARBER SHOP
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-700">
          Scopri i nostri servizi professionali per la cura e lo stile di barba e capelli. Prenota ora il tuo trattamento personalizzato e vivi l'esperienza Barber Show!
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Card Servizi Barber Shop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="flex-1 max-w-xs md:max-w-sm flex flex-col bg-white rounded-2xl shadow-xl border-0 relative min-h-[420px] mx-auto"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-t-xl bg-red-700" />
            <Card className="flex flex-col flex-1 border-2 border-red-700 rounded-2xl pt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-700">Taglio Uomo</CardTitle>
                <p className="text-xl font-semibold text-blue-900">€20</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li>Taglio personalizzato secondo le ultime tendenze</li>
                  <li>Consulenza su stile e prodotti</li>
                  <li>Finish professionale</li>
                </ul>
              </CardContent>
              <div className="px-6 pb-6 mt-auto">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg" asChild>
                  <a href="/login" aria-label="Prenota Taglio Uomo">
                    Prenota ora
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex-1 max-w-xs md:max-w-sm flex flex-col bg-white rounded-2xl shadow-xl border-0 relative min-h-[420px] mx-auto"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-t-xl bg-blue-900" />
            <Card className="flex flex-col flex-1 border-2 border-blue-900 rounded-2xl pt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Rasatura Tradizionale</CardTitle>
                <p className="text-xl font-semibold text-red-700">€15</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li>Rasatura con panno caldo</li>
                  <li>Utilizzo di prodotti premium</li>
                  <li>Relax e cura della pelle</li>
                </ul>
              </CardContent>
              <div className="px-6 pb-6 mt-auto">
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg" asChild>
                  <a href="/login" aria-label="Prenota Rasatura">
                    Prenota ora
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 max-w-xs md:max-w-sm flex flex-col bg-white rounded-2xl shadow-xl border-0 relative min-h-[420px] mx-auto"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-t-xl bg-red-700" />
            <Card className="flex flex-col flex-1 border-2 border-red-700 rounded-2xl pt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-700">Trattamento Barba</CardTitle>
                <p className="text-xl font-semibold text-blue-900">€18</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li>Regolazione e modellatura barba</li>
                  <li>Oli e balsami nutrienti</li>
                  <li>Consigli per la cura quotidiana</li>
                </ul>
              </CardContent>
              <div className="px-6 pb-6 mt-auto">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg" asChild>
                  <a href="/login" aria-label="Prenota Trattamento Barba">
                    Prenota ora
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-12 text-blue-900 text-center"
        >
          Domande Frequenti
        </motion.h2>

        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-lg text-blue-900 font-semibold">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        © 2025 Barber Shop. Tutti i diritti riservati.
      </footer>
    </main>
  );
};

export default Home;
