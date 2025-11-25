import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Schedule } from '@/components/Schedule';
import { Trip } from '@/components/Trip';
import { Accommodation } from '@/components/Accommodation';
import { RSVP } from '@/components/RSVP';
import { FAQ } from '@/components/FAQ';
import { Gifts } from '@/components/Gifts';
import { Story } from '@/components/Story';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Schedule />
      <Trip />
      <Accommodation />
      <RSVP />
      <FAQ />
      <Gifts />
      <Story />
      <Contact />
    </div>
  );
};

export default Index;
