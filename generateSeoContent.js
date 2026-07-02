const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// NLP & Semantic Keywords
const nlpKeywords = [
    "taksi durağı", "7/24 ulaşım", "şehir içi ulaşım", "ticari taksi", 
    "güvenli ulaşım", "kredi kartı geçerli taksi", "hızlı ulaşım", 
    "VIP transfer", "havaalanı transferi", "çocuk koltuğu", 
    "şehirler arası ulaşım", "taksi çağır", "en yakın taksi", 
    "konforlu araç", "resmi taksi", "nöbetçi taksi", "bagajlı araç"
];

const getRandomKeywords = (count = 3) => {
    const shuffled = [...nlpKeywords].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).join(', ');
};

// 30+ FAQ Generator
const generateFAQs = (topicName) => {
    const faqs = [];
    for(let i=1; i<=30; i++) {
        faqs.push({
            q: `${topicName} için önceden rezervasyon (Soru ${i}) yapabilir miyim?`,
            a: `Kesinlikle. 7/24 esasına göre çalışan araçlarımız, ${getRandomKeywords()} özellikleriyle her zaman ${topicName} bölgesinde hizmetinizdedir. Seyahatinizi güvence altına alabilirsiniz.`
        });
    }
    return faqs;
};

// --- HİZMETLER ---
const hizmetList = [
    { title: "Şehir İçi Taksi", icon: "Car", tag: "Popüler", excerpt: "Çerkezköy içi güvenilir ve hızlı ulaşım." },
    { title: "Havalimanı Transfer", icon: "Plane", tag: "VIP", excerpt: "İstanbul ve Sabiha Gökçen Havalimanlarına VIP transfer." },
    { title: "Şehirler Arası Taksi", icon: "Map", tag: "Uzun Yol", excerpt: "Türkiye'nin her yerine konforlu yolculuk." },
    { title: "VIP Transfer", icon: "Star", tag: "Özel", excerpt: "Özel günleriniz için lüks araç kiralama." },
    { title: "Kurumsal Anlaşma", icon: "Briefcase", tag: "B2B", excerpt: "Şirket personelleri için düzenli taşıma hizmeti." },
    { title: "Kurye & Paket", icon: "Package", tag: "Hızlı", excerpt: "Acil gönderileriniz için motor ve taksi kurye." }
];

const services = hizmetList.map((h, i) => {
    const s = h.title.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    return {
        id: i + 1,
        title: h.title,
        slug: s,
        icon: h.icon,
        tag: h.tag,
        description: h.excerpt,
        content: `
            <h2>${h.title} Hizmeti Hakkında</h2>
            <p>Çiçek Taksi olarak <strong>${h.title}</strong> ihtiyaçlarınızda her zaman yanınızdayız. Gelişmiş araç filomuz ve tecrübeli şoförlerimizle, ${getRandomKeywords()} arayan müşterilerimiz için birinci sınıf hizmet sunuyoruz.</p>
            <h3>Neden Bizi Tercih Etmelisiniz?</h3>
            <p>Yılların deneyimi, güler yüzlü hizmet ve ${getRandomKeywords()} avantajlarımızla rakiplerimizden ayrılıyoruz.</p>
        `,
        faqs: generateFAQs(h.title)
    };
});

// --- BÖLGELER (Mahalleler) - Expanded to ~2000 words logic ---
const bolgeList = [
    "Merkez", "Gazi Mustafa Kemal Paşa", "Gazi Osman Paşa", "Fevzipaşa", 
    "Bağlık", "Yıldırım Beyazıt", "İstasyon", "Kızılpınar", "Veliköy", 
    "İstiklal", "Cumhuriyet", "Fatih", "Mimar Sinan", "Atatürk", "Bahçelievler"
];

const bolgeler = bolgeList.map((m, i) => {
    const s = m.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    
    // Yüksek kelime sayısı simülasyonu için yoğun ve semantik bir içerik bloğu
    let longContent = `<h2>${m} Taksi Hizmeti: Bölgesel Rehber</h2>`;
    for(let j=0; j<15; j++) {
        longContent += `
        <p>${m} bölgesi için profesyonel taksi hizmeti arıyorsanız doğru yerdesiniz. <strong>${getRandomKeywords()}</strong> standartlarına sahip araçlarımızla günün her saati size ulaşıyoruz. Çerkezköy'ün en hızlı gelişen ve nüfus yoğunluğu artan ${m} mahallesinde, trafiğin yoğun olduğu saatlerde bile alternatif rotalar kullanarak sizi gideceğiniz yere zamanında ulaştırıyoruz.</p>
        <h3>${m} Trafik ve Ulaşım Avantajları ${j+1}</h3>
        <p>Bölgedeki ${getRandomKeywords()} ihtiyaçlarına en hızlı yanıt veren durak olarak, ${m} sakinlerinin vazgeçilmez ulaşım partneriyiz. Modern şehir yaşantısında zamanın ne kadar değerli olduğunun farkındayız. Araçlarımız düzenli bakımdan geçer ve şoförlerimiz ileri sürüş teknikleri eğitimi almıştır.</p>
        `;
    }

    return {
        id: i + 1,
        neighborhood: m,
        slug: s,
        description: `${m} mahallesi en yakın taksi durağı. Kredi kartı geçerli, 7/24 kesintisiz hizmet.`,
        content: longContent,
        faqs: generateFAQs(m),
        lat: 41.2858 + (Math.random() * 0.05),
        lng: 28.0003 + (Math.random() * 0.05)
    };
});

// --- TRANSFERLER (100+ Combinations) ---
const originCities = ["Çerkezköy", "Kapaklı", "Saray", "Ergene"];
const destCities = [
    "İstanbul Havalimanı", "Sabiha Gökçen Havalimanı", "Çorlu Havalimanı", 
    "Esenler Otogar", "Alibeyköy Cep Otogarı", "Edirne", "Tekirdağ Merkez", 
    "Bursa", "Kırklareli", "Lüleburgaz", "Çorlu Devlet Hastanesi", "Silivri",
    "Beylikdüzü", "Avcılar", "Kadıköy", "Taksim", "Sarıyer", "Beşiktaş", "Şişli",
    "Ankara", "İzmir", "Antalya", "Bodrum", "Çeşme", "Marmaris"
];

const transfers = [];
let tId = 1;

originCities.forEach(origin => {
    destCities.forEach(dest => {
        const route = `${origin} - ${dest}`;
        const title = `${route} Transfer`;
        const slug = title.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
        
        transfers.push({
            id: tId++,
            title,
            slug,
            route,
            origin,
            dest,
            distance: `${Math.floor(Math.random() * 500 + 20)} km`,
            time: `${Math.floor(Math.random() * 5 + 1)} Saat`,
            description: `${route} arası özel transfer hizmeti. 7/24 konforlu VIP araçlar.`,
            content: `
                <h2>${route} Arası Güvenli Transfer</h2>
                <p>Seyahatinizi şansa bırakmayın. <strong>${origin}</strong> çıkışlı <strong>${dest}</strong> varışlı transferlerinizde VIP araç seçeneklerimiz ve tecrübeli ekibimizle hizmetinizdeyiz.</p>
                <p>${getRandomKeywords()} avantajlarımızla yorulmadan yolculuk yapın.</p>
            `,
            faqs: generateFAQs(title)
        });
    });
});

// --- NOKTALAR (POIs) ---
const pointList = [
    "Çerkezköy Devlet Hastanesi", "Çerkezköy Organize Sanayi Bölgesi (OSB)", 
    "Çerkezköy Adliyesi", "Çerkezköy Kaymakamlığı", "Çerkezköy Otogar", 
    "Çerkezköy Tren Garı", "Çerkezköy Center AVM", "İrmet Hospital", 
    "Optimed Hastanesi", "Kapaklı Devlet Hastanesi"
];

const noktalar = pointList.map((p, i) => {
    const slug = p.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    return {
        id: i + 1,
        title: `${p} Taksi`,
        slug,
        description: `${p} taksi durağı. Hızlı, güvenilir ve 7/24 aktif resmi taksi hizmeti.`,
        content: `
            <h2>${p} Ulaşım Rehberi</h2>
            <p><strong>${p}</strong> bölgesine yapacağınız ziyaretlerde ulaşım stresinizi ortadan kaldırıyoruz. Kapıdan kapıya <strong>${getRandomKeywords()}</strong> ayrıcalığı ile hizmet veriyoruz.</p>
        `,
        faqs: generateFAQs(p)
    };
});

// --- FİYATLAR (Pricing) ---
const fiyatlar = [
    { title: "Çerkezköy Taksi Fiyatları", base: 30, perKm: 25 },
    { title: "İstanbul Havalimanı Transfer Ücretleri", min: 1500, max: 2500 },
    { title: "Sabiha Gökçen Transfer Fiyatları", min: 2000, max: 3500 },
    { title: "Şehirler Arası Taksi Ücret Hesaplama", base: 50, perKm: 22 }
];

const fiyatVerisi = fiyatlar.map((f, i) => {
    const slug = f.title.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    return {
        id: i + 1,
        title: f.title,
        slug,
        description: `${f.title} detayları, km bazlı hesaplamalar ve 2026 güncel tarife bilgileri.`,
        content: `
            <h2>${f.title} ve 2026 Tarifeleri</h2>
            <p>Taksi kullanırken sürpriz ücretlerle karşılaşmamak için şeffaf fiyatlandırma politikamızı sunuyoruz. ${getRandomKeywords()} özelliklerimizle verdiğiniz ücretin tam karşılığını alırsınız.</p>
        `,
        pricingData: f
    };
});

// --- EKİBİMİZ (EEAT - Drivers) ---
const ekipList = [
    { name: "Ahmet Yılmaz", exp: "15 Yıl", tags: ["VIP Şoför", "İleri Sürüş"] },
    { name: "Mehmet Kaya", exp: "8 Yıl", tags: ["Şehir İçi Uzmanı", "İngilizce Bilen"] },
    { name: "Hasan Demir", exp: "20 Yıl", tags: ["Uzun Yol Kaptanı", "Güvenli Sürüş"] },
    { name: "Ali Çelik", exp: "12 Yıl", tags: ["Havalimanı Transfer Uzmanı", "Rehber"] }
];

const ekipVerisi = ekipList.map((e, i) => {
    const slug = e.name.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    return {
        id: i + 1,
        name: e.name,
        slug,
        experience: e.exp,
        specialties: e.tags,
        description: `${e.name} - Çiçek Taksi profesyonel şoför profili. ${e.exp} tecrübe.`,
        bio: `${e.name}, Çiçek Taksi ailesinin en değerli üyelerinden biridir. ${e.exp} boyunca trafik kurallarına harfiyen uyan, müşteri memnuniyetini ön planda tutan bir anlayışla çalışmaktadır. Uzmanlık alanları: ${e.tags.join(', ')}.`
    };
});

// --- BLOGLAR (100+ Topical Authority Articles) ---
const blogCategories = [
    "Taksi", "Ulaşım", "Otobüs", "Dolmuş", "Tren", "Havalimanı",
    "Gezilecek Yerler", "Oteller", "Restoranlar", "OSB",
    "Hastaneler", "Okullar", "Nöbetçi Eczaneler", "Fiyatlar"
];

const blogPrefixes = ["En İyi", "Rehberi:", "Nasıl Gidilir?", "Detaylı", "Hızlı", "Güvenilir", "2026 Güncel"];
const blogSubjects = ["Çerkezköy", "Kapaklı", "Saray", "Ergene", "Tekirdağ", "İstanbul Havalimanı", "Çorlu"];

const blogTopics = [];
let blogIdCounter = 1;

blogCategories.forEach(category => {
    blogSubjects.forEach(subject => {
        blogPrefixes.forEach(prefix => {
            if(blogIdCounter > 120) return; // Cap at ~120
            
            let title = "";
            if (prefix.includes("?")) {
                title = `${subject} ${category} ${prefix}`;
            } else if (prefix.includes(":")) {
                title = `${subject} ${category} ${prefix.replace(":", "")} Rehberi`;
            } else {
                title = `${prefix} ${subject} ${category} Rehberi`;
            }

            blogTopics.push({
                id: blogIdCounter++,
                title: title,
                category: category
            });
        });
    });
});

// Ayrıca manuel belirtilen CTR odaklı özel bloglar ekleyelim
const customBlogs = [
    { title: "Çerkezköy'de Taksi Nasıl Çağırılır?", category: "Taksi" },
    { title: "Gece Taksi Bulmanın En Kolay Yolu", category: "Taksi" },
    { title: "Çerkezköy OSB Ulaşım Rehberi", category: "OSB" },
    { title: "Kapaklı'dan İstanbul Havalimanına Kaç Dakika?", category: "Havalimanı" },
    { title: "Çerkezköy Taksi Telefonları", category: "Taksi" },
    { title: "VIP Taksi Nedir?", category: "VIP" },
    { title: "Taksi mi Transfer mi?", category: "Ulaşım" }
];

customBlogs.forEach(cb => {
    blogTopics.push({
        id: blogIdCounter++,
        title: cb.title,
        category: cb.category
    });
});

const blogs = blogTopics.map((topic, i) => {
    const slug = topic.title.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    
    // AI Summary (AI SEO) Content Block
    const aiSummary = `
        <div class="ai-summary" style="margin-top:40px; padding:20px; background:rgba(255, 204, 0, 0.1); border-left:4px solid var(--taxi-yellow); border-radius:8px;">
            <h3>🤖 Yapay Zeka (AI) Hızlı Özet</h3>
            <ul style="padding-left:20px; margin-top:10px;">
                <li>Bu rehber, <strong>${topic.title}</strong> hakkında en güncel ulaşım bilgilerini sunar.</li>
                <li>Çerkezköy ve çevresinde ${getRandomKeywords(2)} arayışlarınız için 7/24 hizmetimiz mevcuttur.</li>
                <li>Kesintisiz ve güvenli ulaşım için bizi hemen arayabilirsiniz.</li>
            </ul>
        </div>
    `;

    return {
        id: topic.id,
        title: topic.title,
        slug,
        category: topic.category,
        date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
        readTime: `${Math.floor(Math.random() * 5) + 3} dk okuma`,
        excerpt: `${topic.title} hakkında detaylı bilgiler, güncel ipuçları ve ulaşım rehberi.`,
        content: `
            <h2>${topic.title}</h2>
            <p>${topic.title} konusu, bölgesel ulaşım ağının en çok merak edilen başlıklarından biridir. Günümüzde ${getRandomKeywords()} ihtiyacı giderek artarken, bu konuda doğru bilgiye ulaşmak oldukça önemlidir.</p>
            <p>Çiçek Taksi olarak bölgedeki <strong>${topic.category}</strong> ekosistemine tam hakimiyetimizle sizlere en doğru rehberliği yapmayı hedefliyoruz.</p>
            ${aiSummary}
        `
    };
});

// --- ŞUBELER (Branches) ---
const subeList = [
    {
        name: "Gazi Mustafa Kemalpaşa Şubesi",
        phone: "0530 401 47 51",
        phoneLink: "05304014751",
        address: "Anfi Tiyatro Önü, Gazi Mustafa Kemalpaşa, Malkoçoğlu Cd., 59500 Çerkezköy / Tekirdağ",
        lat: 41.302861,
        lng: 28.001444,
        mapsLink: "https://www.google.com/maps?q=41.302861,28.001444",
        embedSrc: "https://maps.google.com/maps?q=41.302861,28.001444&z=15&output=embed"
    },
    {
        name: "Bağlık Şubesi",
        phone: "0546 401 47 51",
        phoneLink: "05464014751",
        address: "Bağlık Mahallesi, 59500 Çerkezköy / Tekirdağ",
        lat: 41.286712,
        lng: 28.002467,
        mapsLink: "https://www.google.com/maps?q=41.286712,28.002467",
        embedSrc: "https://maps.google.com/maps?q=41.286712,28.002467&z=15&output=embed"
    }
];

const subelerData = subeList.map((sube, i) => {
    const slug = sube.name.toLowerCase().replace(/ /g, '-').replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[^a-z0-9-]/g, '');
    return {
        id: i + 1,
        title: sube.name,
        slug,
        phone: sube.phone,
        phoneLink: sube.phoneLink,
        address: sube.address,
        lat: sube.lat,
        lng: sube.lng,
        mapsLink: sube.mapsLink,
        embedSrc: sube.embedSrc,
        description: `${sube.name} olarak 7/24 taksi hizmeti sunuyoruz. Hemen arayın: ${sube.phone}`,
        content: `
            <h2>${sube.name} Taksi Durağı</h2>
            <p>${sube.address} adresinde bulunan durağımız, bölgedeki ulaşım ihtiyaçlarınızı en hızlı şekilde karşılamak için 7/24 hizmet vermektedir. Deneyimli şoför kadromuz ve konforlu araçlarımızla size bir telefon kadar yakınız.</p>
        `,
        faqs: generateFAQs(sube.name)
    };
});

// Kaydetme İşlemleri
fs.writeFileSync(path.join(dataDir, 'hizmetler.json'), JSON.stringify(services, null, 2));
fs.writeFileSync(path.join(dataDir, 'bolgeler.json'), JSON.stringify(bolgeler, null, 2));
fs.writeFileSync(path.join(dataDir, 'transferler.json'), JSON.stringify(transfers, null, 2));
fs.writeFileSync(path.join(dataDir, 'noktalar.json'), JSON.stringify(noktalar, null, 2));
fs.writeFileSync(path.join(dataDir, 'fiyatlar.json'), JSON.stringify(fiyatVerisi, null, 2));
fs.writeFileSync(path.join(dataDir, 'ekibimiz.json'), JSON.stringify(ekipVerisi, null, 2));
fs.writeFileSync(path.join(dataDir, 'bloglar.json'), JSON.stringify(blogs, null, 2));

fs.writeFileSync(path.join(dataDir, 'subeler.json'), JSON.stringify(subelerData, null, 2));

console.log(`Programmatic SEO Content Generated Successfully!`);
console.log(`Bölgeler: ${bolgeler.length}, Transferler: ${transfers.length}, Noktalar: ${noktalar.length}, Bloglar: ${blogs.length}, Şubeler: ${subelerData.length}`);
