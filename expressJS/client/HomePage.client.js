let isLoading = false;
const btnRefreshToken = document.getElementById('btn-refresh-token');

async function refreshToken() {
    if (isLoading) return;

    btnRefreshToken.classList.add('loading');

    isLoading = true;
    try {
        const res = await axios.get('/refresh-token');
    } catch (e) {}

    btnRefreshToken.classList.remove('loading');

    setTimeout(() => {
        location.reload();
    }, 500);
    isLoading = false;
}

btnRefreshToken.addEventListener('click', () => {
    refreshToken();
});
