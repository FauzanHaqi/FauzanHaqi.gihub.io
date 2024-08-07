import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Pricing from '@/components/Pricing';
import Rules from '@/components/Rules';
import Purchase from '@/components/Purchase';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Rules />
      <Purchase />
      <Pricing />
      <Contact />
    </div>
  );
}
