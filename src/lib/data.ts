import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  group?: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages as ImagePlaceholder[];

export const weightClasses = [
    "Flyweight",
    "Bantamweight",
    "Featherweight",
    "Lightweight",
    "Welterweight",
    "Middleweight",
    "Light Heavyweight",
    "Heavyweight",
];

export const divisions = ["MMA", "Boxing", "Kickboxing", "Grappling"];

export const upcomingEvents = [
    {
      id: 1,
      name: "OFC 25: Reckoning",
      date: "October 26, 2024",
      location: "MGM Grand, Las Vegas",
      posterId: "event-poster-1"
    },
    {
      id: 2,
      name: "OFC 26: Vendetta",
      date: "November 23, 2024",
      location: "Madison Square Garden, NYC",
      posterId: "event-poster-2"
    },
    {
      id: 3,
      name: "OFC 27: Collision Course",
      date: "December 28, 2024",
      location: "The O2 Arena, London",
      posterId: "event-poster-3"
    }
];

export const pastEvents = [
    {
      id: 4,
      name: "OFC 24: Unfinished Business",
      date: "September 14, 2024",
      location: "T-Mobile Arena, Las Vegas",
      posterId: "event-poster-4"
    },
];

export const sponsors = [
    { name: 'Sponsor One', logoId: 'sponsor-1' },
    { name: 'Partner Two', logoId: 'sponsor-2' },
    { name: 'Brand Three', logoId: 'sponsor-3' },
    { name: 'Corp Four', logoId: 'sponsor-4' },
    { name: 'Logo Five', logoId: 'sponsor-5' },
];
