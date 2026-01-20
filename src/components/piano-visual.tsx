export function PianoVisual() {
  // 24 white keys for more realistic width
  const whiteKeys = Array.from({ length: 24 });

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full">
      {/* White keys */}
      <div className="relative mx-auto flex h-52 max-w-[1600px]">
        {whiteKeys.map((_, i) => (
          <div
            key={`white-${i}`}
            style={{
              animation: "piano-breathe 8s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
            className="
              flex-1
              border-l border-black/20
              bg-neutral-100
              first:border-l-0
            "
          />
        ))}

        {/* Black keys */}
        <div className="absolute left-0 top-0 flex h-32 w-full px-[2.8%]">
          {whiteKeys.map((_, i) => {
            // Skip black keys according to piano pattern
            if ([2, 6, 9, 13, 16, 20, 23].includes(i)) return null;

            return (
              <div key={`black_${i}`} className="relative flex-1">
                <div
                  className="
                    absolute left-[62%]
                    h-full w-[58%]
                    rounded-b-md
                    bg-neutral-900
                    shadow-md
                  "
                  style={{
                    animation: "piano-breathe 12s ease-in-out infinite",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
