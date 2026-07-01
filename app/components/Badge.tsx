interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block bg-amber text-bg font-mono text-base tracking-widest uppercase px-3 py-0.5 rounded-full leading-none">
      {children}
    </span>
  );
}
