export interface Employee {
  id: number;
  name: string;
  position: string;
  image: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Fawaz",
    position: "Managing Director",
    image: "/assets/profile/Fawaz.jpg"
  },
  {
    id: 2,
    name: "Gobishankar",
    position: "Chief Financial Officer",
    image: "/assets/profile/Gobishankar.jpg"
  },
  {
    id: 3,
    name: "Hashan",
    position: "Project Manager",
    image: "/assets/profile/Hashan.jpg"
  },
  {
    id: 4,
    name: "Inzam",
    position: "Senior Architect",
    image: "/assets/profile/Inzam.jpg"
  },
  {
    id: 5,
    name: "Jayalakshan",
    position: "Operations Manager",
    image: "/assets/profile/Jayalakshan.jpg"
  },
  {
    id: 6,
    name: "Rachsutyan",
    position: "Trainee",
    image: "/assets/profile/Rachsutyan.jpg"
  }
];
