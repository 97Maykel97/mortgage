import Container from '@/components/common/Container';

import TeamMemberCard from './TeamMemberCard';
import styles from './MortgageTeam.module.scss';

const teamMembers = [
	{
		name: 'Justin',
		role: 'The Master Mind',
		image: '/justin.png',
		videoUrl: '#',
		description:
			'Rates change, but every mortgage journey starts with a relationship. (Pssst... it’s not just about clicking a button)',
		skills: [
			{ name: 'Deals', icon: '/icons/Deals.svg' },
			{ name: 'Find the right way', icon: '/icons/find-the-right-way.svg' },
			{ name: 'Mortgage database', icon: '/icons/mortgage-database.svg' },
			{ name: 'Docs master', icon: '/icons/docs-master.svg' },
		],
	},
	{
		name: 'Scott',
		role: 'The Educator',
		image: '/scott.png',
		videoUrl: '#',
		description:
			'Rates change, but every mortgage journey starts with a relationship. (Pssst... it’s not just about clicking a button)',
		skills: [
			{ name: 'Linguist', icon: '/icons/linguist.svg' },
			{
				name: 'Perfect place searcher',
				icon: '/icons/perfect-place-searcher.svg',
			},
			{ name: 'Helper', icon: '/icons/helper.svg' },
			{ name: 'Communication Guru', icon: '/icons/communication-guru.svg' },
		],
	},
];

function MortgageTeam() {
	return (
		<section
			id='teachers'
			className={styles.section}
			aria-label='Mortgage team'
		>
			<Container className={styles.container}>
				<h2 className={styles.title}>
					Getting a mortgage funded takes a village.
				</h2>
				<p className={styles.subtitle}>
					Well, not quite a village, but two of the villages best lending
					heroes!
				</p>
				<div className={styles.grid}>
					{teamMembers.map(member => (
						<TeamMemberCard key={member.name} member={member} />
					))}
				</div>
			</Container>
		</section>
	);
}

export default MortgageTeam;
