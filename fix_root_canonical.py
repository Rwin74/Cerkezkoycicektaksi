import os

page_path = os.path.join('app', 'page.js')
if os.path.exists(page_path):
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'export const metadata =' in content and 'alternates:' not in content:
        content = content.replace('export const metadata = {', 'export const metadata = {\n  alternates: {\n    canonical: \"/\",\n  },')
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {page_path}')
