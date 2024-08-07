import html2canvas from 'html2canvas';
import Chart from 'chart.js/auto';

const generateChartImage = async (monthlyCosts: number[]): Promise<string> => {
  console.log('Generating chart image for monthly costs:', monthlyCosts);
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 333;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error('No se pudo obtener el contexto 2D del canvas');
    throw new Error('No se pudo obtener el contexto 2D del canvas');
  }

  // Establece el color de fondo del canvas antes de dibujar el gráfico
  ctx.fillStyle = '#FAFAFA'; // Color de fondo
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Calcula el promedio de los costos mensuales
  const averageCost = monthlyCosts.reduce((a, b) => a + b, 0) / monthlyCosts.length;
  console.log('Average cost:', averageCost);

  // Determina el color de las barras basado en si sobrepasan el promedio
  const backgroundColors = monthlyCosts.map(cost => cost > averageCost ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)');
  const borderColors = monthlyCosts.map(cost => cost > averageCost ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: 'Costo de Electricidad (MXN)',
        data: monthlyCosts,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Costo de Electricidad Mensual (MXN)',
          font: {
            size: 40 // Aumenta el tamaño de la fuente del título
          }
        },
        legend: {
          labels: {
            font: {
              size: 30 // Aumenta el tamaño de la fuente de la leyenda
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 30 // Aumenta el tamaño de la fuente de las etiquetas del eje X
            }
          },
          title: {
            display: true,
            text: 'Meses',
            font: {
              size: 30 // Aumenta el tamaño de la fuente del título del eje X
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return `$${value}`;
            },
            font: {
              size: 30 // Aumenta el tamaño de la fuente de las etiquetas del eje Y
            }
          },
          title: {
            display: true,
            text: 'Costo (MXN)',
            font: {
              size: 30 // Aumenta el tamaño de la fuente del título del eje Y
            }
          }
        }
      }
    }
  });

  document.body.appendChild(canvas); // Asegurarse de que el canvas esté en el DOM

  try {
    // Añade un pequeño retraso para asegurar que el canvas esté completamente renderizado
    await new Promise(resolve => setTimeout(resolve, 100));
    const canvasImage = await html2canvas(canvas);
    const imageDataURL = canvasImage.toDataURL('image/png');
    console.log('Generated chart image data URL:', imageDataURL);
    document.body.removeChild(canvas); // Elimina el canvas del DOM después de capturarlo
    return imageDataURL;
  } catch (error) {
    console.error('Error generating chart image with html2canvas:', error);
    document.body.removeChild(canvas); // Asegurarse de eliminar el canvas del DOM en caso de error
    throw error;
  }
};

export default generateChartImage;
