import os

routes = ['yorumlar', 'iletisim', 'fiyatlar', 'ekibimiz', 'hakkimizda', 'subeler']

for route in routes:
    page_path = os.path.join('app', route, 'page.js')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if metadata exists
        if 'export const metadata =' in content:
            if 'alternates:' not in content:
                content = content.replace('export const metadata = {', 'export const metadata = {\n  alternates: {\n    canonical: \"/' + route + '\",\n  },')
                with open(page_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {page_path}')
        else:
            print(f'No metadata in {page_path}')
