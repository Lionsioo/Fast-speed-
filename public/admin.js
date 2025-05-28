const form = document.getElementById('imageForm');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('imageUrl').value;
  const description = document.getElementById('description').value;

  const res = await fetch('/api/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url, description })
  });

  const data = await res.json();
  displayImage(data);
});

function displayImage(image) {
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.description;
  gallery.appendChild(img);
}
