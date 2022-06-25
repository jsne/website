declare module '*.woff2';
declare module '*.css';
declare module '*.gif' {
  export default '';
}

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
  const path = '';
  export default path;
}
