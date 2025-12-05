# Script to replace the contact form with Google Forms iframe
import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the form pattern to replace
form_pattern = r'<form id="contact-form" class="contact-form">.*?</form>'

# Define the replacement iframe
iframe_replacement = '''<iframe 
      src="YOUR_GOOGLE_FORM_URL_HERE" 
      width="100%" 
      height="800" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Loading…
    </iframe>'''

# Replace the form with iframe
new_content = re.sub(form_pattern, iframe_replacement, content, flags=re.DOTALL)

# Write back to file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully replaced the contact form with Google Forms iframe!")
print("Don't forget to replace 'YOUR_GOOGLE_FORM_URL_HERE' with your actual Google Form URL.")
