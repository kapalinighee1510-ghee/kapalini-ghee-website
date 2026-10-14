export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

export function BagIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 8h15l1 12h-17l1-12Zm4 0V6a3.5 3.5 0 0 1 7 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CloseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5 19 19M19 5 5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}
