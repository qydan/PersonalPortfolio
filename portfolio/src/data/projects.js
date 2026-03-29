const projects = [
  {
    id: 'shazam-drones',
    title: 'Shazam for Drones',
    description:
      'Hackathon winner ($1,000) at Ottawa Defense Tech Hackathon. Built A4K, an acoustic drone-detection system identifying UAVs using only microphone input with 95%+ classification accuracy. Custom CNN trained on log-mel spectrograms, exported to ONNX. Full-stack pipeline: FastAPI WebSocket backend + React/TypeScript radar-style frontend.',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'PyTorch', 'ONNX'],
    githubUrl: 'https://github.com/Ajanzz/drones-shazam-ODT-hackathon',
    devpostUrl: 'https://devpost.com/software/a4k',
    hackathonWinner: true,
    featured: true,
  },
  {
    id: 'mirrorloop',
    title: 'MirrorLoop',
    description:
      'UOttaHack project. End-to-end full-stack feedback system integrating the SurveyMonkey REST API for low-latency in-app voting. Stateless backend service for normalized weighted feedback scores (1–5), automated ETL pipelines, and a real-time sentiment dashboard.',
    tags: ['React', 'Node.js', 'REST API', 'TypeScript'],
    githubUrl: 'https://github.com/Ajanzz/UOttaHack8-Ajan-Danilo-Aws-Aydan',
    devpostUrl: 'https://devpost.com/software/mirrorloop-the-invisible-feedback-agent',
    featured: true,
  },
  {
    id: 'uno-flip',
    title: 'Uno Flip (Java)',
    description:
      'Full Uno Flip card game built in Java for SYSC 3110. MVC architecture with a Swing GUI, AI player with priority-based strategy (action cards first, wilds as last resort), undo/redo via serialization snapshots, save/load game state, and official Uno Flip scoring across rounds. Includes 90%+ JUnit test coverage.',
    tags: ['Java', 'Swing', 'MVC', 'JUnit'],
    githubUrl: 'https://github.com/qydan/Uno-M4',
  },
  {
    id: 'sysc4001-a3',
    title: 'Operating System',
    description:
      'Operating Systems assignment implementing process scheduling and inter-process communication concepts in C. Covers real-time systems topics from SYSC 4001 at Carleton University.',
    tags: ['C', 'Linux', 'Operating Systems'],
    githubUrl: 'https://github.com/qydan/SYSC4001_A3_P1',
  },
  {
    id: 'sudoku-solver',
    title: 'Sudoku Solver',
    description:
      'Sudoku solver using a backtracking algorithm to efficiently solve any valid board. Includes an interactive pygame GUI — click a cell, type a number, press Enter to confirm, and Space to auto-solve. Visualizes the backtracking process in real time.',
    tags: ['Python', 'Pygame', 'Algorithms'],
    githubUrl: 'https://github.com/qydan/SudokuSolver',
  },
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description:
      'This site. Built with React, Vite, Tailwind CSS v4, and Framer Motion. Features particle canvas, cursor spotlight, scroll-driven animations, dark/light mode, filterable projects, EmailJS contact form, and live GitHub avatar integration.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/qydan',
    liveUrl: 'https://aydaneng.netlify.app',
    featured: true,
  },
]

export default projects
