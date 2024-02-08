import { cn } from "@/lib/utils";
import { MapRef, useMap } from "react-map-gl";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { FC, HTMLProps, PropsWithChildren, forwardRef, useEffect } from "react";

type SectionWrapperProps = PropsWithChildren<HTMLProps<HTMLDivElement>> & {
  scrollTreshold?: number;
  onSectionEnter?: (map?: MapRef) => void;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  onSectionEnter,
  ...props
}) => {
  const { map } = useMap();

  const [ref, entry] = useIntersectionObserver({
    threshold: props.scrollTreshold || 0.5,
  });

  useEffect(() => {
    if (entry?.isIntersecting) onSectionEnter?.(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry, map]);

  return (
    <section
      className={cn(
        "relative min-h-svh w-full container m-auto",
        props.className
      )}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
        <div ref={ref} className="h-3/5 w-full bg-transparent" />
      </div>
      <div className="z-50 relative">{props.children}</div>
    </section>
  );
};

type SectionCardProps = PropsWithChildren<HTMLProps<HTMLDivElement>> & {
  title?: string;
};


const cloudNarative = `z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)]             
    bg-base-200/90 px-[clamp(1.4rem,6vw,2rem)] py-[clamp(1rem,5vw,1.8rem)] 
    max-w-[clamp(17rem,32vw,32rem)] rounded-[2em]
    drop-shadow-[0px_2px_10px_theme(colors.neutral-content)] `;

export const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(
  (props, ref) => (
    <div
      ref={ref}
      title={props.title}
      className={cn(
        // "bg-background border border-border max-w-96 p-4",
        " ",
        cloudNarative,
        props.className
      )}
    >
      {props.title && (
        <div className="uppercase font-mono text-xl mb-2">{props.title}</div>
      )}
      <div className="text-lg">{props.children}</div>
    </div>
  )
);
