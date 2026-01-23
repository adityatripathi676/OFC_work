export function SmokeAnimation() {
  return (
    <div className="smoke-container pointer-events-none fixed inset-0 z-30 h-full w-full overflow-hidden">
      <div className="smoke-element" />
      <div className="smoke-element" />
      <div className="smoke-element" />
      <div className="smoke-element" />
    </div>
  );
}
