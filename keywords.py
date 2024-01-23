import os

# Define the directory containing the HTML files
html_dir = 'pages'

# Get a list of all HTML files in the directory
html_files = [f for f in os.listdir(html_dir) if f.endswith('.html')]

# Initialize dictionaries for relative and absolute paths
keywords_relative = {}
keywords_absolute = {}

# Process each HTML file
for filename in html_files:
    # Remove the ".html" extension from filenames
    keyword = os.path.splitext(filename)[0]
    
    # Split the keyword into words
    words = keyword.split('_')  # assuming your filenames use underscores to separate words
    
    # Capitalize the first letter of the first and last words
    if len(words) > 1:
        words[0] = words[0].capitalize()
        words[-1] = words[-1].capitalize()
        keyword = ' '.join(words)
    else:
        keyword = keyword.capitalize()
    
    # Create paths with and without leading "/"
    path_relative = f'../{html_dir}/{filename}'
    path_absolute = f'/pages/{filename}'
    
    # Add entries to the dictionaries
    keywords_relative[keyword] = path_relative
    keywords_absolute[keyword] = path_absolute

# Generate the JavaScript code for the keywords objects
js_code_relative = "let keywordsRelative = {\n"
for key, value in keywords_relative.items():
    js_code_relative += f"    '{key}': '{value}',\n"
js_code_relative += "};"

js_code_absolute = "let keywordsAbsolute = {\n"
for key, value in keywords_absolute.items():
    js_code_absolute += f"    '{key}': '{value}',\n"
js_code_absolute += "};"

# Write the JavaScript code to the dictionary.js file
with open('dictionary.js', 'w') as js_file:
    js_file.write(js_code_relative)
    js_file.write('\n\n')
    js_file.write(js_code_absolute)

print('dictionary.js file generated successfully.')