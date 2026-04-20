import type { Layer } from '../content';
import { LayerVisual } from './LayerVisual';

interface LayerDetailProps {
  layer: Layer;
}

export function LayerDetail({ layer }: LayerDetailProps) {
  return (
    <div
      key={layer.num}
      className="rounded-lg border hairline p-8 lg:p-10 relative overflow-hidden anim-fade-in"
      style={{ minHeight: '440px' }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: layer.color }} />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${layer.color}, transparent)` }}
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="font-mono text-xs tabular-nums" style={{ color: layer.color }}>
            LAYER {layer.num}
          </div>
          <div className="flex-1 h-px" style={{ background: `${layer.color}30` }} />
        </div>
        <h3 className="font-display text-3xl lg:text-4xl mb-4">{layer.name}</h3>
        <p className="text-white/75 leading-relaxed mb-8 max-w-xl">{layer.desc}</p>
        <div className="mb-8">
          <LayerVisual layer={layer} />
        </div>
        <div className="flex items-start gap-2 pt-6 border-t hairline">
          <div className="w-1 h-1 rounded-full mt-2" style={{ background: layer.color }} />
          <div className="text-sm text-white/70 italic">{layer.highlight}</div>
        </div>
      </div>
    </div>
  );
}
