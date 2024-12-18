import React, { JSX, SVGProps } from 'react';

export type IconComponent =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
