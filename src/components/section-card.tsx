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

export const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(
  (props, ref) => (
    <div
      ref={ref}
      title={props.title}
      className={cn(
        "bg-background border border-border max-w-96 p-4",
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
