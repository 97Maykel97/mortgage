import Header from '@/components/Header';
import MortgageJourney from '@/components/MortgageJourney';
import MortgageTeam from '@/components/MortgageTeam';

export default function Home() {
	return (
		<main>
			<Header />
			<MortgageTeam />
			<MortgageJourney />
		</main>
	);
}
