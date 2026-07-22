import hizmetlerData from '@/data/hizmetler.json';
import bolgelerData from '@/data/bolgeler.json';
import bloglarData from '@/data/bloglar.json';
import transferlerData from '@/data/transferler.json';
import noktalarData from '@/data/noktalar.json';
import fiyatlarData from '@/data/fiyatlar.json';
import ekibimizData from '@/data/ekibimiz.json';
import subelerData from '@/data/subeler.json';
import landingPagesData from '@/data/landingPages.json';


export default function sitemap() {
    const baseUrl = 'https://www.cerkezkoycicektaksi.com';

    // Static pages
    const routes = [
        '',
        '/hizmetler',
        '/hakkimizda',
        '/fiyatlar',
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
        '/en/istanbul-airport-cerkezkoy-taxi'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic services
    const services = hizmetlerData.map((hizmet) => ({
        url: `${baseUrl}/hizmetler/${hizmet.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Dynamic neighborhoods
    const neighborhoods = bolgelerData.map((bolge) => ({
        url: `${baseUrl}/bolgeler/${bolge.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Dynamic transfers
    const transfers = transferlerData.map((transfer) => ({
        url: `${baseUrl}/transfer/${transfer.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const noktalar = noktalarData.map((nokta) => ({
        url: `${baseUrl}/noktalar/${nokta.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const fiyatlar = fiyatlarData.map((fiyat) => ({
        url: `${baseUrl}/fiyatlar/${fiyat.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const ekip = ekibimizData.map((personel) => ({
        url: `${baseUrl}/ekibimiz/${personel.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const subeler = subelerData.map((sube) => ({
        url: `${baseUrl}/subeler/${sube.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Dynamic blogs
    const blogs = bloglarData.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Dynamic landing pages
    const landingPages = landingPagesData.map((page) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...services, ...neighborhoods, ...transfers, ...noktalar, ...fiyatlar, ...ekip, ...subeler, ...blogs, ...landingPages];
}
