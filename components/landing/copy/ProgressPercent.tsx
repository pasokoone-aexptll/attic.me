type Props = {
  localProgress: number;
  label?: string;
};

export function ProgressPercent({ localProgress, label = '' }: Props) {
  return (
    <div className="pt-8 text-white font-ibm-plex-mono">
      {label} {Math.round(localProgress * 100)}%
    </div>
  );
}

export default ProgressPercent;
