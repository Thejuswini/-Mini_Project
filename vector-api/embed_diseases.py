import json
import faiss
import torch
from transformers import AutoTokenizer, AutoModel
import numpy as np

# Load disease data from JSON
import json

with open("diseases_data.json", "r", encoding="utf-8") as file:
    diseases = json.load(file)


tokenizer = AutoTokenizer.from_pretrained("dmis-lab/biobert-base-cased-v1.1")
model = AutoModel.from_pretrained("dmis-lab/biobert-base-cased-v1.1")

def embed_text(text):
    tokens = tokenizer(text, return_tensors='pt', padding=True, truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**tokens)
    return outputs.last_hidden_state[:, 0, :].squeeze().numpy()

# Create FAISS index
embedding_dim = 768  # BioBERT output size
index = faiss.IndexFlatL2(embedding_dim)

disease_embeddings = []
disease_names = []
for disease in diseases['diseases']:
    text = f"{disease['name']} {disease['symptoms']}"
    embedding = embed_text(text)
    disease_embeddings.append(embedding)
    
    disease_names.append(disease['name'])

# Convert to numpy and add to FAISS index
embeddings_array = np.array(disease_embeddings).astype('float32')
index.add(embeddings_array)

# Save index and disease names
faiss.write_index(index, "disease_faiss.index")
with open("disease_names.json", "w") as f:
    json.dump(disease_names, f)

print("FAISS index and disease names saved!")
