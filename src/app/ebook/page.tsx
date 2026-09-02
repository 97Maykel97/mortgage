import AboutBook from '@/components/ebook/AboutBook';
import HeaderEbook from '@/components/ebook/HeaderEbook';
import FeaturesSection from '@/components/ebook/FeaturesSection';

const features = [
	{
		title: 'Rate',
		description:
			'Yes. Rate is important, but it’s not everything. Understanding your rate is more important.',
		icon: '/icons/rate.svg',
	},
	{
		title: 'Relationships',
		description:
			'Build a solid relationship with a realtor, a lender and never look back!',
		icon: '/icons/communication-guru.svg',
	},
	{
		title: 'Pre-Approved',
		description:
			'Getting pre-approved early will play a key part in finding your dream home.',
		icon: '/icons/pre-approved.svg',
	},
];

export default function EbookPage() {
	return (
		<main>
			<HeaderEbook />
			<AboutBook />
			<FeaturesSection title='What’s in the report' items={features} />
		</main>
	);
}
