import InfoFormSection from '@/components/common/InfoFormSection';
import GetStartedSection from '@/components/common/GetStartedSection';
import HeaderEbook from '@/components/ebook/HeaderEbook';
import FeaturesSection from '@/components/ebook/FeaturesSection';
import ProfileSection from '@/components/common/ProfileSection';
import Footer from '@/components/layout/Footer';

const features = [
	{
		title: 'Rate',
		description:
			"Yes. Rate is important, but it's not everything. Understanding your rate is more important.",
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
			<InfoFormSection
				title='About the book'
				description="So you're about to get into the world of homeownership. It's okay...everyone feels lost during this process, but the more preparation you do upfront, the smoother your journey will be."
				buttonText='Get the eBook'
			/>
			<FeaturesSection title="What's in the report" items={features} />
			<ProfileSection
				title='About author'
				role='The master mind'
				name='Justin'
				description="Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)"
				image='/ebook-justin.png'
				imageWidth={369}
				imageHeight={339}
				buttonText='Meet Justin'
			/>
			<GetStartedSection
				title='Get started with us'
				description="Rates change, but every mortgage journey starts with a relationship. (Pssst...it's not just about clicking a button)"
				primaryButtonText='Get started'
				secondaryButtonText='Schedule a time'
				image='/get-started-with-us.png'
			/>
			<Footer />
		</main>
	);
}
