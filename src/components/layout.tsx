import styles from './layout.module.css';
import utilStyles from '@/styles/utils.module.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Jared Hettinger';
export const siteTitle = 'Next Blog Sample Site';

export default function Layout({ children, home }: any) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="A sample blog using Next.js" />
				<meta name="og:title" content={siteTitle} />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt=""
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">Back to home</Link>
				</div>
			)}
		</div>
	);
}
