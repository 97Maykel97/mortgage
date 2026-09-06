import Image from 'next/image';

import Container from '@/components/common/Container';
import InfoFormSection from '@/components/common/InfoFormSection';
import Logo from '@/components/common/Logo';
import PlayButton from '@/components/common/PlayButton';

import styles from './page.module.scss';

function WebinarPage() {
	return (
		<main>
			<header className={styles.header}>
				<Logo className={styles.logo} />
			</header>

			<Container className={styles.wrapper}>
				<InfoFormSection
					title='Webinar name'
					author='Scott Johnson'
					description='So you’re about to get into the world of homeownership. It’s okay...everyone feels lost during this process, but the more preparation you do upfront, the smoother your journey will be.'
					buttonText='Get the webinar'
					className={styles.webinarForm}
				/>

				<div className={styles.media}>
					<Image
						className={styles.image}
						src='/webinar-video.png'
						alt='Webinar preview'
						width={648}
						height={404}
					/>
					<div className={styles.play}>
						<PlayButton label='Play webinar' />
						<time dateTime='PT1M34S'>Play demo (1:34)</time>
					</div>
				</div>
			</Container>
		</main>
	);
}

export default WebinarPage;
