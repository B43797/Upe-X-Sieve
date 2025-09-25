// Populate figure thumbnails dynamically
document.addEventListener('DOMContentLoaded', function() {
  const figList = [
    {file: 'figures/upe_x_fig1.png', caption: 'Eratosthenes vs UPE-X spectral oscillations'},
    {file: 'figures/upe_x_fig2.png', caption: 'Gaussian smoothing kernel'},
    {file: 'figures/upe_x_fig3.png', caption: 'Tail error decay'},
    {file: 'figures/upe_x_fig4.png', caption: 'UPE-X score peak near true factor'},
    {file: 'figures/upe_x_fig5.png', caption: 'Histogram of factor rank positions'},
    {file: 'figures/upe_x_fig6.png', caption: 'Distribution of |tilde p − p| errors'}
  ];

  const grid = document.getElementById('figure-grid');
  if (!grid) return;

  figList.forEach(f => {
    const card = document.createElement('div');
    card.className = 'figure-card';

    const a = document.createElement('a');
    a.href = f.file;
    a.target = '_blank';

    const img = document.createElement('img');
    img.src = f.file;
    img.alt = f.caption;
    a.appendChild(img);

    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = f.caption;

    card.appendChild(a);
    card.appendChild(cap);
    grid.appendChild(card);
  });
});
