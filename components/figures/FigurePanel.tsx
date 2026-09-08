import Image from "next/image";

type FigurePanelProps = {
  figure: {
    src: string;
    title: string;
    alt: string;
    takeaway: string;
    caption: string;
  };
};

export function FigurePanel({ figure }: FigurePanelProps) {
  return (
    <figure className="border border-border bg-surface">
      <div className="border-b border-border bg-surface-subtle px-4 py-3">
        <h3 className="text-base font-semibold text-foreground">
          {figure.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium leading-5 text-accent-strong">
          {figure.takeaway}
        </p>
      </div>
      <div className="relative aspect-[4/3] border-b border-border bg-white">
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-3"
        />
      </div>
      <figcaption className="p-4 text-sm leading-6 text-muted">
        {figure.caption}
      </figcaption>
    </figure>
  );
}
