import ButtonLink from '@/components/ButtonLink';

import styles from './BurgerActions.module.scss';

type TBurgerActionsProps = {
	getStartedHref: string;
	scheduleHref: string;
};

function BurgerActions({ getStartedHref, scheduleHref }: TBurgerActionsProps) {
	return (
		<div className={styles.actions}>
			<ButtonLink href={getStartedHref} variant='primary' showArrow>
				Get started
			</ButtonLink>

			<ButtonLink href={scheduleHref} variant='secondary'>
				Schedule a time
			</ButtonLink>
		</div>
	);
}

export default BurgerActions;
