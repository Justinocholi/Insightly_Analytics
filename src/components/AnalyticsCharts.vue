<template>
  <div class="charts-grid">
    <div class="chart-card">
      <div class="chart-header">
        <div class="chart-title">Revenue Over Time</div>
        <div class="chart-actions">
          <button><i class="fas fa-expand"></i></button>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="revenueChart" ref="revenueChart"></canvas>
      </div>
    </div>
    
    <div class="chart-card">
      <div class="chart-header">
        <div class="chart-title">Sales Per Region</div>
        <div class="chart-actions">
          <button><i class="fas fa-expand"></i></button>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="salesChart" ref="salesChart"></canvas>
      </div>
    </div>
    
    <div class="chart-card">
      <div class="chart-header">
        <div class="chart-title">Traffic Sources</div>
        <div class="chart-actions">
          <button><i class="fas fa-expand"></i></button>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="trafficChart" ref="trafficChart"></canvas>
      </div>
    </div>
    
    <div class="chart-card">
      <div class="chart-header">
        <div class="chart-title">User Activity Heatmap</div>
        <div class="chart-actions">
          <button><i class="fas fa-expand"></i></button>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="heatmapChart" ref="heatmapChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'AnalyticsCharts',
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // Revenue Line Chart
      const revenueCtx = this.$refs.revenueChart.getContext('2d')
      new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Revenue (in $)',
            data: [12500, 19500, 18000, 22000, 19500, 23000, 24582],
            borderColor: '#4361ee',
            tension: 0.3,
            fill: true,
            backgroundColor: context => {
              const ctx = context.chart.ctx
              const gradient = ctx.createLinearGradient(0, 0, 0, 250)
              gradient.addColorStop(0, 'rgba(67, 97, 238, 0.4)')
              gradient.addColorStop(1, 'rgba(67, 97, 238, 0.05)')
              return gradient
            }
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      })
      
      // Sales Bar Chart
      const salesCtx = this.$refs.salesChart.getContext('2d')
      new Chart(salesCtx, {
        type: 'bar',
        data: {
          labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
          datasets: [{
            label: 'Sales by Region',
            data: [12500, 9800, 8400, 4500, 2300],
            backgroundColor: [
              'rgba(67, 97, 238, 0.8)',
              'rgba(76, 201, 240, 0.8)',
              'rgba(114, 9, 183, 0.8)',
              'rgba(247, 37, 133, 0.8)',
              'rgba(230, 57, 70, 0.8)'
            ],
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      })
      
      // Traffic Doughnut Chart
      const trafficCtx = this.$refs.trafficChart.getContext('2d')
      new Chart(trafficCtx, {
        type: 'doughnut',
        data: {
          labels: ['Direct', 'Social', 'Referral', 'Organic', 'Email'],
          datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
              '#4361ee',
              '#4cc9f0',
              '#7209b7',
              '#f72585',
              '#e63946'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      })
      
      // Heatmap Chart
      const heatmapCtx = this.$refs.heatmapChart.getContext('2d')
      new Chart(heatmapCtx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Morning',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(67, 97, 238, 0.7)'
            },
            {
              label: 'Afternoon',
              data: [28, 48, 40, 19, 86, 27, 90],
              backgroundColor: 'rgba(76, 201, 240, 0.7)'
            },
            {
              label: 'Evening',
              data: [45, 25, 16, 36, 67, 82, 75],
              backgroundColor: 'rgba(114, 9, 183, 0.7)'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            }
          },
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            }
          }
        }
      })
    }
  }
}
</script>