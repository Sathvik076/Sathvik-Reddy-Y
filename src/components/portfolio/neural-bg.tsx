/**
 * Minimal dark background with film grain and grid — Prism is handled
 * per-section (hero) for precise placement and full visibility.
 */
export function NeuralBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0c0d0e]">
      {/* Film grain noise effect */}
      <div className="noise-grain absolute inset-0 opacity-[0.12]" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
    </div>
  );
}
