import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Vishal Rajak - Data Engineer Portfolio',
	description:
		'Welcome to my portfolio! I am a data engineer and analytics developer with a passion for building scalable data pipelines, designing efficient data architectures, and delivering actionable insights. With expertise in cloud platforms, big data tools, and modern analytics frameworks, I enable data-driven decision-making through high-performance, reliable, and maintainable data solutions',
	keywords: [
	'Data Engineer',
	'Analytics Developer',
	'ETL Pipelines',
	'Data Architecture',
	'Data Warehousing',
	'Cloud Computing',
	'Snowflake',
	'AWS',
	'Apache Spark',
	'Airflow',
	'dbt',
	'SQL',
	'Python',
	'Big Data',
	'Data Lake',
	'Vishal Rajak',
	'Data Modeling',
	'Streaming Data',
	'Data Engineering Projects',
	],
	authors: [{ name: 'Vishal Rajak' }],
	creator: 'Vishal Rajak',
	openGraph: {
		title: 'Vishal Rajak - Data Engineer Portfolio',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		url: 'https://your-domain.com',
		siteName: 'Vishal Rajak - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Vishal Rajak -  Data Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Vishal Rajak -  Data Engineer Portfolio',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}<Analytics /></body>
		</html>
	);
}
