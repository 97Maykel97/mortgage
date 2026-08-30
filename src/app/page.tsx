import CustomerReviews from '@/components/CustomerReviews';
import Education from '@/components/Education/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MortgageJourney from '@/components/MortgageJourney';
import MortgageTeam from '@/components/MortgageTeam';
import Resources from '@/components/Resources/Resources';
import Container from '@/components/Container';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main id='home-page'>
			<Header />
			<MortgageTeam />
			<MortgageJourney />
			<CustomerReviews />
			<Container>
				<div className={styles.educationResources}>
					<Education />
					<Resources />
				</div>
			</Container>
			<Footer />
		</main>
	);
}
