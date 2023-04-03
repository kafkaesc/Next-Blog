import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import Link from 'next/link';

import ProfilePic from '@/components/profile-pic';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Next Blog</title>
				<meta name="description" content="The Next Blog" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.center}>
					<h1>
						Hello World, read the{' '}
						<Link href="/posts/first-post">first post</Link>
					</h1>
					<ProfilePic />
				</div>
			</main>
		</>
	);
}
