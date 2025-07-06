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
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Experience Timeline</h2>

        <div className="overflow-x-auto">
          <div className="relative flex items-start w-max mx-auto px-4">
            {/* Timeline line */}
            <div className="absolute top-6 left-0 w-full h-1 bg-gray-600" />

            {timeline.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center mx-6 min-w-[220px]">
                {/* Dot */}
                <div className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white z-10 mb-4" />

                {/* Block */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 text-center w-full">
                  <p className="text-sm text-gray-400 mb-1">
                    {item.start} – {item.end}
                  </p>
                  {item.type === 'education' ? (
                    <>
                      <p className="text-base font-semibold text-gray-300">{item.degree}</p>
                      <p className="text-sm text-gray-400">{item.school}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-base font-semibold text-gray-300">{item.role}</p>
                      <p className="text-sm text-gray-400">{item.company}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
