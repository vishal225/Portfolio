'use client';

const timeline = [
  {
    type: 'education',
    year: '2018',
    start: 'Sep 2018',
    end: 'May 2020',
    school: 'University of Ottawa',
    degree: "Master's in Computer Science",
  },
  {
    type: 'work',
    year: '2020',
    start: 'Sep 2020',
    end: 'May 2021',
    company: 'Meta Innovation Technologies',
    role: 'Data Engineer',
  },
  {
    type: 'work',
    year: '2021',
    start: 'June 2021',
    end: 'Mar 2022',
    company: 'SMATS Traffic Solutions Inc.',
    role: 'Software Developer',
  },
  {
    type: 'work',
    year: '2022',
    start: 'Mar 2022',
    end: 'Present',
    company: 'Phreesia',
    role: 'Data Engineer III',
  },
];

export default function HorizontalTimeline() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Timeline</h2>

      <div className="overflow-x-auto">
        <div className="flex items-center relative w-max mx-auto px-4">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center mx-8 min-w-[220px]">
              {/* Connector Line */}
              {index !== 0 && (
                <div className="absolute -left-8 top-5 w-8 h-1 bg-green-400" />
              )}

              {/* Dot */}
              <div className="w-4 h-4 bg-green-400 rounded-full z-10 border-2 border-white shadow-md" />

              {/* Content Block */}
              <div className={`absolute w-max ${index % 2 === 0 ? 'bottom-8' : 'top-8'} text-center`}>
                <p className="text-sm text-gray-500">{item.start} – {item.end}</p>
                {item.type === 'education' ? (
                  <>
                    <p className="font-semibold text-gray-900">{item.degree}</p>
                    <p className="text-sm text-gray-600">{item.school}</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-gray-900">{item.role}</p>
                    <p className="text-sm text-gray-600">{item.company}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
