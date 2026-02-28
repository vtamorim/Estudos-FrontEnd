const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

export async function getProducts() {
  return fetch(`${API_BASE}/products`).then(r => r.json());
}

export async function addProduct(product) {
  return fetch(`${API_BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  }).then(r => r.json());
}