'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Pipeline Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Data Pipeline Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Streaming & Batch Pipelines</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built 15+ pipelines processing ~15GB/day each</li>
									<li>• Improved SLA adherence by 30%</li>
									<li>• Cut compute cost by 13% with Spark tuning</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">dbt + Snowflake Modeling</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Transformed 10TB+/month using incremental dbt models</li>
									<li>• Reduced processing time by 40%</li>
									<li>• Created 100+ reusable metrics across teams</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & Optimization */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Cloud Infrastructure & Optimization</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Snowflake Efficiency</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Query speedup of 35% via clustering & view tuning</li>
									<li>• Reduced warehouse costs by 20%</li>
									<li>• Enabled secure cross-org data sharing</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Workflow Automation</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Orchestrated 10+ DAGs via Airflow for daily ingestion</li>
									<li>• Reduced manual ops by 80%</li>
									<li>• Implemented end-to-end data quality checks</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Productization & Reusability */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Data Products & Platform</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Reusable Data Products</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Developed templatized ingestion framework for 5 teams</li>
									<li>• Cut onboarding time from 2 weeks to 2 days</li>
									<li>• Included logging, retries, validation as standard</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Stakeholder Enablement</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Provided 30+ curated metrics via BI tools</li>
									<li>• Enabled secure access for 5+ external partners</li>
									<li>• Built self-serve analytics layer using dbt & Snowflake</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
