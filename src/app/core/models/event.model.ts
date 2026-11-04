export interface CafeEvent {
  id: string;

  title: string;
  description?: string;

  image?: string;

  date: string;
  startTime?: string;
  endTime?: string;

  location?: string;

  organizer?: string;

  bookingUrl?: string;
  contactNumber?: string;

  isFeatured?: boolean;
  isActive?: boolean;
}