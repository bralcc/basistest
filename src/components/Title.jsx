export default function Title({ children, className }) {
  return <h1 className={`text-2xl font-bold mb-2 ${className}`}>{children}</h1>;
}
