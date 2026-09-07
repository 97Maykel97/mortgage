import Logo from '@/components/common/Logo';
import Container from '@/components/common/Container';

import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.top}>
					<Logo variant='secondary' />

					<a href='/webinar' className={styles.scheduleButton}>
						Schedule a time
					</a>
				</div>

				<hr className={styles.divider} />

				<div className={styles.content}>
					<div className={styles.contact}>
						<h2>Contact us</h2>
						<address>14511 Myford Road, Suite 100, Tustin, CA 92780</address>
						<a href='tel:+18004502010'>800-450-2010</a>
						<a href='mailto:customerservice@nafic.com'>
							customerservice@nafic.com
						</a>
					</div>

					<nav className={styles.navigation} aria-label='Education'>
						<h2>Education</h2>
						<a href='/blog'>Blog</a>
						<a href='/ebook'>Ebook</a>
						<a href='/webinar'>Webinar</a>
					</nav>

					<nav className={styles.navigation} aria-label='Legal'>
						<h2>Legal</h2>
						<a href='#'>
							Terms of use
						</a>
						<a href='#'>
							Privacy policy
						</a>
					</nav>

					<div className={styles.legalText}>
						<p>
							New American Funding makes Customer Service our number one
							priority. We encourage you to call our Corporate Customer Service
							department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm
							Pacific or email us anytime at customerservice@nafinc.com for any
							complaint resolution you may have regarding the origination of
							your loan.
						</p>

						<p>
							This site is not authorized by the New York State Department of
							Financial Services. No mortgage solicitation activity or loan
							applications for properties located in the State of New York can
							be facilitated through this site. Read more at{' '}
							<a
								href='https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99'
								target='_blank'
								rel='noreferrer'
							>
								newamericanfunding.com
							</a>
						</p>
					</div>
				</div>

				<hr className={styles.divider} />

				<div className={styles.bottom}>
					<p>
						If you received a letter from New American Funding and would like to
						be removed from our mailing list, please call 800-450-2010.
					</p>

					<p>
						© 2018 Broker Solutions, Inc. DBA New American Funding. All Rights
						Reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
