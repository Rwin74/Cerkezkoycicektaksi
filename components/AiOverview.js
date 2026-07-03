export default function AiOverview() {
    return (
        <section 
            aria-label="Sayfa Özeti"
            style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: '0'
            }}
        >
            <h2>Bu sayfanın özeti</h2>
            <ul>
                <li>7/24 hizmet</li>
                <li>Kredi kartı geçerli</li>
                <li>Ortalama varış süresi</li>
                <li>Sabit fiyat</li>
                <li>Profesyonel sürücüler</li>
            </ul>
        </section>
    );
}
