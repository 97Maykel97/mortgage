import styles from './GetStartedSection.module.scss';
import Container from '@/components/common/Container';
import ButtonLink from '@/components/common/ButtonLink';
import Image from 'next/image';

type GetStartedSectionProps = {
	title: string;
	description: string;
	primaryButtonText: string;
	secondaryButtonText: string;
	image: string;
};

function GetStartedSection({
	title,
	description,
	primaryButtonText,
	secondaryButtonText,
	image,
}: GetStartedSectionProps) {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.content}>
					<div className={styles.info}>
						<h2 className={styles.title}>{title}</h2>
						<p className={styles.description}>{description}</p>
						<div className={styles.divider} />
						<div className={styles.actions}>
							<ButtonLink href='#' showArrow>
								{primaryButtonText}
							</ButtonLink>
							<ButtonLink href='#' variant='secondary'>
								{secondaryButtonText}
							</ButtonLink>
						</div>
					</div>
					<div className={styles.imageWrapper}>
						<Image
							className={styles.image}
							src={image}
							alt={title}
							width={690}
							height={402}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default GetStartedSection;
