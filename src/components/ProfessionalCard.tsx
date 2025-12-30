import Link from 'next/link';
import Image from 'next/image';
import { Professional } from '@/src/types';
import Rating from './Rating';

interface ProfessionalCardProps {
  professional: Professional;
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const dayNames: Record<string, string> = {
    monday: 'Seg',
    tuesday: 'Ter',
    wednesday: 'Qua',
    thursday: 'Qui',
    friday: 'Sex',
    saturday: 'Sáb',
    sunday: 'Dom',
  };

  return (
    <Link
      href={`/professionals/${professional.id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-56 w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          {professional.avatar ? (
            <Image
              src={professional.avatar}
              alt={professional.profession}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <svg
                className="h-20 w-20 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
        <div className="p-4 sm:p-6">
          <div className="mb-2 sm:mb-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{professional.name}</h3>
            <p className="text-xs sm:text-sm font-medium text-gray-500">{professional.profession}</p>
          </div>
          
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Rating rating={professional.averageRating} size="sm" />
            <span className="text-xs sm:text-sm text-gray-500">
              {professional.totalReviews} avaliações
            </span>
          </div>

          <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
            <p className="text-xs font-medium text-gray-400 mb-1">Preço médio</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              R$ {professional.averagePrice.toFixed(0)}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400 mb-2">Disponível em:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {professional.availableDays.map((day) => (
                <span
                  key={day}
                  className="inline-block rounded-lg bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-gray-700"
                >
                  {dayNames[day]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
