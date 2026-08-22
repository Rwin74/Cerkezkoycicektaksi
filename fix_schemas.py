import re

# 1. Bolgeler
path = r'app/bolgeler/[slug]/page.js'
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'const jsonLd = \{.*?\};', '', content, flags=re.DOTALL)
content = content.replace('<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 2. Transfer
path = r'app/transfer/[slug]/page.js'
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'const jsonLd = \{.*?\};', '', content, flags=re.DOTALL)
content = content.replace('<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 3. Blog
path = r'app/blog/[slug]/page.js'
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'const jsonLd = \{.*?\};', '', content, flags=re.DOTALL)
content = content.replace('<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 4. Hizmetler
path = r'app/hizmetler/[slug]/page.js'
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'const jsonLd = \{.*?\};', '', content, flags=re.DOTALL)
content = content.replace('<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 5. Iletisim
path = r'app/iletisim/page.js'
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'const jsonLd = \{.*?\};', '', content, flags=re.DOTALL)
content = content.replace('<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '')
with open(path, 'w', encoding='utf-8') as f: f.write(content)

# 6. Fiyatlar
path = r'app/fiyatlar/page.js'
with open(path, 'r', encoding='utf-8') as f: content = f.read()
content = re.sub(r'const jsonLd = \{.*?\};', '', content, flags=re.DOTALL)
content = content.replace('<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />', '')
with open(path, 'w', encoding='utf-8') as f: f.write(content)
