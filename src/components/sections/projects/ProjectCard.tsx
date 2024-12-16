import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectTabs } from './ProjectTabs';
import { TechBadge } from './TechBadge';
import { MacbookFrame } from '@/components/ui/macbook-frame';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  visitLink: string;
  hasBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  caseStudyPath?: string;
}

export function ProjectCard({
  title,
  role,
  description,
  technologies,
  visitLink,
  hasBeforeAfter,
  beforeImage,
  afterImage,
  caseStudyPath,
}: ProjectCardProps) {
  return (
    <Card className="p-6">
      <div className="grid gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground">{role}</p>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="outline" asChild>
              <a href={visitLink} target="_blank" rel="noopener noreferrer">
                Visit {title}
              </a>
            </Button>
            {caseStudyPath && (
              <Button asChild>
                <Link 
                  to={caseStudyPath}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-white shadow-lg"
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <Card className="p-6 bg-card">
          {hasBeforeAfter && beforeImage && afterImage ? (
            <ProjectTabs
              beforeImage={beforeImage}
              afterImage={afterImage}
              title={title}
            />
          ) : (
            <MacbookFrame>
            <img
              src={beforeImage}
              alt={`${title} Design`}
              className="rounded-lg border w-full"
            />
            </MacbookFrame>
          )}
        </Card>
      </div>
    </Card>
  );
}