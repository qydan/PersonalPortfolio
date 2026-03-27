const projects = [
  {
    id: 'study-sync',
    title: 'StudySync',
    description:
      'A collaborative study platform for university students. Features real-time shared notes, Pomodoro timers, and group session scheduling. Built with a REST API backend and JWT authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/qydan/study-sync',
    liveUrl: 'https://studysync-demo.vercel.app',
    featured: true,
  },
  {
    id: 'carleton-course-planner',
    title: 'Carleton Course Planner',
    description:
      'A degree-audit tool that lets Carleton students map out their remaining courses, check prerequisite chains, and export a semester-by-semester plan as a PDF.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/qydan/carleton-course-planner',
    featured: true,
  },
  {
    id: 'sentiment-news-dashboard',
    title: 'Sentiment News Dashboard',
    description:
      'Aggregates headlines from RSS feeds and runs them through a fine-tuned BERT model to classify sentiment. Displays trends over time with interactive charts.',
    tags: ['Python', 'FastAPI', 'HuggingFace', 'React', 'Chart.js'],
    githubUrl: 'https://github.com/qydan/sentiment-news-dashboard',
    featured: true,
  },
  {
    id: 'git-standup',
    title: 'git-standup',
    description:
      'A CLI tool that scans local Git repositories and prints a concise summary of your commits from the past N days — perfect for generating daily standup notes.',
    tags: ['Python', 'Click', 'Git'],
    githubUrl: 'https://github.com/qydan/git-standup',
  },
  {
    id: 'inventory-manager',
    title: 'Inventory Manager',
    description:
      'A full-stack inventory management system for small businesses. Supports barcode scanning via webcam, low-stock alerts, and CSV export. Deployed on AWS EC2 with a MySQL database.',
    tags: ['React', 'Express', 'MySQL', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/qydan/inventory-manager',
  },
  {
    id: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    description:
      'An interactive browser-based tool that animates Dijkstra\'s, A*, and BFS algorithms on a user-drawn grid. Built as a data-structures course project.',
    tags: ['JavaScript', 'HTML Canvas', 'CSS'],
    githubUrl: 'https://github.com/qydan/pathfinding-visualizer',
    liveUrl: 'https://qydan.github.io/pathfinding-visualizer',
  },
];

export default projects;
