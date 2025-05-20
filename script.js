window.addEventListener("load", function () {
  alert("Bem-vindo ao site sobre a Evolução da Agricultura no Paraná!");
});

// Gráfico de barras com Chart.js
const ctx = document.getElementById('graficoIMA').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1975', '1985', '1995', '2006'],
    datasets: [{
      label: 'Índice de Modernização da Agricultura (IMA)',
      data: [20, 40, 35, 60],
      backgroundColor: 'rgba(20, 90, 50, 0.7)'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Rolar para o topo ao clicar no logo
document.querySelector('.navbar-brand').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});