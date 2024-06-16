export default {
  title: '_Experiments/OKLCH',
};

export const HSLVsLCH = {
  parameters: {
    skip: true,
    screenshot: {
      skip: true,
      viewport: {
        skip: true,
        width: 830,
        height: 600,
      },
    },
  },
  args: {
    saturationOrChroma: 100,
    leftHalf: false,
  },
  render: ({ saturationOrChroma, leftHalf }) => {
    const maxL = leftHalf ? 50 : 100;
    const step = leftHalf ? 1 : 2;
    return (
      <>
        <h1>hsl{leftHalf && ` (showing left half only)`}</h1>
        {Array.from({ length: 360 / 20 + 1 }, (_, i) => i * 20).map(h => (
          <div key={h}>
            {Array.from({ length: maxL / step + 1 }, (_, i) => i * step).map(
              l => (
                <input
                  key={`${l}-${h}`}
                  type="checkbox"
                  checked
                  style={{
                    accentColor: `hsl(${h}, ${saturationOrChroma}%, ${l}%)`,
                  }}
                  title={`L:${l} H:${h}`}
                  aria-label="checkbox"
                />
              ),
            )}
          </div>
        ))}
        <h1>oklch</h1>
        {Array.from({ length: 360 / 20 + 1 }, (_, i) => i * 20).map(h => (
          <div key={h}>
            {Array.from({ length: 100 / 2 + 1 }, (_, i) => i * 2).map(l => (
              <input
                key={`${l}-${h}`}
                type="checkbox"
                checked
                style={{
                  accentColor: `oklch(${l}% ${saturationOrChroma}% ${h})`,
                }}
                title={`L:${l} H:${h}`}
                aria-label="checkbox"
              />
            ))}
          </div>
        ))}
      </>
    );
  },
};
