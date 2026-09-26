export default function AreaRideGuide({ area, kind = 'local' }) {
  const isAirport = kind === 'airport';
  const isSpecial = kind === 'special';

  return (
    <div className="seo-content-block" style={{lineHeight: '1.8', fontSize: '1.05rem', color: '#333'}}>
      <h2>{area} yolculuğu için bilgi alın</h2>
      <p>
        Çerkezköy'den {area} yönüne yolculuk planlıyorsanız, çağrı sırasında alınış adresinizi ve varış noktanızı paylaşın.
        {isAirport ? ' Havalimanı ve terminal bilgisini, uçuş saatinizi ve bagaj adedini de belirtin.' : ''}
        {isSpecial ? ' İhtiyacınız olan araç türünü belirtip bu seçeneğin uygunluğunu sorun.' : ''}
        {' '}Bu güzergâh için araç uygunluğunu, tahmini varış süresini ve yolculuk ücretinin nasıl hesaplanacağını telefonda teyit edin.
      </p>
      <h3>Aramadan önce netleştirin</h3>
      <ul>
        <li>Alınış adresi ve varış noktası</li>
        <li>Yolculuk için istediğiniz saat ve yolcu sayısı</li>
        <li>Büyük bagaj veya özel araç ihtiyacı</li>
        <li>Ücretin hesaplanması, ödeme seçenekleri ve varsa geçiş masrafları</li>
      </ul>
      <p>
        Sitedeki ücret hesaplama aracı mesafeye dayalı tahmin verir. Trafik, seçilen güzergâh ve geçerli tarife son tutarı etkileyebilir;
        kesin bilgiyi yolculuk öncesinde alın.
      </p>
      <p>
        Gazi Mustafa Kemal Paşa şubesi: <a href="tel:+905304014751">0530 401 47 51</a>.
        {' '}Bağlık şubesi: <a href="tel:+905464014751">0546 401 47 51</a>.
      </p>
    </div>
  );
}
