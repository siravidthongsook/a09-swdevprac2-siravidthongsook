export type Venue = {
  vid: string;
  venueName: string;
  imgSrc: string;
  description: string;
};

export const venueList: Venue[] = [
  {
    vid: "001",
    venueName: "The Bloom Pavilion",
    imgSrc: "/img/bloom.jpg",
    description:
      "A bright garden venue with floral details and airy seating for elegant celebrations.",
  },
  {
    vid: "002",
    venueName: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
    description:
      "A clean modern hall for launches, talks, and private events with a city feel.",
  },
  {
    vid: "003",
    venueName: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
    description:
      "A classic banquet room with warm lighting and generous space for formal gatherings.",
  },
];

export const venueMap = new Map<string, Venue>(
  venueList.map((venue) => [venue.vid, venue]),
);
