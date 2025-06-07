import type { CSSProperties, ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  style?: CSSProperties;
  className?: string;
  id?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`w-full ${props.color} ${props.className || ''}`}
    style={props.style}
    id={props.id}
  >
    {props.children}
  </div>
);

export { Background };
