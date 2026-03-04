const API_BASE = import.meta.env.VITE_API_BASE || 'https://legendary-doodle-q79pp964rq6g244jp-8080.app.github.dev/';

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