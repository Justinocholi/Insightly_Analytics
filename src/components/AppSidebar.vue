<template>
  <aside class="sidebar">
    <div class="filters-panel">
      <h3>Filters</h3>
      
      <div class="filter-group">
        <label for="date-range">Date Range</label>
        <select id="date-range" v-model="dateRange">
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Custom Range</option>
        </select>
      </div>
      
      <div class="filter-group">
        <label for="metrics">Metrics</label>
        <select id="metrics" v-model="selectedMetric">
          <option>Revenue</option>
          <option>Users</option>
          <option>Conversions</option>
          <option>Engagement</option>
        </select>
      </div>
      
      <div class="filter-group">
        <label for="region">Region</label>
        <select id="region" v-model="selectedRegion">
          <option>All Regions</option>
          <option>North America</option>
          <option>Europe</option>
          <option>Asia</option>
          <option>Other</option>
        </select>
      </div>
    </div>
    
    <div class="quick-nav">
      <h3>Quick Navigation</h3>
      
      <ul class="nav-links">
        <li><a href="#" class="active"><i class="fas fa-chart-line"></i> Dashboard Overview</a></li>
        <li><a href="#"><i class="fas fa-shopping-cart"></i> Sales Reports</a></li>
        <li><a href="#"><i class="fas fa-users"></i> User Analytics</a></li>
        <li><a href="#"><i class="fas fa-server"></i> System Performance</a></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      dateRange: 'Last 7 Days',
      selectedMetric: 'Revenue',
      selectedRegion: 'All Regions'
    }
  }
}
</script>