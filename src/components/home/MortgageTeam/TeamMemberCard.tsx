import Image from 'next/image';

import PlayButton from '@/components/common/PlayButton';

import SkillItem from './SkillItem';
import styles from './TeamMemberCard.module.scss';

type TTeamMember = {
	name: string;
	role: string;
	image: string;
	videoUrl: string;
	description: string;
	skills: {
		name: string;
		icon?: string;
	}[];
};

type TTeamMemberCardProps = {
	member: TTeamMember;
};

function TeamMemberCard({ member }: TTeamMemberCardProps) {
	return (
		<article className={styles.card}>
			<div className={styles.media}>
				<Image
					className={styles.photo}
					src={member.image}
					alt={member.name}
					width={285}
					height={220}
					quality={100}
				/>

				<div className={styles.video}>
					<PlayButton
						className={styles.playButton}
						href={member.videoUrl}
						label={`Play video: Meet ${member.name}`}
					/>
					<span className={styles.videoText}>Meet {member.name}</span>
				</div>
			</div>

			<div className={styles.content}>
				<p className={styles.role}>{member.role}</p>
				<h3 className={styles.name}>{member.name}</h3>

				<span className={styles.divider} aria-hidden='true' />

				<p className={styles.description}>{member.description}</p>

				<h4 className={styles.skillsTitle}>Skills</h4>

				<ul className={styles.skills}>
					{member.skills.map(skill => (
						<SkillItem
							key={skill.name}
							name={skill.name}
							icon={skill.icon}
						/>
					))}
				</ul>
			</div>
		</article>
	);
}

export default TeamMemberCard;
