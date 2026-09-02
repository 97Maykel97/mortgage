import CustomerReviews from '@/components/home/CustomerReviews';
import Education from '@/components/Education/Education';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MortgageJourney from '@/components/home/MortgageJourney';
import MortgageTeam from '@/components/home/MortgageTeam';
import Resources from '@/components/Resources/Resources';
import Container from '@/components/common/Container';
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
					<Education showAllArticles />
					<Resources />
				</div>
			</Container>
			<Footer />
		</main>
	);
}
