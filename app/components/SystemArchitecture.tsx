'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Data Engineering Highlights
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Real-Time Data Ingestion Platform',
							description: 'Designed scalable ingestion pipelines on AWS handling 15GB/day across 15+ data sources',
							details: [
								'Developed modular, production-grade pipelines with PySpark & AWS Glue',
								'Reduced compute cost by 13% through workflow optimization',
								'Improved data SLAs by 30% with schema validation & retry mechanisms',
								'Enabled external data sharing via Snowflake secure views',
							],
							tech: ['AWS Glue', 'AWS Kinesis', 'S3', 'PySpark', 'Snowflake', 'AWS IAM', 'AWS Lakeformation'],
						},
						{
							title: 'Automated Analytics with dbt & Airflow',
							description: 'Built ETL workflows transforming 10TB+ data/month into actionable models using dbt',
							details: [
								'Developed incremental dbt models for key business metrics',
								'Integrated with Apache Airflow to automate multi-stage DAGs',
								'Boosted processing speed by 40% and reduced manual ops by 80%',
								'Implemented observability framework for monitoring data freshness',
							],
							tech: ['dbt', 'Apache Airflow', 'Snowflake', 'SQL', 'Python'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
