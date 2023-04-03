import styles from './layout.module.css';

export default function Layout({ children, ...props }: any) {
	return (
		<div {...props} className={styles.container}>
			{children}
		</div>
	);
}
