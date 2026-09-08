import { FigurePanel } from "./FigurePanel";

type FigureGridProps = {
  figures: Array<{
    src: string;
    title: string;
    alt: string;
    takeaway: string;
    caption: string;
  }>;
};

export function FigureGrid({ figures }: FigureGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {figures.map((figure) => (
        <FigurePanel key={figure.src} figure={figure} />
      ))}
    </div>
  );
}
