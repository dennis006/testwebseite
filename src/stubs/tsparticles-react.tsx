import { forwardRef, useEffect } from "react";
import type { HTMLAttributes } from "react";

export type ParticlesEngine = Record<string, unknown>;
export type ParticlesContainer = Record<string, unknown>;
export type ParticlesInit = (engine: ParticlesEngine) => Promise<void> | void;
export type ParticlesLoaded = (container: ParticlesContainer) => Promise<void> | void;

export interface ParticlesProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  init?: ParticlesInit;
  loaded?: ParticlesLoaded;
  options?: unknown;
}

const Particles = forwardRef<HTMLDivElement, ParticlesProps>(function Particles(
  { id, init, loaded, options, ...rest },
  ref,
) {
  useEffect(() => {
    let isMounted = true;

    const runLifecycle = async () => {
      try {
        if (init) {
          await init({});
        }
        if (loaded && isMounted) {
          await loaded({});
        }
      } catch (error) {
        console.warn("Particles stub encountered an error", error);
      }
    };

    runLifecycle();

    return () => {
      isMounted = false;
    };
  }, [init, loaded, options]);

  return <div ref={ref} id={id} {...rest} />;
});

export default Particles;

export async function initParticlesEngine(initializer: ParticlesInit): Promise<void> {
  await initializer({});
}
