<template>
  <main class="main-content">
    <div class="dashboard-header">
      <h1>Dashboard Overview</h1>
      <p>Welcome back, John! Here's what's happening with your analytics today.</p>
    </div>

    <!-- Components -->
    <KpiCards />
    <AnalyticsCharts />
    <DataTable />
  </main>
</template>

<script>
import KpiCards from '@/components/KpiCards.vue'
import AnalyticsCharts from '@/components/AnalyticsCharts.vue'
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'DashboardView',
  components: {
    KpiCards,
    AnalyticsCharts,
    DataTable
  }
}
</script>
