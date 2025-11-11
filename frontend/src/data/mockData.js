export const mockUsers = [
  {
    id: '1',
    name: 'John Student',
    email: 'student@lms.com',
    role: 'student',
  },
  {
    id: '2',
    name: 'Jane Instructor',
    email: 'instructor@lms.com',
    role: 'instructor',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@lms.com',
    role: 'admin',
  },
];

export const mockCourses = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React including components, state, and props.',
    instructor: 'Jane Instructor',
    instructorId: '2',
    duration: '8 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    enrolled: 150,
    category: 'Web Development',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts including closures, promises, and async/await.',
    instructor: 'Jane Instructor',
    instructorId: '2',
    duration: '10 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800',
    enrolled: 120,
    category: 'Programming',
    level: 'Advanced',
  },
  {
    id: '3',
    title: 'Database Design',
    description: 'Learn database design principles, SQL, and relational database management.',
    instructor: 'Jane Instructor',
    instructorId: '2',
    duration: '6 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    enrolled: 90,
    category: 'Database',
    level: 'Intermediate',
  },
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of user interface and user experience design.',
    instructor: 'Jane Instructor',
    instructorId: '2',
    duration: '5 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    enrolled: 200,
    category: 'Design',
    level: 'Beginner',
  },
];

export const mockEnrolledCourses = [
  {
    ...mockCourses[0],
    progress: 65,
    lastAccessed: '2024-01-15',
    completed: false,
  },
  {
    ...mockCourses[2],
    progress: 100,
    lastAccessed: '2024-01-10',
    completed: true,
  },
];

export const mockQuizzes = [
  {
    id: '1',
    title: 'React Basics Quiz',
    courseId: '1',
    duration: 30,
    passingScore: 70,
    questions: [
      {
        id: '1',
        question: 'What is JSX?',
        options: [
          'A JavaScript extension',
          'A CSS framework',
          'A database',
          'A testing library',
        ],
        correctAnswer: 0,
      },
      {
        id: '2',
        question: 'Which hook is used for side effects?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 1,
      },
      {
        id: '3',
        question: 'What does props stand for?',
        options: ['Properties', 'Proposals', 'Prototypes', 'Protocols'],
        correctAnswer: 0,
      },
    ],
  },
];

export const mockStudentProgress = [
  {
    studentId: '1',
    studentName: 'John Student',
    courseId: '1',
    courseName: 'Introduction to React',
    progress: 65,
    lastAccessed: '2024-01-15',
    quizScore: 85,
  },
  {
    studentId: '1',
    studentName: 'John Student',
    courseId: '2',
    courseName: 'Advanced JavaScript',
    progress: 30,
    lastAccessed: '2024-01-12',
  },
];
