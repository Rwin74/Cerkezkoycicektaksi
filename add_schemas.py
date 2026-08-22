import os

# 1. Bolgeler
bolgeler_path = r'app\bolgeler\[slug]\page.js'
with open(bolgeler_path, 'r', encoding='utf-8') as f: content = f.read()
schema_code = """
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": ${bolge.neighborhood} Taksi - Çiçek Taksi,
        "description": bolge.description,
        "areaServed": bolge.neighborhood,
        "telephone": "+905464014751",
        "url": https://www.cerkezkoycicektaksi.com/bolgeler/
    };
"""
if "const jsonLd =" not in content:
    content = content.replace('const popularServices = hizmetlerData.slice(0, 3);', 'const popularServices = hizmetlerData.slice(0, 3);\n' + schema_code)
    content = content.replace('return (', 'return (\n        <>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />')
    with open(bolgeler_path, 'w', encoding='utf-8') as f: f.write(content)

# 2. Transfer
transfer_path = r'app\transfer\[slug]\page.js'
with open(transfer_path, 'r', encoding='utf-8') as f: content = f.read()
schema_code2 = """
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Taxi Transfer",
        "name": transfer.title,
        "description": transfer.description,
        "provider": { "@type": "TaxiService", "name": "Çiçek Taksi" },
        "areaServed": transfer.dest,
        "url": https://www.cerkezkoycicektaksi.com/transfer/
    };
"""
if "const jsonLd =" not in content:
    content = content.replace('if (!transfer) {', schema_code2 + '\n    if (!transfer) {')
    content = content.replace('return (', 'return (\n        <>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />')
    with open(transfer_path, 'w', encoding='utf-8') as f: f.write(content)

# 3. Blog
blog_path = r'app\blog\[slug]\page.js'
with open(blog_path, 'r', encoding='utf-8') as f: content = f.read()
schema_code3 = """
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "description": blog.excerpt,
        "author": { "@type": "Person", "name": "Serhat Çiçek" },
        "datePublished": blog.date,
        "url": https://www.cerkezkoycicektaksi.com/blog/
    };
"""
if "const jsonLd =" not in content:
    content = content.replace('if (!blog) {', schema_code3 + '\n    if (!blog) {')
    content = content.replace('return (', 'return (\n        <>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />')
    with open(blog_path, 'w', encoding='utf-8') as f: f.write(content)

# 4. Hizmetler
hizmet_path = r'app\hizmetler\[slug]\page.js'
with open(hizmet_path, 'r', encoding='utf-8') as f: content = f.read()
schema_code4 = """
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": hizmet.title,
        "description": hizmet.description,
        "provider": { "@type": "TaxiService", "name": "Çiçek Taksi" },
        "url": https://www.cerkezkoycicektaksi.com/hizmetler/
    };
"""
if "const jsonLd =" not in content:
    content = content.replace('if (!hizmet) {', schema_code4 + '\n    if (!hizmet) {')
    content = content.replace('return (', 'return (\n        <>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />')
    with open(hizmet_path, 'w', encoding='utf-8') as f: f.write(content)

# 5. Iletisim
iletisim_path = r'app\iletisim\page.js'
with open(iletisim_path, 'r', encoding='utf-8') as f: content = f.read()
schema_code5 = """
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "İletişim - Çiçek Taksi",
        "url": "https://www.cerkezkoycicektaksi.com/iletisim"
    };
"""
if "const jsonLd =" not in content:
    content = content.replace('export default function Iletisim() {', 'export default function Iletisim() {\n' + schema_code5)
    content = content.replace('return (', 'return (\n        <>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />')
    with open(iletisim_path, 'w', encoding='utf-8') as f: f.write(content)

# 6. Fiyatlar
fiyatlar_path = r'app\fiyatlar\page.js'
if os.path.exists(fiyatlar_path):
    with open(fiyatlar_path, 'r', encoding='utf-8') as f: content = f.read()
    schema_code6 = """
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Taksi Ücretleri - Çiçek Taksi",
        "url": "https://www.cerkezkoycicektaksi.com/fiyatlar"
    };
    """
    if "const jsonLd =" not in content:
        content = content.replace('export default function Fiyatlar() {', 'export default function Fiyatlar() {\n' + schema_code6)
        content = content.replace('return (', 'return (\n        <>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />')
        with open(fiyatlar_path, 'w', encoding='utf-8') as f: f.write(content)

print("Schemas added")
