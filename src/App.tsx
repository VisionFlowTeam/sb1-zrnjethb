import React from 'react';
import { Palette, Code, Layout, Users, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/futuristic-chipset-processor-circuit-board-digital-transformation-blue-abstract-technology-background-innovative-tech-block-chain-artificial-intelligence-cloud-computing-concept-illustration-vector.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Kreatywne Studio</h1>
            <p className="text-xl md:text-2xl mb-8">Tworzymy wyjątkowe doświadczenia cyfrowe</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Rozpocznij Projekt
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Nasze Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Palette className="w-8 h-8" />}
            title="Projektowanie UI/UX"
            description="Intuicyjne i piękne interfejsy użytkownika"
          />
          <ServiceCard
            icon={<Code className="w-8 h-8" />}
            title="Development"
            description="Nowoczesne rozwiązania webowe"
          />
          <ServiceCard
            icon={<Layout className="w-8 h-8" />}
            title="Strony WWW"
            description="Responsywne strony internetowe"
          />
          <ServiceCard
            icon={<Users className="w-8 h-8" />}
            title="Konsultacje"
            description="Profesjonalne doradztwo"
          />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nasze Projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioItem
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              title="E-commerce"
              category="Web Design"
            />
            <PortfolioItem
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              title="Aplikacja Mobilna"
              category="UI/UX"
            />
            <PortfolioItem
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              title="System CRM"
              category="Development"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Rozpocznij Projekt</h2>
          <p className="text-gray-600 mb-8">Skontaktuj się z nami i omów swój projekt</p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            Kontakt <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PortfolioItem({ image, title, category }: { image: string; title: string; category: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}

export default App;