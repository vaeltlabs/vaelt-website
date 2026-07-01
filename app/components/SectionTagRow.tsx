interface Props {
  index: string;
  label: string;
  dark?: boolean;
}

export default function SectionTagRow({ index, label, dark = false }: Props) {
  const indexColor = dark ? 'rgba(0,0,0,0.7)' : 'var(--amber)';
  const labelColor = dark ? 'rgba(0,0,0,0.5)' : 'var(--bone-dim)';

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 40px 0',
      fontFamily: 'var(--font-mono)',
      fontSize: '18px',
      letterSpacing: '0.08em',
      color: labelColor,
    }}>
      <span style={{ color: indexColor }}>[ {index} ]</span>
      <span>{label}</span>
    </div>
  );
}
