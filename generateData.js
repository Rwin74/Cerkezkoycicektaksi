const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// 1. Generate 20 Services
const servicesList = [
    { title: "Şehir İçi Taksi", icon: "Car" },
    { title: "Havalimanı Transfer", icon: "Plane" },
    { title: "Şehirler Arası Taksi", icon: "Map" },
    { title: "VIP Transfer", icon: "Star" },
    { title: "Kurumsal Taksi", icon: "Briefcase" },
    { title: "Gar Transferi", icon: "Train" },
    { title: "Otogar Transferi", icon: "Bus" },
    { title: "Hastane Transferi", icon: "Activity" },
    { title: "Gece Taksisi", icon: "Moon" },
    { title: "Acil Taksi", icon: "Zap" },
    { title: "Öğrenci Taksisi", icon: "GraduationCap" },
    { title: "Evcil Hayvan Taksisi", icon: "Dog" },
    { title: "Düğün ve Nişan Taksisi", icon: "Heart" },
    { title: "AVM Transferi", icon: "ShoppingBag" },
    { title: "Turistik Gezi Taksisi", icon: "Camera" },
    { title: "Otel Transferi", icon: "Hotel" },
    { title: "Günübirlik Gezi Taksisi", icon: "Sun" },
    { title: "Büyük Bagajlı Taksi", icon: "Briefcase" },
    { title: "Kurye Taksi", icon: "Package" },
    { title: "7/24 Nöbetçi Taksi", icon: "Clock" }
];

const services = servicesList.map((s, i) => ({
    id: i + 1,
    title: s.title,
    slug: s.title.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, ''),
    description: `Çerkezköy ve çevresinde profesyonel ${s.title} hizmeti sunuyoruz. Güvenli, hızlı ve konforlu ulaşım için hemen bizi arayın.`,
    icon: s.icon,
    tag: i < 5 ? 'Popüler' : ''
}));
fs.writeFileSync(path.join(dataDir, 'hizmetler.json'), JSON.stringify(services, null, 2));


// 2. Generate 25 Neighborhoods
const neighborhoodsList = [
    "Gazi Mustafa Kemal Paşa", "Gazi Osman Paşa", "Fevzipaşa", "Yıldırım Beyazıt", 
    "Bağlık", "Fatih", "Cumhuriyet", "İstasyon", "Kızılpınar Atatürk", "Kızılpınar Gültepe",
    "Kızılpınar Namık Kemal", "Veliköy", "Kapaklı Merkez", "İsmetpaşa", "Bahçelievler",
    "Atatürk", "Cumhuriyet (Kapaklı)", "İnönü", "Karaağaç", "Kazım Karabekir",
    "Mimar Sinan", "Pınarça", "Yanıkağıl", "Bahçeağıl", "Karlı"
];

const neighborhoods = neighborhoodsList.map((n, i) => ({
    id: i + 1,
    title: `${n} Taksi`,
    slug: n.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '') + '-taksi',
    description: `${n} mahallesinde 7/24 hizmet veren en yakın taksi durağıyız. ${n} Taksi ihtiyacınız için anında kapınızdayız.`,
    neighborhood: n
}));
fs.writeFileSync(path.join(dataDir, 'mahalleler.json'), JSON.stringify(neighborhoods, null, 2));


// 3. Generate 30+ Blogs with Rich Content
const blogTopics = [
    "Çerkezköy Gezilecek Yerler ve Tarihi Mekanlar", 
    "Çerkezköy OSB Ulaşım Rehberi: İş Dünyasına Hızlı Taksi", 
    "İstanbul Havalimanı Transfer Süreleri ve Fiyatları", 
    "Güvenli Taksi Kullanımı: Dikkat Etmeniz Gereken 5 Şey", 
    "Çerkezköy'de Yaşam ve Ulaşım Rehberi 2026", 
    "Kredi Kartı Geçen Taksiler: Neden Çiçek Taksi'yi Seçmelisiniz?",
    "Gece Taksi Bulma Rehberi: 7/24 Kesintisiz Hizmet", 
    "Tekirdağ - Çerkezköy Arası Ulaşım Seçenekleri", 
    "Çerkezköy'den İstanbul'a Hızlı Transfer Yolları",
    "VIP Taksi Hizmeti Nedir? Kimler Tercih Etmeli?",
    "Kapaklı'dan Çerkezköy'e Nasıl Gidilir?",
    "Çerkezköy Tren Garı'ndan Merkeze Ulaşım",
    "Çerkezköy'deki En İyi Restoranlara Taksi ile Ulaşım",
    "Evcil Hayvan ile Taksi Yolculuğu Kuralları",
    "Düğün ve Özel Günler İçin Vip Araç Kiralama"
];

const blogs = [];
for (let i = 0; i < 30; i++) {
    const topic = blogTopics[i % blogTopics.length] + (i >= blogTopics.length ? ` - Bölüm ${Math.floor(i/blogTopics.length) + 1}` : '');
    const categories = ["Ulaşım", "Gezi Rehberi", "Transfer", "İpuçları", "Yaşam"];
    
    // Create rich HTML content
    const richContent = `
        <p><strong>${topic}</strong> konusu özellikle bölgemizde yaşayan ve bölgemizi ziyaret eden herkes için büyük önem taşıyor. Çiçek Taksi olarak bu rehberi sizlere faydalı olması amacıyla hazırladık.</p>
        
        <h3>Neden Bu Konu Önemli?</h3>
        <p>Günümüzde hızlı ve güvenilir ulaşım her şeyden önemli. Hem zamandan tasarruf etmek hem de konforlu seyahat edebilmek için doğru ulaşım tercihi yapmak şarttır. Çerkezköy ve çevresinde sürekli gelişen altyapı ile birlikte ulaşım alternatifleri de artmaktadır.</p>
        
        <h3>Bilinmesi Gereken 3 Temel Madde</h3>
        <ul>
            <li><strong>Zaman Planlaması:</strong> Yola çıkmadan önce güzergahı ve trafiği kontrol etmek hayat kurtarır.</li>
            <li><strong>Güvenlik:</strong> Sadece lisanslı ve kayıtlı ticari taksileri tercih edin.</li>
            <li><strong>Fiyatlandırma:</strong> Uzun mesafeli yolculuklarda önceden sabit fiyat anlaşması yapmak bütçenizi korur.</li>
        </ul>

        <h3>Sıkça Sorulan Sorular</h3>
        <p><strong>S: Kredi kartı geçerli mi?</strong><br/> C: Evet, Çiçek Taksi olarak tüm araçlarımızda POS cihazı bulunduruyoruz.</p>
        <p><strong>S: 7/24 ulaşabilir miyiz?</strong><br/> C: Elbette, gece nöbetçi araçlarımızla günün her saati hizmetinizdeyiz.</p>

        <blockquote>
            "Müşteri memnuniyeti bizim için sadece bir hedef değil, her gün ulaştığımız bir standarttır." - Çiçek Taksi
        </blockquote>

        <p>Eğer <strong>${topic}</strong> hakkında daha fazla bilgiye ihtiyacınız varsa veya hemen bir araç çağırmak isterseniz, tek tıkla bize ulaşabilirsiniz. Çerkezköy'ün en hızlı ve güvenilir taksisi olarak kapınızdayız.</p>
    `;

    blogs.push({
        id: i + 1,
        title: topic,
        slug: topic.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, ''),
        date: `2026-06-${(i % 28) + 1 < 10 ? '0' : ''}${(i % 28) + 1}`,
        readTime: `${(i % 5) + 3} dk`,
        category: categories[i % categories.length],
        excerpt: `${topic} hakkında bilmeniz gereken tüm detayları uzman şoförlerimizin gözünden sizler için derledik. Detaylar blog yazımızda.`,
        content: richContent
    });
}
fs.writeFileSync(path.join(dataDir, 'bloglar.json'), JSON.stringify(blogs, null, 2));

console.log("JSON data generated with rich content and lucide icons.");
