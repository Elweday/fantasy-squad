import React from 'react';

interface FootballFieldProps {
  formation: string; // Formation string, e.g., "3-3-4"
}

const FootballField: React.FC<FootballFieldProps> = ({ formation }) => {
  const formationArray = formation.split('-').map(Number);

  return (
    <div className="relative w-full h-0 pb-[56.25%] bg-green-600 grid grid-rows-1">
      <div className="absolute inset-0 grid grid-rows-6">
        {formationArray.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${line}, 1fr)`,
              placeItems: 'center',
              gridRow: lineIndex + 2,
            }}
          >
            {Array.from({ length: line }, (_, playerIndex) => (
              <div
                key={playerIndex}
                className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-center text-xs"
              >
                P
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballField;
