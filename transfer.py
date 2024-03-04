from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/create-page', methods=['POST'])
def create_page():
    data = request.json
    pageTitle = data['pageTitle']
    sectionTitle = data['sectionTitle']
    content = data['content']

    # Construct the new wiki page based on the provided template
    new_page_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{pageTitle} - Echoes of the Gods Wiki</title>
    <link href="../style.css" rel="stylesheet"/>
</head>
<body>
    <header>
        <h1><a class="header-link" href="../homepage.html">{pageTitle}</a></h1>
    </header>
    <main>
        <h2>{sectionTitle}</h2>
        <p>{content}</p>
    </main>
    <footer>
        <p>© 2024 Echoes of the Gods D&amp;D Campaign</p>
    </footer>
</body>
</html>
"""
    # Save the new page
    os.makedirs('/pages', exist_ok=True)  # Ensure the directory exists
    with open(f'/pages/{pageTitle.replace(" ", "_").lower()}.html', 'w', encoding='utf-8') as f:
        f.write(new_page_content)

    return jsonify({'message': 'Page created successfully'})

if __name__ == '__main__':
    app.run(debug=True)
