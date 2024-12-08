# import sys
# from io import StringIO
# import tensorflow as tf
# # Create a simple model
# model = tf.keras.models.load_model('mri_modelll.h5')

# # Capture the model summary
# string_io = StringIO()
# sys.stdout = string_io  # Redirect stdout to capture the summary
# model.summary()
# sys.stdout = sys.__stdout__  # Reset stdout

# # Save the summary to a text file
# summary_str = string_io.getvalue()
# with open("model_summary.txt", "w", encoding="utf-8") as f:
#     f.write(summary_str)

# Open the text file containing the model summary
with open("model_summary.txt", "r", encoding="utf-8") as file:
    summary_text = file.read()

# Create a new image with a white background
import matplotlib.pyplot as plt

# Create a figure and axis
fig, ax = plt.subplots(figsize=(10, 8))

# Hide axes
ax.axis('off')

# Display the model summary as text
ax.text(0.1, 0.5, summary_text, fontsize=10, ha='left', va='center')

# Save the image
plt.savefig('model_summarymage.png', bbox_inches='tight', pad_inches=0.1)

