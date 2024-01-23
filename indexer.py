import os

# Define the directory containing the HTML files
html_dir = 'pages'

# Get a list of all HTML files in the directory
html_files = [f for f in os.listdir(html_dir) if f.endswith('.html')]

# Sort the HTML files alphabetically
html_files.sort()

# Read the custom HTML template
with open('index_template.html', 'r') as template_file:
    template_html = template_file.read()

# Generate links to each HTML file
links_html = ''
for filename in html_files:
    # Remove the ".html" extension to display the link text
    link_text = os.path.splitext(filename)[0]
    
    # Split the link_text into words
    words = link_text.split('_')  # assuming your filenames use underscores to separate words
    
    # Capitalize the first letter of the first and last words
    if len(words) > 1:
        words[0] = words[0].capitalize()
        words[-1] = words[-1].capitalize()
        link_text = ' '.join(words)
    else:
        link_text = link_text.capitalize()
    
    link = f'<li><a href="{os.path.join(html_dir, filename)}">{link_text}</a></li>'
    links_html += link

# Insert the links into the template
index_html = template_html.replace('<!-- Links will be inserted here -->', links_html)

# Save the index page to a file
with open('index.html', 'w') as index_file:
    index_file.write(index_html)

print('Index page generated successfully.')