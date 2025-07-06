'use client';

import { motion } from 'framer-motion';

const timeline = [
	{ year: '2022', company: 'Phreesia', role: 'Data Engineer III' },
	{ year: '2021', company: 'SMATS Traffic Solutions Inc.', role: 'Software Developer' },
	{ year: '2020', company: 'Meta Innovation Technologies', role: 'Data Engineer' },
];

export default function ExperienceTimeline() {
	return (
		<section className="py-16 px-4">
			<div className="max-w-3xl mx-auto relative">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Work Experience
				</motion.h2>

				{/* Center vertical line */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-green-400 rounded"></div>

				{/* Timeline items */}
				<div className="space-y-16">
					{timeline.map((item, index) => {
						const isLeft = index % 2 === 0;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className={`relative flex items-center min-h-[80px] ${
									isLeft ? 'justify-start' : 'justify-end'
								}`}
							>
								{/* Dot */}
								<motion.div
									className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full shadow-md"
									animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
									transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
								/>

								{/* Content */}
								<div
									className={`max-w-[300px] px-4 ${
										isLeft ? 'text-right mr-12' : 'text-left ml-12'
									}`}
								>
									<p className="text-sm text-gray-500">{item.year}</p>
									<p className="text-base font-semibold text-gray-900 dark:text-white">{item.role}</p>
									<p className="text-sm text-gray-700 dark:text-gray-300">{item.company}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
