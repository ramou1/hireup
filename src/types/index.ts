export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO date string
}

export interface Professional {
  id: string;
  name: string;
  profession: string;
  avatar?: string;
  bio?: string;
  averageRating: number; // 0-5
  totalReviews: number;
  averagePrice: number; // em reais
  availableDays: DayOfWeek[];
  location?: string;
  reviews: Review[];
}

export interface ServiceRequest {
  professionalId: string;
  selectedDate: string; // ISO date string
  message?: string;
}

