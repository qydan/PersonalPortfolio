// Sorted reverse-chronologically (most recent first)
const experience = [
  {
    id: 'raven-swe',
    type: 'work',
    title: 'Full-Stack Software Developer',
    organization: 'Raven Connected',
    organizationUrl: 'https://ravenconnected.com',
    logo: '/logos/raven.jpg',
    dateRange: 'Jan 2026 – Present',
    location: 'Ottawa, ON',
    bullets: [
      'Architected full-stack GIS systems (OpenStreetMaps, Mapbox, MapLibre) on Linux using Docker and AWS, improving system reliability by 25%',
      'Implemented CI/CD pipelines with 90%+ test coverage, reducing production defects by 35% and accelerating release cycles by 40%',
      'Provisioned AWS infrastructure (Lambda, S3, IAM) using Infrastructure as Code, increasing deployment reliability by 25%',
      'Built serverless TypeScript/Node.js backends with SQS and EventBridge, reducing average service latency by 30% under peak load',
    ],
  },
  {
    id: 'remsoft-swe',
    type: 'work',
    title: 'Software Developer',
    organization: 'Remsoft',
    organizationUrl: 'https://remsoft.com',
    logo: '/logos/remsoft.jpg',
    dateRange: 'May 2025 – Aug 2025',
    location: 'Ottawa, ON',
    bullets: [
      'Developed 3 cross-platform mobile apps using Flutter and Dart across iOS, Android, and Windows, reaching 15,000+ active users',
      'Delivered 25+ custom features for 3 client applications using Flutter and Node.js, enabling on-schedule enterprise launches',
      'Integrated 3 major GIS/mapping APIs (ArcGIS, Mapbox, Leaflet) improving user engagement by 30% on average',
      'Implemented 5+ RESTful APIs enabling secure auth, cloud sync, and real-time location tracking with 99.9% uptime',
    ],
  },
  {
    id: 'ta-math-carleton',
    type: 'work',
    title: 'Math & Statistics Teaching Assistant',
    organization: 'Carleton University',
    organizationUrl: 'https://carleton.ca',
    logo: '/logos/carleton.png',
    dateRange: 'Sep 2025 – Dec 2025',
    location: 'Ottawa, ON',
    bullets: [
      'Mentored 2 cohorts of 50+ students in weekly tutorials, translating complex calculus concepts into clear actionable steps',
      'Graded 500+ assignments and exams with detailed feedback, strengthening analytical and critical thinking skills',
    ],
  },
  {
    id: 'beng-carleton',
    type: 'education',
    title: 'Honours BEng, Software Engineering (CO-OP)',
    organization: 'Carleton University',
    organizationUrl: 'https://carleton.ca',
    logo: '/logos/carleton.png',
    dateRange: 'Sep 2023 – Apr 2027',
    location: 'Ottawa, ON',
    bullets: [
      'GPA: 3.97 / 4.0 — Dean\'s Honour List - 2023, 2024, 2025',
      'President\'s Scholarship, Henry M. Tory Scholarship',
      'Coursework: Data Structures & Algorithms, Real Time Systems, Operating Systems, Computer Architecture, Database Management',
    ],
  },
]

export default experience
