'use client';

const timeline = [
  { year: '2022', company: 'Phreesia', role: 'Data Engineer III' },
  { year: '2021', company: 'SMATS Traffic Solutions Inc.', role: 'Software Developer' },
  { year: '2020', company: 'Meta Innovation Technologies', role: 'Data Engineer' },
];

export default function ExperienceScroll() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2 max-w-full">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] flex-shrink-0 border border-gray-200 rounded-lg p-5 shadow-sm bg-white"
          >
            <p className="text-sm text-gray-500">{item.year}</p>
            <p className="text-lg font-semibold text-gray-900">{item.role}</p>
            <p className="text-sm text-gray-700">{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
