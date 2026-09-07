import Image from 'next/image';
import Container from '@/components/common/Container';
import styles from './ReportContents.module.scss';

type ReportItem = {
	title: string;
	description: string;
	image: string;
};

type ReportContentsProps = {
	title: string;
	description: string;
	items: ReportItem[];
};

function ReportContents({ title, description, items }: ReportContentsProps) {
	return (
		<section className={styles.report}>
			<Container>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				<div className={styles.list}>
					{items.map((item, index) => (
						<div key={index} className={styles.item}>
							<h2 className={styles.itemTitle}>{item.title}</h2>
							<p className={styles.itemDescription}>{item.description}</p>
							<Image
								className={styles.itemImage}
								src={item.image}
								alt={item.title}
								width={646}
								height={334}
							/>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}

export default ReportContents;
