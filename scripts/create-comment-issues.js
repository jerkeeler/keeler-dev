import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Octokit } from '@octokit/rest';

const POSTS_DIR = path.resolve('src/content/posts');
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

const postsNeedingIssues = files
  .map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    return { filename, filePath, data, content };
  })
  .filter(({ data }) => data.draft !== true && data.issueNumber === undefined);

if (postsNeedingIssues.length === 0) {
  console.log('No new posts need issues');
  process.exit(0);
}

for (const { filename, filePath, data, content } of postsNeedingIssues) {
  const slug = data.slug || filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

  try {
    const { data: issue } = await octokit.issues.create({
      owner,
      repo,
      title: `Comments: ${data.title}`,
      body: `Comment thread for [${data.title}](https://keeler.dev/posts/${slug})\n\nComments posted here will appear on the blog post. Please keep discussion respectful and on-topic.`,
      labels: ['blog-comments'],
    });

    const raw = fs.readFileSync(filePath, 'utf-8');
    const updated = raw.replace(/\n---/, `\nissueNumber: ${issue.number}\n---`);
    fs.writeFileSync(filePath, updated);
    console.log(`Created issue #${issue.number} for "${data.title}"`);
  } catch (err) {
    console.error(`Failed to create issue for "${data.title}":`, err.message);
  }
}
