function addToCart(itemName) {
  alert(`🛒 "${itemName}" has been added to your cart!`);
}
// Telegram
window.open('https://t.me/openai_support')
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('current-time').textContent = timeStr;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call