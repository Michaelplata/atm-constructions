import type { CSSProperties, ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  style?: CSSProperties;
  className?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`w-full ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

export { Background };
