import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.hidden);

  const sortedPosts = posts.sort((a, b) =>
    b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'Aravind Putrevu',
    description: 'Helping developers solve their problems!',
    site: context.site,
    items: sortedPosts.slice(0, 30).map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
