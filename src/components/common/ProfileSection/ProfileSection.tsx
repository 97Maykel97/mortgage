import Image from 'next/image';
import Container from '../Container';
import PlayButton from '../PlayButton';
import styles from './ProfileSection.module.scss';

type ProfileSectionProps = {
	title: string;
	role: string;
	name: string;
	description: string;
	image: string;
	imageWidth: number;
	imageHeight: number;
	buttonText: string;
};

function ProfileSection({
	title,
	role,
	name,
	description,
	image,
	imageWidth,
	imageHeight,
	buttonText,
}: ProfileSectionProps) {
	return (
		<section className={styles.section}>
			<Container>
				<h2 className={styles.title}>{title}</h2>

				<div className={styles.card}>
					<Image
						className={styles.image}
						src={image}
						alt={name}
						width={imageWidth}
						height={imageHeight}
					/>

					<div className={styles.info}>
						<p className={styles.role}>{role}</p>
						<h3 className={styles.name}>{name}</h3>
						<div className={styles.divider} />
						<p className={styles.description}>{description}</p>
						<div className={styles.action}>
							<PlayButton label={buttonText} />
							<span>{buttonText}</span>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default ProfileSection;
