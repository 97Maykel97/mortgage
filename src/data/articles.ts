export type TEducationArticle = {
	id: number;
	title: string;
	description: string;
	author: string;
	authorImage: string;
	variant: 'featured' | 'default';
	backgroundImage?: string;
};

const description =
	'Terms of your offer, how quickly you can turn things around and who your lender is advising.';

export const articles: TEducationArticle[] = [
	{
		id: 1,
		title: 'Article #1',
		description,
		author: 'Scott Johnson',
		authorImage: '/scott-johnson.png',
		variant: 'featured',
		backgroundImage: '/article-1-background.jpg',
	},
	{
		id: 2,
		title: 'Article #2',
		description,
		author: 'Justin Roberts',
		authorImage: '/justin-roberts.png',
		variant: 'default',
	},
	{
		id: 3,
		title: 'Article #3',
		description,
		author: 'Justin Roberts',
		authorImage: '/justin-roberts.png',
		variant: 'default',
	},
	...Array.from({ length: 7 }, (_, index): TEducationArticle => {
		const id = index + 4;
		const isScott = index % 2 === 0;
		const isFeatured = index === 3;

		return {
			id,
			title: `Article #${id}`,
			description,
			author: isScott ? 'Scott Johnson' : 'Justin Roberts',
			authorImage: isScott ? '/scott-johnson.png' : '/justin-roberts.png',
			variant: isFeatured ? 'featured' : 'default',
			backgroundImage: isFeatured ? '/article-1-background.jpg' : undefined,
		};
	}),
];
