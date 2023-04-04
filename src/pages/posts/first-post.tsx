import Head from 'next/head';
import Link from 'next/link';
//import Script from 'next/script';

import Layout from '@/components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post — Next Blog</title>
			</Head>
			{/*<Script
				onLoad={() =>
					console.log(`script loaded correctly, window.FB has been populated`)
				}
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
			/>*/}
			<h1>First Post</h1>
		</Layout>
	);
}
