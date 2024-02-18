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
  title?: string | JSX.Element | any;
};

const cloudNarative = `z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)]             
    bg-base-200/90 px-[clamp(1.4rem,6vw,2rem)] py-[clamp(1rem,5vw,1.8rem)] 
    max-w-[clamp(17rem,32vw,32rem)] rounded-[2em]
    drop-shadow-[0px_1px_20px_theme(colors.neutral-content)] `;

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
        <div className="!text-left text-[clamp(1.3rem,1.5vw,1.5rem)] font-black leading-[1.15]">
          <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text drop-shadow-[0_0.1em_0.1em_theme(colors.base-300)] [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
            {props.title}
          </span>
        </div>
      )}
      <div className="mt-[0.5em] !text-left text-[clamp(1.1rem,0.6vw,0.5rem)] font-light">{props.children}</div>
    </div>
  )
);
