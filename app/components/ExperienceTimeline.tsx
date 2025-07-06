'use client';

const timeline = [
  { year: '2022', company: 'Phreesia', role: 'Data Engineer III' },
  { year: '2021', company: 'SMATS Traffic Solutions Inc.', role: 'Software Developer' },
  { year: '2020', company: 'Meta Innovation Technologies', role: 'Data Engineer' },
];

export default function SimpleExperienceTimeline() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>

        {/* Center vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400" />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex items-center min-h-[80px]">
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />

                {/* Content */}
                <div
                  className={`max-w-xs px-4 ${
                    isLeft ? 'mr-auto text-right pr-10' : 'ml-auto text-left pl-10'
                  }`}
                >
                  <p className="text-sm text-gray-500">{item.year}</p>
                  <p className="font-semibold text-gray-900">{item.role}</p>
                  <p className="text-sm text-gray-700">{item.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
