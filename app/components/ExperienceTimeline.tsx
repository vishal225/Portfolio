'use client';

import { motion } from 'framer-motion';

const timeline = [
	{ year: '2022', company: 'Phreesia', role: 'Data Engineer III' },
	{ year: '2021', company: 'SMATS Traffic Solutions Inc.', role: 'Software Developer' },
	{ year: '2020', company: 'Meta Innovation Technologies', role: 'Data Engineer' },
];

export default function ExperienceTimeline() {
	return (
		<section className="py-16 px-4 bg-gray-900/50">
			<div className="max-w-3xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Work Experience
				</motion.h2>

				<div className="relative border-l border-gray-700 ml-4 sm:ml-6 pl-6 space-y-10">
					{timeline.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="relative"
						>
							{/* Pulsing Dot */}
							<motion.div
								className="absolute -left-3 top-1 w-2.5 h-2.5 bg-green-400 rounded-full shadow-md"
								animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
								transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
							/>

							<p className="text-sm text-gray-400">{item.year}</p>
							<p className="text-base font-semibold text-white">{item.role}</p>
							<p className="text-sm text-gray-300">{item.company}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
