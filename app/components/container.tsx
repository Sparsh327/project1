export function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-5xl w-full mx-auto md:py-3 relative z-10 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
