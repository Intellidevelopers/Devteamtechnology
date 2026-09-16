import type { Page } from '../App'

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
}

export default function ProjectCard({ project, navigate }: Props) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-line hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-orange text-[10px] font-bold uppercase tracking-[0.15em] mb-2 block">
          {project.category}
        </span>
        <h3 className="font-black text-navy text-lg leading-snug mb-2">{project.title}</h3>
        <p className="text-gray-body text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
        <button
          onClick={() => navigate('case-study', project.id)}
          className="inline-flex items-center gap-1.5 text-orange text-sm font-bold hover:gap-3 transition-all duration-150 group/link"
          aria-label={`View case study for ${project.title}`}
        >
          View Case Study
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </article>
  )
}
