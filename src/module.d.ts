declare module '*.woff2';
declare module '*.css';
declare module '*.svg';

declare module '~/assets/images/*.svg' {
  export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
  const path = '';
  export default path;
}
