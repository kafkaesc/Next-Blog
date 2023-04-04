import utilStyles from '@/styles/utils.module.css';

import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '@/components/layout';

import { getSortedPostsData } from '../lib/posts';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }: any) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Freckled Latino. Native Texan. Software Engineer.</p>
				<p>
					Find me on <a href="https://twitter.com/_kafkaesc">Twitter</a> or{' '}
					<a href="https://github.com/kafkaesc">GitHub</a>.
				</p>
				<p>
					(This is a sample website. There is more to learn from the{' '}
					<a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
				</p>
				{/*<p>
					&gt; <Link href="/posts/first-post">First post</Link>
				</p>*/}
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Articles</h2>
				<ul>
					{allPostsData.map(({ date, id, title }: any) => {
						return (
							<li className={utilStyles.listItem} key={id}>
								{title}
								<br />
								{id}
								<br />
								{date}
							</li>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
}
