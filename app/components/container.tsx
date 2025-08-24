export function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-4xl mx-auto px-4 md:py-8  ${className ?? ""}`}>
      {children}
    </div>
  );
}
