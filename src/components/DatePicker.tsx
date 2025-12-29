'use client';

import { DayOfWeek } from '@/src/types';
import { useState, useEffect } from 'react';

interface DatePickerProps {
  availableDays: DayOfWeek[];
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

const dayNames: Record<DayOfWeek, string> = {
  monday: 'Segunda-feira',
  tuesday: 'Terça-feira',
  wednesday: 'Quarta-feira',
  thursday: 'Quinta-feira',
  friday: 'Sexta-feira',
  saturday: 'Sábado',
  sunday: 'Domingo',
};

const dayNumberMap: Record<DayOfWeek, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

export default function DatePicker({ availableDays, selectedDate, onDateSelect }: DatePickerProps) {
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  useEffect(() => {
    const dates: string[] = [];
    const today = new Date();
    const dayNumbers = availableDays.map((day) => dayNumberMap[day]);

    // Gera próximas 4 semanas
    for (let i = 0; i < 28; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();

      if (dayNumbers.includes(dayOfWeek)) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }

    setAvailableDates(dates);
  }, [availableDays]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
        Selecione uma data disponível
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2">
        {availableDates.length === 0 ? (
          <p className="text-gray-500 text-sm">Nenhuma data disponível</p>
        ) : (
          availableDates.map((date) => (
            <button
              key={date}
              type="button"
              onClick={() => onDateSelect(date)}
              className={`px-4 py-3 text-sm rounded-xl border transition-all ${
                selectedDate === date
                  ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {formatDate(date)}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
