import { ArrowRight } from "lucide-react"

import type { Page } from "../App"

import AnimateIn from "./AnimateIn"

export interface Project {
  id: string

  category: string

  categorySlug: string

  title: string

  description: string

  image: string

  tags: string[]
}

interface Props {
  project: Project

  navigate: (to: Page, project?: string) => void

  delay?: number
}

export default function ProjectCard({ project, navigate, delay = 0 }: Props) {
  return (
    <AnimateIn delay={delay} className="h-full">
      <article className="group bg-white rounded-2xl overflow-hidden border border-line hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <span className="text-orange text-[10px] font-bold uppercase tracking-[0.18em] mb-2 block">
            {project.category}
          </span>
          <h3 className="font-black text-navy text-[17px] leading-snug mb-2">
            {project.title}
          </h3>
          <p className="text-gray-body text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>
          <button
            onClick={() => navigate("case-study", project.id)}
            className="inline-flex items-center gap-1.5 text-orange text-sm font-bold hover:gap-3 transition-all duration-150"
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    </AnimateIn>
  )
}
