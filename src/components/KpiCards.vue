<template>
  <div class="kpi-cards">
    <!-- Loop through KPI data -->
    <div class="kpi-card" v-for="card in kpiData" :key="card.title">
      <div class="kpi-header">
        <div class="kpi-title">{{ card.title }}</div>
        <div
          class="kpi-icon"
          :style="{ backgroundColor: card.iconBg, color: card.iconColor }"
        >
          <i :class="card.icon"></i>
        </div>
      </div>

      <!-- KPI Value -->
      <div class="kpi-value">{{ card.value }}</div>

      <!-- KPI Trend -->
      <div class="kpi-trend">
        <span :class="card.trendClass">
          <i :class="card.trendIcon"></i> {{ card.trendValue }}
        </span>
        <span>vs last week</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KpiCards', // ✅ multi-word, matches DashboardView import
  data() {
    return {
      kpiData: [
        {
          title: 'Revenue',
          value: '$24,582',
          icon: 'fas fa-dollar-sign',
          iconBg: 'rgba(67, 97, 238, 0.1)',
          iconColor: '#4361ee',
          trendClass: 'trend-up',
          trendIcon: 'fas fa-arrow-up',
          trendValue: '12.5%',
        },
        {
          title: 'Active Users',
          value: '5,372',
          icon: 'fas fa-users',
          iconBg: 'rgba(76, 201, 240, 0.1)',
          iconColor: '#4cc9f0',
          trendClass: 'trend-up',
          trendIcon: 'fas fa-arrow-up',
          trendValue: '7.3%',
        },
        {
          title: 'Conversion Rate',
          value: '4.62%',
          icon: 'fas fa-chart-pie',
          iconBg: 'rgba(114, 9, 183, 0.1)',
          iconColor: '#7209b7',
          trendClass: 'trend-up',
          trendIcon: 'fas fa-arrow-up',
          trendValue: '2.1%',
        },
        {
          title: 'Bounce Rate',
          value: '32.4%',
          icon: 'fas fa-exchange-alt',
          iconBg: 'rgba(247, 37, 133, 0.1)',
          iconColor: '#f72585',
          trendClass: 'trend-down',
          trendIcon: 'fas fa-arrow-down',
          trendValue: '3.2%',
        },
      ],
    }
  },
}
</script>
