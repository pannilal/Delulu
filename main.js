javascript:(()=> {
    if (window.__chaos) return;
    window.__chaos = 1;

    document.body.style.overflow = 'hidden';

    const s = document.createElement('style');

    s.textContent = `
        * {
            animation: chaos .35s infinite alternate !important;
        }

        @keyframes chaos {
            from {
                transform: rotate(-2deg) scale(.98);
            }

            to {
                transform: rotate(2deg) scale(1.02);
            }
        }
    `;

    document.head.appendChild(s);

    document.querySelectorAll('img').forEach(i => {
        i.dataset.old = i.src;

        i.src =
            'data:image/svg+xml,' +
            encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="200"
                     height="200">
                    <text x="50%"
                          y="55%"
                          text-anchor="middle"
                          font-size="100">🗿</text>
                </svg>
            `);
    });

    document.querySelectorAll('button, a').forEach(e => {
        if (e.innerText.trim()) {
            e.innerText = '🚨 ' + e.innerText + ' 🚨';
        }
    });

    const d = document.createElement('div');

    d.innerHTML =
        '⚠️ YOUR BROWSER HAS BEEN<br>' +
        'ABSOLUTELY COOKED ⚠️';

    Object.assign(d.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '999999',
        display: 'grid',
        placeItems: 'center',
        background: '#000',
        color: '#0f0',
        font: 'bold 5vw monospace',
        textAlign: 'center'
    });

    document.body.appendChild(d);

    setTimeout(() => {
        d.remove();
    }, 3500);
})();
