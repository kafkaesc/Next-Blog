import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove .md from file name to get ID
		const id = fileName.replace(/\.md$/, '');

		// Read the markdown file as a string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the ID
		return { id, ...matterResult.data };
	});

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		/*if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }*/
		return a.date < b.date ? 1 : -1;
	});
}
