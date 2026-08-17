type DecorativeAssetProps = { src: string; className: string };

export function DecorativeAsset({ src, className }: DecorativeAssetProps) {
  return <img alt="" aria-hidden="true" className={`decor ${className}`} src={`/assets/lacquer/${src}`} />;
}
