import ButtonLink from '@/components/common/ButtonLink';
import Logo from '@/components/common/Logo';

import styles from './HeaderContent.module.scss';

function HeaderContent() {
	return (
		<div className={styles.inner}>
			<Logo className={styles.logo} priority />

			<div className={styles.main}>
				<h1 className={styles.title}>
					Finding a mortgage is so
					<br />
					<span className={styles.titleLine}>
						<span>much more </span>
						<b>than</b>
						<span> just a rate</span>
					</span>
				</h1>

				<p className={styles.description}>
					Rates change, but every mortgage journey starts with a relationship.
					<br />
					(Pssst...it’s not just about clicking a button)
				</p>
			</div>

			<div className={styles.footer}>
				<p className={styles.footerText}>
					Let us help you create
					<br />
					your mortgage journey
				</p>

				<div className={styles.actions}>
					<ButtonLink href='/get-started' variant='primary' showArrow>
						Get started
					</ButtonLink>

					<ButtonLink href='/schedule' variant='secondary'>
						Schedule a time
					</ButtonLink>
				</div>
			</div>
		</div>
	);
}

export default HeaderContent;
