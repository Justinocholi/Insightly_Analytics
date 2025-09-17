<template>
  <header>
    <div class="logo">Insightly</div>
    
    <nav class="nav-items">
      <router-link to="/" class="active">Dashboard</router-link>
      <a href="#">Reports</a>
      <a href="#">Settings</a>
    </nav>
    
    <div class="header-actions">
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search metrics and reports..." v-model="searchQuery">
      </div>
      
      <div class="action-buttons">
        <button class="btn" @click="exportData">
          <i class="fas fa-download"></i> Export
        </button>
        <button class="toggle-theme" @click="$emit('toggle-theme')">
          <i :class="themeIcon"></i>
        </button>
      </div>
      
      <div class="user-profile">
        <div class="user-avatar" @click="toggleDropdown">JD</div>
        <div class="dropdown-menu" :class="{ show: dropdownVisible }">
          <a href="#"><i class="fas fa-user-circle"></i> Account</a>
          <a href="#"><i class="fas fa-cog"></i> Settings</a>
          <a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchQuery: '',
      dropdownVisible: false
    }
  },
  computed: {
    themeIcon() {
      return this.$parent.theme === 'light-mode' ? 'fas fa-moon' : 'fas fa-sun'
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    exportData() {
      // Handle export functionality
      console.log('Exporting data...')
    },
    closeDropdown(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownVisible = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  }
}
</script>