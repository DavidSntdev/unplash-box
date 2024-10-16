interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ConteudoLayout({ children, className }: LayoutProps) {
  return (
    <main className={`container mx-auto max-w-7xl flex-grow ${className}`}>
      {children}
    </main>
  );
}
