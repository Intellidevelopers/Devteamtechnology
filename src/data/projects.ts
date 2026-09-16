import type { Project } from '../components/ProjectCard'

export const PROJECTS: Project[] = [
  {
    id: 'food-delivery',
    category: 'Mobile App',
    categorySlug: 'mobile-apps',
    title: 'Food Delivery App',
    description:
      'A feature-rich food delivery application with real-time tracking, secure payments, and seamless ordering experiences.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop&auto=format',
    tags: ['Flutter', 'Firebase', 'Node.js'],
  },
  {
    id: 'real-estate',
    category: 'Web Development',
    categorySlug: 'web-development',
    title: 'Real Estate Website',
    description:
      'A modern real estate platform with premium property listings, advanced search filters, and an intuitive user experience.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=450&fit=crop&auto=format',
    tags: ['React', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 'finance-app',
    category: 'Mobile App',
    categorySlug: 'mobile-apps',
    title: 'Finance Mobile App',
    description:
      'An easy and simple finance app with budgeting tools, transaction history tracking, and interactive goal features.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=450&fit=crop&auto=format',
    tags: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    id: 'ecommerce',
    category: 'E-Commerce',
    categorySlug: 'e-commerce',
    title: 'E-Commerce Website',
    description:
      'A complete online store with smooth checkout, multi-currency support, order tracking, and custom inventory systems.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop&auto=format',
    tags: ['Next.js', 'Shopify', 'Stripe'],
  },
  {
    id: 'education',
    category: 'Web Development',
    categorySlug: 'web-development',
    title: 'Education Platform',
    description:
      'A state-of-the-art learning management system with live streaming classes, online assessments, and student progress metrics.',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=450&fit=crop&auto=format',
    tags: ['React', 'WebRTC', 'GraphQL'],
  },
  {
    id: 'restaurant',
    category: 'Mobile App',
    categorySlug: 'mobile-apps',
    title: 'Restaurant Mobile App',
    description:
      'Food ordering app engineered for fine dining featuring menu customization, live kitchen tracking, and premium loyalty perks.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=450&fit=crop&auto=format',
    tags: ['Flutter', 'Firebase', 'Stripe'],
  },
  {
    id: 'fitness',
    category: 'Mobile App',
    categorySlug: 'mobile-apps',
    title: 'Fitness & Wellness App',
    description:
      'A personal fitness application with customized workout routines, diet tracking, and seamless smartwatch sync integrations.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop&auto=format',
    tags: ['React Native', 'HealthKit', 'Node.js'],
  },
  {
    id: 'corporate',
    category: 'Web Development',
    categorySlug: 'web-development',
    title: 'Corporate Website',
    description:
      'A professional and clean website designed for modern enterprises, showcasing secure service portals and complex API lead forms.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop&auto=format',
    tags: ['Next.js', 'CMS', 'TypeScript'],
  },
  {
    id: 'healthcare',
    category: 'Mobile App',
    categorySlug: 'mobile-apps',
    title: 'Healthcare App',
    description:
      'A telemedicine application supporting live secure video consultations, digital prescriptions, and patient history archives.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=450&fit=crop&auto=format',
    tags: ['Flutter', 'WebRTC', 'HIPAA'],
  },
]

export const CATEGORIES = [
  { label: 'All Projects', slug: 'all' },
  { label: 'Mobile Apps', slug: 'mobile-apps' },
  { label: 'Web Development', slug: 'web-development' },
  { label: 'UI/UX Design', slug: 'ui-ux-design' },
  { label: 'E-Commerce', slug: 'e-commerce' },
  { label: 'Other', slug: 'other' },
]
