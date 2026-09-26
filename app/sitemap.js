import bloglarData from '@/data/bloglar.json';
import subelerData from '@/data/subeler.json';


export default function sitemap() {
    const baseUrl = 'https://www.cerkezkoycicektaksi.com';

    // Static pages
    const routes = [
        '',
        '/hizmetler',
        '/hakkimizda',
        '/fiyatlar',
        '/taksi-ucreti-hesaplama',
        '/cerkezkoy-taksi-randevu',
        '/blog',
        '/yorumlar',
        '/iletisim',
        '/subeler',
        '/ekibimiz',
        '/en',
        '/en/services',
        '/en/rates',
        '/en/contact',
        '/en/about-us',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }));

    const subeler = subelerData.map((sube) => ({
        url: `${baseUrl}/subeler/${sube.slug}`,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Dynamic blogs
    const blogs = bloglarData.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...routes, ...subeler, ...blogs];
}
