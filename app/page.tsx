'use client';

import { useState, useMemo } from 'react';
import { mockProfessionals } from '@/src/mocks/professionals';
import SearchBar from '@/src/components/SearchBar';
import ProfessionalCard from '@/src/components/ProfessionalCard';
import CategoryFilter from '@/src/components/CategoryFilter';
import Footer from '@/src/components/Footer';

const categories = [
  { id: 'fotografo', name: 'Fotografia', profession: 'Fotógrafo' },
  { id: 'marceneiro', name: 'Marcenaria', profession: 'Marceneiro' },
  { id: 'encanador', name: 'Encanamento', profession: 'Encanador' },
  { id: 'designer', name: 'Design de Interiores', profession: 'Designer de Interiores' },
  { id: 'eletricista', name: 'Elétrica', profession: 'Eletricista' },
  { id: 'limpeza', name: 'Limpeza', profession: 'Limpeza Profissional' },
  { id: 'pintor', name: 'Pintura', profession: 'Pintor' },
  { id: 'paisagista', name: 'Paisagismo', profession: 'Paisagista' },
  { id: 'pedreiro', name: 'Construção', profession: 'Pedreiro' },
  { id: 'montador', name: 'Montagem', profession: 'Montador de Móveis' },
  { id: 'ar-condicionado', name: 'Ar Condicionado', profession: 'Técnico de Ar Condicionado' },
  { id: 'vidraceiro', name: 'Vidraçaria', profession: 'Vidraceiro' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProfessionals = useMemo(() => {
    let filtered = mockProfessionals;

    // Filtro por categoria
    if (selectedCategory) {
      const category = categories.find((cat) => cat.id === selectedCategory);
      if (category) {
        filtered = filtered.filter((professional) => professional.profession === category.profession);
      }
    }

    // Filtro por busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (professional) =>
          professional.name.toLowerCase().includes(query) ||
          professional.profession.toLowerCase().includes(query) ||
          professional.location?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">HireUP</h1>
            <button className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wide border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Entrar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-6">
            Encontre o profissional perfeito para você
          </p>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Busque por serviço, profissional ou localização..."
          />
        </div>

        <div className="mb-10">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {filteredProfessionals.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg font-medium mb-2">Nenhum profissional encontrado</p>
            <p className="text-gray-400 text-sm">Tente buscar por outros termos ou selecione outra categoria</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 text-sm font-medium">
                {filteredProfessionals.length} {filteredProfessionals.length === 1 ? 'profissional' : 'profissionais'} encontrado{filteredProfessionals.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProfessionals.map((professional) => (
                <ProfessionalCard key={professional.id} professional={professional} />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
