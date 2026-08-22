with open('app/site-haritasi/page.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('href={/bolgeler/}', 'href={/bolgeler/}')
content = content.replace('href={/transfer/}', 'href={/transfer/}')
content = content.replace('href={/blog/}', 'href={/blog/}')
content = content.replace('href={/hizmetler/}', 'href={/hizmetler/}')

with open('app/site-haritasi/page.js', 'w', encoding='utf-8') as f:
    f.write(content)
