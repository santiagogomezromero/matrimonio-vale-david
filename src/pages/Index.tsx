import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Placeholder sections - to be built */}
      <section id="schedule" className="min-h-screen flex items-center justify-center bg-muted">
        <h2 className="text-4xl font-display">Schedule Section</h2>
      </section>
      
      <section id="trip" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display">Trip Section</h2>
      </section>
      
      <section id="rsvp" className="min-h-screen flex items-center justify-center bg-muted">
        <h2 className="text-4xl font-display">RSVP Section</h2>
      </section>
      
      <section id="faq" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display">FAQ Section</h2>
      </section>
      
      <section id="gifts" className="min-h-screen flex items-center justify-center bg-muted">
        <h2 className="text-4xl font-display">Gifts Section</h2>
      </section>
      
      <section id="story" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-display">Our Story Section</h2>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-muted">
        <h2 className="text-4xl font-display">Contact Section</h2>
      </section>
    </div>
  );
};

export default Index;
