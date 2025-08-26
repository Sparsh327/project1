export function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-265 mx-auto md:py-3 relative z-10 ${className ?? ""}`}>
      {children}
    </div>
  );
}
