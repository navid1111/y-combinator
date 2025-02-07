import {
  Book,
  Calendar,
  FileText,
  Globe,
  LayoutTemplate,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';
import type React from 'react'; // Added import for React

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <Link
      href="#"
      className="group block space-y-3 hover:opacity-70 transition-opacity"
    >
      <div className="w-12 h-12">{icon}</div>
      <div>
        <h3 className="text-lg font-medium inline-flex items-center">
          {title}{' '}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </Link>
  );
}

export function FeaturesGrid() {
  const features = [
    {
      icon: <FileText className="w-full h-full" />,
      title: 'Docs',
      description: 'Build any page, communicate any idea.',
    },
    {
      icon: <Book className="w-full h-full" />,
      title: 'Wiki',
      description: 'One home base for all your knowledge.',
    },
    {
      icon: <Target className="w-full h-full" />,
      title: 'Projects',
      description: 'Manage any project from beginning to end.',
    },
    {
      icon: <Sparkles className="w-full h-full" />,
      title: 'Notion AI',
      description: 'Finds what you need. Does what you need.',
    },
    {
      icon: <Calendar className="w-full h-full" />,
      title: 'Calendar',
      description: 'See all your commitments in one place.',
    },
    {
      icon: <Trophy className="w-full h-full" />,
      title: 'Goals',
      description: "Track progress toward what's most important.",
    },
    {
      icon: <Globe className="w-full h-full" />,
      title: 'Sites',
      description: 'Make any page a website in minutes.',
    },
    {
      icon: <LayoutTemplate className="w-full h-full" />,
      title: 'Templates',
      description: 'Get started with one of 30,000+ templates.',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-16 max-w-3xl">
        Everything you need
        <br />
        to do your best work.
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {features.map(feature => (
          <Feature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
