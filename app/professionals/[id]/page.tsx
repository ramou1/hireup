'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockProfessionals } from '@/src/mocks/professionals';
import Rating from '@/src/components/Rating';
import ReviewCard from '@/src/components/ReviewCard';
import DatePicker from '@/src/components/DatePicker';
import Button from '@/src/components/Button';
import Footer from '@/src/components/Footer';
import LoginModal from '@/src/components/LoginModal';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProfessionalPage({ params }: PageProps) {
  const { id } = use(params);
  const professional = mockProfessionals.find((p) => p.id === id);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [requestSent, setRequestSent] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  if (!professional) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profissional não encontrado</h1>
          <Link href="/" className="text-gray-900 hover:underline font-medium">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  const dayNames: Record<string, string> = {
    monday: 'Segunda-feira',
    tuesday: 'Terça-feira',
    wednesday: 'Quarta-feira',
    thursday: 'Quinta-feira',
    friday: 'Sexta-feira',
    saturday: 'Sábado',
    sunday: 'Domingo',
  };

  const handleRequestService = () => {
    if (!selectedDate) {
      alert('Por favor, selecione uma data disponível');
      return;
    }
    setRequestSent(true);
    setTimeout(() => {
      setShowTipModal(true);
    }, 2000);
  };

  const handleSendTip = () => {
    alert('Gorjeta enviada com sucesso! Obrigado pelo seu gesto.');
    setShowTipModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#011a5a] border-b border-[#010f3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo-hireup.png"
                alt="HireUP"
                width={220}
                height={110}
                className="h-14 sm:h-20 w-auto"
                priority
              />
            </Link>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white uppercase tracking-wide border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Entrar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1">
        <Link href="/" className="inline-flex items-center text-[#011a5a] hover:text-[#010f3d] font-medium transition-colors mb-4 sm:mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </Link>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6 sm:mb-8">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="relative h-64 sm:h-80 md:h-full w-full bg-gradient-to-br from-gray-50 to-gray-100">
                {professional.avatar ? (
                  <Image
                    src={professional.avatar}
                    alt={professional.profession}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <svg className="h-32 w-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <div className="md:w-3/5 p-4 sm:p-8 md:p-10">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">{professional.name}</h1>
                <p className="text-base sm:text-lg text-gray-600 font-medium">{professional.profession}</p>
                {professional.location && (
                  <div className="flex items-center mt-2 text-gray-500">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{professional.location}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Rating rating={professional.averageRating} showNumber size="md" />
                <span className="text-gray-600 text-xs sm:text-sm">
                  {professional.totalReviews} avaliações
                </span>
              </div>

              <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Preço médio</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  R$ {professional.averagePrice.toFixed(0)}
                </p>
              </div>

              {professional.bio && (
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2 sm:mb-3">Sobre</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{professional.bio}</p>
                </div>
              )}

              <div>
                <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2 sm:mb-3">Dias disponíveis</h2>
                <div className="flex flex-wrap gap-2">
                  {professional.availableDays.map((day) => (
                    <span
                      key={day}
                      className="inline-block rounded-xl bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {dayNames[day]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-8">
            <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4 sm:mb-6">Solicitar Serviço</h2>
            
            {requestSent ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 font-semibold">
                    Solicitação enviada com sucesso!
                  </p>
                </div>
                <p className="text-green-700 text-sm">
                  {professional.name} pode retornar em até 24h–48h.
                </p>
              </div>
            ) : (
              <>
                <DatePicker
                  availableDays={professional.availableDays}
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                />

                <div className="mt-6">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#011a5a] focus:border-transparent text-gray-900 placeholder-gray-400 bg-white resize-none transition-all"
                    placeholder="Descreva o serviço que você precisa..."
                  />
                </div>

                <div className="mt-6">
                  <Button
                    onClick={handleRequestService}
                    disabled={!selectedDate}
                    className="w-full"
                  >
                    Enviar Solicitação
                  </Button>
                </div>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  O profissional pode retornar em até 24h–48h
                </p>
              </>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-8">
            <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4 sm:mb-6">
              Avaliações ({professional.reviews.length})
            </h2>
            <div>
              {professional.reviews.length === 0 ? (
                <p className="text-gray-500 text-center py-12">
                  Ainda não há avaliações para este profissional.
                </p>
              ) : (
                professional.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {showTipModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-full border border-gray-100">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Enviar Gorjeta
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              O serviço foi concluído com sucesso! Gostaria de enviar uma gorjeta para{' '}
              <span className="font-semibold">{professional.name}</span>?
            </p>
            <div className="flex gap-3">
              <Button
                onClick={handleSendTip}
                className="flex-1"
              >
                Enviar Gorjeta
              </Button>
              <Button
                onClick={() => setShowTipModal(false)}
                variant="outline"
                className="flex-1"
              >
                Depois
              </Button>
            </div>
          </div>
        </div>
      )}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      <Footer />
    </div>
  );
}
