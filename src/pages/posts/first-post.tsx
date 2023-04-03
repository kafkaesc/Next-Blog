import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
	return (
		<>
			<Head>
				<title>First Post — Next Blog</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
		</>
	);
}
