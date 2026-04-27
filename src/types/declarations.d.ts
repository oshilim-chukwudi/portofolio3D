declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "react-tilt" {
  import { ComponentPropsWithoutRef } from "react";

  interface TiltOptions {
    reverse?: boolean;
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: "X" | "Y" | null;
    reset?: boolean;
    easing?: string;
  }

  interface TiltProps extends ComponentPropsWithoutRef<"div"> {
    options?: TiltOptions;
  }

  const Tilt: React.FC<TiltProps>;
  export default Tilt;
}

declare module "maath/random/dist/maath-random.esm" {
  export function inSphere(array: Float32Array, options: { radius: number }): Float32Array;
}
