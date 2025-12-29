import { Review } from '@/src/types';
import Rating from './Rating';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = new Date(review.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="border-b border-gray-100 py-5 last:border-b-0">
      <div className="flex items-start gap-4">
        <div className="relative h-11 w-11 flex-shrink-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-600">
            {getInitials(review.userName)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm">{review.userName}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{formattedDate}</p>
            </div>
            <Rating rating={review.rating} size="sm" />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
        </div>
      </div>
    </div>
  );
}
