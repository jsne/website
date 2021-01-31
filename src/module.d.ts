declare module '*.woff2';
declare module '*.css';
declare module '*.svg';

declare module '~/assets/images/inline/*.svg' {
  const Component: React.FC<React.SVGAttributes<SVGElement>>;
  export default Component;
}
