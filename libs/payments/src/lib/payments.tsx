import styles from './payments.module.scss';

/* eslint-disable-next-line */
export interface PaymentsProps {}

export function Payments(props: PaymentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Payments!</h1>
    </div>
  );
}

export default Payments;
