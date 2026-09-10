import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, House, LockKeyhole } from "lucide-react";
import { PrimaryAction } from "@/components/ui/primary-action";
import mvQuiosques from "@/public/projects/mv-quiosques.png";
import valverdeEngenharia from "@/public/projects/valverde-engenharia.png";
import playgroundsMagia from "@/public/projects/playgrounds-magia.png";

type Project = {
  id: string;
  name: string;
  description: string;
  domain: string;
  image: StaticImageData;
  imageAlt: string;
};

const featuredProject: Project = {
  id: "mv-quiosques",
  name: "MV Quiosques",
  description:
    "Uma vitrine para quiosques, decks e pergolados, com serviços organizados e acesso ao orçamento.",
  domain: "mvquiosques.com.br",
  image: mvQuiosques,
  imageAlt:
    "Página inicial da MV Quiosques, com um pergolado de madeira à beira da piscina.",
};

const projects: Project[] = [
  {
    id: "valverde-engenharia",
    name: "Valverde Engenharia",
    description:
      "Segurança contra incêndio apresentada com clareza, dos serviços de AVCB e CLCB ao agendamento de vistorias.",
    domain: "valverdeengenharia.com.br",
    image: valverdeEngenharia,
    imageAlt:
      "Página inicial da Valverde Engenharia, com destaque para segurança contra incêndio e agendamento de vistoria.",
  },
  {
    id: "playgrounds-magia",
    name: "Playgrounds Magia",
    description:
      "Playgrounds de madeira em uma experiência visual que apresenta modelos, projetos sob medida e contato para orçamento.",
    domain: "playgroundsmagia.com.br",
    image: playgroundsMagia,
    imageAlt:
      "Página inicial da Playgrounds Magia, com playground de madeira em um jardim e a chamada Crie Memórias Incríveis.",
  },
];

function ProjectPreview({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-brand-primary/10 bg-surface-soft shadow-[0_12px_32px_rgba(5,84,242,0.08)] sm:rounded-2xl">
      <div
        aria-hidden="true"
        className="flex h-9 items-center gap-3 border-b border-brand-primary/8 px-3 sm:h-10 sm:px-4"
      >
        <div className="hidden shrink-0 items-center gap-1.5 min-[360px]:flex">
          <span className="size-2 rounded-full bg-ink/20" />
          <span className="size-2 rounded-full bg-brand-secondary/60" />
          <span className="size-2 rounded-full bg-brand-primary/60" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/80 px-2.5 py-1 text-[0.625rem] font-medium text-ink/70 sm:text-xs">
          <LockKeyhole className="size-3 shrink-0" />
          <span className="truncate">{project.domain}</span>
        </div>
      </div>
      <Image
        src={project.image}
        alt={project.imageAlt}
        placeholder="blur"
        sizes={
          featured
            ? "(min-width: 1280px) 700px, (min-width: 1024px) 57vw, (min-width: 640px) calc(100vw - 96px), calc(100vw - 64px)"
            : "(min-width: 1280px) 560px, (min-width: 768px) calc(50vw - 72px), (min-width: 640px) calc(100vw - 96px), calc(100vw - 64px)"
        }
        className="aspect-[1.94] h-auto w-full object-cover object-top"
      />
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  return (
    <a
      href={`https://www.${project.domain}/`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar site da ${project.name} (abre em uma nova aba)`}
      className="group/link inline-flex min-h-11 w-fit items-center gap-2 rounded-md text-base font-semibold text-brand-primary underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary motion-reduce:transition-none sm:text-lg"
    >
      Visitar site
      <ArrowUpRight
        className="size-4 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none sm:size-5"
        aria-hidden="true"
      />
    </a>
  );
}

const cardClassName =
  "min-w-0 rounded-3xl border border-brand-primary/10 bg-white/85 shadow-[0_8px_32px_rgba(5,84,242,0.035)]";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="relative isolate w-full scroll-mt-8 py-12 md:scroll-mt-16 md:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-20 -right-40 size-[28rem] rounded-full border-[64px] border-brand-secondary/5" />
        <div className="absolute top-12 right-0 size-96 rounded-full bg-brand-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 md:mb-12">
          <p className="inline-flex rounded-full border border-brand-primary/10 bg-brand-primary/10 px-3 py-1.5 text-sm font-semibold text-brand-primary">
            Projetos selecionados
          </p>
          <h2
            id="projects-title"
            className="mt-5 text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.055em] text-ink"
          >
            Ideias que já
            <span className="block text-brand-primary">ganharam forma.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-ink/70 sm:text-lg">
            Conheça sites que apresentam negócios, conectam pessoas e abrem
            novas conversas.
          </p>
        </header>

        <div className="grid gap-5 md:gap-6">
          <article
            aria-labelledby={`${featuredProject.id}-title`}
            className={`${cardClassName} grid items-center gap-6 p-4 sm:gap-8 sm:p-6 lg:grid-cols-12`}
          >
            <div className="min-w-0 lg:order-2 lg:col-span-7">
              <ProjectPreview project={featuredProject} featured />
            </div>
            <div className="min-w-0 px-2 pb-1 sm:px-2 lg:order-1 lg:col-span-5 lg:p-4">
              <h3
                id={`${featuredProject.id}-title`}
                className="text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl"
              >
                {featuredProject.name}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-ink/70 sm:text-lg">
                {featuredProject.description}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-brand-primary/10 pt-5 text-sm text-ink/70">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/8 text-brand-primary">
                  <House className="size-5" aria-hidden="true" />
                </span>
                Construções em madeira
              </div>
              <div className="mt-3">
                <ProjectLink project={featuredProject} />
              </div>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                aria-labelledby={`${project.id}-title`}
                className={`${cardClassName} flex flex-col p-4 sm:p-6`}
              >
                <ProjectPreview project={project} />
                <div className="flex flex-1 flex-col px-2 pt-6 pb-1">
                  <h3
                    id={`${project.id}-title`}
                    className="text-[1.75rem] leading-tight font-bold tracking-[-0.04em] text-ink sm:text-3xl"
                  >
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink/70 sm:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-3">
                    <ProjectLink project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative isolate flex flex-col gap-6 overflow-hidden rounded-3xl bg-[#08152c] p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_100%_0%,rgba(24,168,232,0.22),transparent_65%)]"
            />
            <div>
              <h3 className="text-2xl leading-tight font-bold tracking-[-0.035em] text-balance sm:text-3xl">
                O próximo projeto pode ser o seu.
              </h3>
              <p className="mt-2 text-base text-white/75 sm:text-lg">
                Vamos dar forma à sua ideia.
              </p>
            </div>
            <PrimaryAction
              href="#contato"
              className="w-full shrink-0 sm:w-fit sm:text-base"
            >
              Conversar sobre meu projeto
            </PrimaryAction>
          </div>
        </div>
      </div>
    </section>
  );
}
