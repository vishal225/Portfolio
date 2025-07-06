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
        <div className="relative flex items-start w-max mx-auto px-4">
          {/* Timeline line */}
          <div className="absolute top-6 left-0 w-full h-1 bg-green-400" />

          {/* Items */}
          {timeline.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center mx-8 min-w-[200px]">
              {/* Dot */}
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white z-10 mb-4" />

              {/* Card */}
              <div className="bg-white shadow-md rounded-md p-4 border w-full">
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
