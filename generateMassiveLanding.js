const fs = require('fs');
const path = require('path');

const landings = [
  { slug: 'cerkezkoy-taksi', name: 'Çerkezköy Taksi', target: 'Çerkezköy', isAirport: false, neighborhoods: ['Gazi Mustafa Kemal Paşa', 'Bağlık', 'Gazi Osman Paşa', 'Fevzipaşa', 'Yıldırım Beyazıt'] },
  { slug: 'cerkezkoy-vip-taksi', name: 'Çerkezköy VIP Taksi', target: 'Çerkezköy VIP', isAirport: false, neighborhoods: ['OSB', 'Merkez', 'Lüks Oteller', 'Sanayi Bölgesi'] },
  { slug: 'cerkezkoy-havalimani-taksi', name: 'Çerkezköy Havalimanı Taksi', target: 'Havalimanı', isAirport: true, neighborhoods: ['İstanbul Havalimanı', 'Sabiha Gökçen', 'Çorlu Havalimanı'] },
  { slug: 'istanbul-havalimani-taksi', name: 'İstanbul Havalimanı Taksi', target: 'İstanbul Havalimanı', isAirport: true, neighborhoods: ['Arnavutköy', 'Çerkezköy-İstanbul Güzergahı', 'TEM Otoyolu'] },
  { slug: 'sabiha-gokcen-taksi', name: 'Sabiha Gökçen Taksi', target: 'Sabiha Gökçen', isAirport: true, neighborhoods: ['Pendik', 'Anadolu Yakası', 'E-80 Güzergahı'] },
  { slug: 'corlu-havalimani-taksi', name: 'Çorlu Havalimanı Taksi', target: 'Çorlu Havalimanı', isAirport: true, neighborhoods: ['Çorlu Merkez', 'Seymen', 'Ergene'] },
  { slug: 'tekirdag-taksi', name: 'Tekirdağ Taksi', target: 'Tekirdağ', isAirport: false, neighborhoods: ['Süleymanpaşa', 'Değirmenaltı', 'Çorlu', 'Ergene'] },
  { slug: 'kapakli-taksi', name: 'Kapaklı Taksi', target: 'Kapaklı', isAirport: false, neighborhoods: ['İsmetpaşa', 'Bahçelievler', 'Atatürk Mahallesi', 'Cumhuriyet', 'Karaağaç'] },
  { slug: 'saray-taksi', name: 'Saray Taksi', target: 'Saray', isAirport: false, neighborhoods: ['Ayaspaşa', 'Kemalpaşa', 'Büyükyoncalı', 'Küçükyoncalı'] }
];

const templates = [
    (l) => `<p><strong>${l.name}</strong> hizmetimiz ile ${l.target} bölgesindeki tüm ulaşım ihtiyaçlarınızı en üst düzey kalite standartlarında karşılıyoruz. Bilindiği üzere günümüz metropol yaşantısında zaman en kıymetli hazinemiz. Bölge sakinleri ve misafirler için ${l.neighborhoods.slice(0, 3).join(', ')} gibi kilit noktalarda hazır bekleyen araçlarımızla, saniyeler içinde kapınızdayız.</p>`,
    (l) => `<p>Güvenli bir yolculuk deneyimi arayanlar için ${l.name} en doğru tercih. Şehir içi trafik yoğunluğundan etkilenmeden, deneyimli şoförlerimizin bildiği alternatif rotalar üzerinden ${l.target} güzergahında kesintisiz hizmet veriyoruz. Ticari taksi ararken en çok dikkat edilen hijyen ve güvenlik konularında, filomuzu her gün dezenfekte ediyor ve düzenli bakıma sokuyoruz.</p>`,
    (l) => `<p>Peki ya fiyatlandırma? ${l.name} olarak her zaman bütçe dostu ve şeffaf bir tarife izliyoruz. ${l.target} merkezinden ${l.neighborhoods[0]} veya diğer mahallelere giderken sürpriz ücretlerle karşılaşmazsınız. Üstelik tüm araçlarımızda komisyonsuz olarak kredi kartı ile ödeme kolaylığı sağlıyoruz. Acil bir toplantıya, hastaneye ya da otogara yetişmeniz gerektiğinde tek yapmanız gereken iletişim numaramızdan taksi çağırmak.</p>`,
    (l) => `<p>Özellikle gece saatlerinde ${l.target} sokaklarında ulaşım zorlaşabilir. Ancak nöbetçi araç sistemimiz sayesinde haftanın 7 günü 24 saat ${l.neighborhoods.slice(-2).join(' ve ')} bölgelerinde dahi hızla yanınızda oluyoruz. Amacımız sadece sizi bir yerden bir yere götürmek değil; konforlu, huzurlu ve güvenilir bir transfer deneyimi yaşatmaktır. Rezervasyon işlemleriniz için WhatsApp destek hattımızı da kullanabilirsiniz.</p>`
];

const generateFAQ = (l) => {
    return `
    <div style="margin-top:40px; background:#f5f5f5; padding:20px; border-radius:10px;">
        <h3>${l.target} Bölgesi Sık Sorulan Sorular</h3>
        <ul>
            <li><strong>${l.target} taksi çağırdığımda ne kadar sürede gelir?</strong><br/> Ortalama 3-5 dakika içinde adresinize yönlendirilir.</li>
            <li><strong>${l.neighborhoods[0]} mahallesinden taksi bulabilir miyim?</strong><br/> Evet, 7/24 hizmet ağımız dahilindedir.</li>
            <li><strong>Bagaj kapasiteniz yeterli mi?</strong><br/> Geniş hacimli araç seçeneklerimiz mevcuttur. Lütfen rezervasyon sırasında belirtin.</li>
            <li><strong>Fiyatlar nasıl hesaplanıyor?</strong><br/> Taksimetre açılışından itibaren yasal tarife üzerinden net olarak hesaplanır, ek ücret talep edilmez.</li>
        </ul>
    </div>`;
}

const generateUniqueContent = (l) => {
    // Shuffle templates for some randomness but keep semantic structure
    const shuffledTemplates = [...templates].sort(() => 0.5 - Math.random());
    let content = `<h2>${l.name} - ${l.target} Ulaşım Rehberi</h2>`;
    
    // Add 4-5 dynamic paragraphs
    shuffledTemplates.forEach(t => {
        content += t(l);
    });

    // Add unique pricing logic or area logic based on type
    if(l.isAirport) {
        content += `<p><strong>${l.name}</strong> transferlerinde uçuş saatiniz bizim için en kritik detaydır. Erken rezervasyon sistemiyle sizi kapınızdan alıyor, özel bagaj taşıma desteğiyle doğrudan terminal girişine bırakıyoruz. Tatil veya iş seyahatiniz henüz yolda başlarken, siz arka koltukta dinlenmenin keyfini çıkarırsınız.</p>`;
    } else {
        content += `<p>Kısa mesafe veya uzun mesafe fark etmeksizin ${l.target} içi tüm noktalar (${l.neighborhoods.join(', ')}) güzergahımızdadır. İşe gidiş ve dönüş saatlerindeki yoğunlukta zaman kaybetmemeniz için şoförlerimiz canlı trafik uygulamalarından anlık veri alarak hareket eder.</p>`;
    }

    content += generateFAQ(l);

    return content;
};

const landingData = landings.map((l, index) => {
    return {
        id: index + 1,
        title: l.name,
        slug: l.slug,
        target: l.target,
        description: `${l.name} ile ${l.target} bölgesinde 7/24 kesintisiz ulaşım. Hızlı, güvenilir ve uygun fiyatlı taksi çağır.`,
        content: generateUniqueContent(l)
    }
});

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

fs.writeFileSync(path.join(dataDir, 'landingPages.json'), JSON.stringify(landingData, null, 2));

console.log('✅ 9 Semantic & Unique Landing Pages generated successfully!');
