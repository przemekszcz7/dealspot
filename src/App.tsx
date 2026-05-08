/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  MessageCircle, 
  Tag, 
  Package, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Facebook
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://i.ibb.co/Wpj4VRpQ/671387266-122275564610185908-2497507846031793182-n-1.jpg";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61555577258793";
  const messengerUrl = "https://m.me/61555577258793"; // Messenger link derived from profile ID

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-200' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="DealSpot Logo" 
              className="w-10 h-10 rounded-lg shadow-md border border-neutral-200 object-cover"
              referrerPolicy="no-referrer"
            />
            <span className={`font-display font-bold text-xl tracking-tighter ${isScrolled ? 'text-neutral-900' : 'text-neutral-900 md:text-white'}`}>
              DealSpot
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#o-nas" className={`hover:text-red-500 transition-colors ${isScrolled ? 'text-neutral-600' : 'text-white/90'}`}>O nas</a>
            <a href="#oferta" className={`hover:text-red-500 transition-colors ${isScrolled ? 'text-neutral-600' : 'text-white/90'}`}>Oferta</a>
            <a href="#kontakt" className={`hover:text-red-500 transition-colors ${isScrolled ? 'text-neutral-600' : 'text-white/90'}`}>Kontakt</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+48577739206" 
              className="hidden sm:flex items-center gap-2 font-display font-bold text-red-600 bg-red-50 px-4 py-2 rounded-full border border-red-100 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>577 739 206</span>
            </a>
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all ${isScrolled ? 'bg-neutral-100 text-blue-600' : 'bg-white/20 text-white hover:bg-white/40'}`}
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop" 
            alt="Clothing background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600 text-white font-display font-bold py-1 px-4 rounded-full text-sm mb-6 uppercase tracking-wider animate-pulse">
              <ShieldCheck className="w-4 h-4" />
              <span>Najwyższa jakość w niskiej cenie</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-6">
              Hurtownia <br />
              <span className="text-red-500">Odzieży</span> <br className="hidden md:block" />
              Używanej
            </h1>
            
            <p className="text-xl text-neutral-300 mb-8 max-w-lg leading-relaxed">
              Dostarczamy starannie wyselekcjonowane ubrania w świetnym stanie. 
              Markowe rzeczy, które Twoi klienci pokochają. Idealne na dalszą sprzedaż.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={messengerUrl}
                className="group flex items-center gap-3 bg-red-600 text-white font-display font-bold text-lg px-8 py-4 rounded-2xl hover:bg-white hover:text-neutral-900 transition-all shadow-xl shadow-red-600/20"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Napisz na Messenger</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+48577739206"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-display font-bold text-lg px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń teraz</span>
              </a>
            </div>
          </motion.div>

          {/* Promo Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               {/* Decorative background circle */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32 transform opacity-50"></div>
               
               <div className="relative z-10 text-center md:text-left">
                  <div className="flex items-baseline gap-2 mb-2 justify-center md:justify-start">
                    <span className="text-red-600 font-display font-black text-3xl">🚨</span>
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-900 uppercase">MEGA OBNIŻKA!</h2>
                  </div>
                  <p className="text-neutral-500 font-medium mb-8">Nasza najlepsza cena w tym sezonie!</p>

                  <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                    <div className="relative">
                      <span className="absolute -top-4 left-0 text-xs font-bold text-neutral-400 uppercase tracking-widest">Było</span>
                      <div className="text-4xl font-display font-bold text-neutral-400 line-through decoration-red-600 decoration-4">
                        15 zł/kg
                      </div>
                    </div>
                    <ArrowRight className="hidden md:block w-8 h-8 text-neutral-200" />
                    <div className="relative">
                      <span className="absolute -top-4 left-0 text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 rounded">Jest tylko</span>
                      <div className="text-6xl md:text-7xl font-display font-extrabold text-red-600 tracking-tighter">
                        10 zł/kg
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-900 text-white p-6 rounded-3xl flex flex-col items-center justify-center mb-8">
                    <p className="text-neutral-400 text-sm font-semibold uppercase tracking-widest mb-1">Oferta ograniczona czasowo</p>
                    <p className="text-2xl font-display font-bold text-red-500">Tylko do 1 MAJA!</p>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3 text-neutral-600 font-medium italic">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <p>Wszystkie najlepsze rzeczy znikają pierwsze!</p>
                  </div>
               </div>
            </div>
            
            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-neutral-900 border-4 border-white text-white p-6 rounded-full shadow-xl rotate-12 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40">
              <span className="text-xs font-bold uppercase">Min.</span>
              <span className="text-3xl md:text-4xl font-black text-red-500">20 kg</span>
              <span className="text-xs font-medium uppercase">zamówienie</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="oferta" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Dlaczego warto wybrać DealSpot?</h2>
            <p className="text-xl text-neutral-500">Zapewniamy ciągłość dostaw dla Twojego lumpeksu lub butiku online.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Markowe Ubrania",
                desc: "W naszych paczkach znajdziesz rozpoznawalne, światowe marki poszukiwane przez klientów.",
                icon: Tag,
                color: "bg-red-50 text-red-600"
              },
              {
                title: "Świetny Stan",
                desc: "Każda sztuka przechodzi proces selekcji. Tylko ubrania w stanie idealnym lub bardzo dobrym.",
                icon: CheckCircle2,
                color: "bg-green-50 text-green-600"
              },
              {
                title: "Idealne na Sprzedaż",
                desc: "Przygotowane partie towaru gotowe do wystawienia na wieszaki lub do sprzedaży w social mediach.",
                icon: Star,
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                title: "Logistyka Hurtowa",
                desc: "Realizujemy zamówienia hurtowe już od 20 kg. Szybka wysyłka i profesjonalna obsługa.",
                icon: Package,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Wsparcie Biznesu",
                desc: "Dzielimy się wiedzą o tym, co sprzedaje się najlepiej w danym sezonie.",
                icon: ShieldCheck,
                color: "bg-purple-50 text-purple-600"
              },
              {
                title: "Rezerwacja Messenger",
                desc: "Najwygodniejszy sposób zamawiania. Napisz do nas bezpośrednio i zarezerwuj towar.",
                icon: MessageCircle,
                color: "bg-pink-50 text-pink-600"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-[2rem] border border-neutral-100 hover:border-red-100 hover:bg-neutral-50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Area */}
      <section id="kontakt" className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Simple patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-red-500 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Bądź pierwszy! <br />
              <span className="text-red-500">Zarezerwuj towar już teraz.</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12 italic">
              Najlepsze „perełki” odzieżowe znikają błyskawicznie. <br className="hidden md:block" />
              Napisz do nas na Messengerze, aby sprawdzić aktualną ofertę i zarezerwować kilogramy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={messengerUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-display font-black text-xl px-12 py-6 rounded-3xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-8 h-8" />
                <span>Napisz na Messenger</span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                   <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div className="text-left">
                  <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Szybki kontakt</p>
                  <p className="text-2xl font-display font-bold">+48 577 739 206</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <a 
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Odwiedź nas na Facebooku</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-neutral-100">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="DealSpot Logo" 
              className="w-8 h-8 rounded shadow-sm"
              referrerPolicy="no-referrer"
            />
            <p className="font-display font-black text-xl">DealSpot</p>
          </div>
          
          <p className="text-neutral-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} DealSpot Hurtownia Odzieży Używanej. Wszystkie prawa zastrzeżone.
          </p>
          
          <div className="flex items-center gap-6">
            <a href={facebookUrl} className="text-neutral-400 hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <div className="w-px h-6 bg-neutral-200"></div>
            <a href="tel:+48577739206" className="text-neutral-600 hover:text-neutral-900 font-bold transition-colors">
              +48 577 739 206
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
