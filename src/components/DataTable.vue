<template>
  <div class="data-table-section">
    <!-- Table Header -->
    <div class="table-header">
      <h2>Recent Transactions</h2>
      <button class="btn" @click="exportCSV">
        <i class="fas fa-download"></i> Export CSV
      </button>
    </div>

    <!-- Transactions Table -->
    <table>
      <thead>
        <tr>
          <th @click="sortTable('id')">ID <i class="fas fa-sort"></i></th>
          <th @click="sortTable('date')">Date <i class="fas fa-sort"></i></th>
          <th @click="sortTable('customer')">Customer <i class="fas fa-sort"></i></th>
          <th @click="sortTable('status')">Status <i class="fas fa-sort"></i></th>
          <th @click="sortTable('amount')">Amount <i class="fas fa-sort"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in sortedTransactions" :key="transaction.id">
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.date }}</td>
          <td>{{ transaction.customer }}</td>
          <td :style="{ color: getStatusColor(transaction.status) }">
            {{ transaction.status }}
          </td>
          <td>{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Footer with Pagination -->
    <div class="table-footer">
      <div>Showing 1 to 5 of 48 entries</div>

      <div class="pagination">
        <button @click="prevPage"><i class="fas fa-chevron-left"></i></button>
        <button :class="{ active: currentPage === 1 }" @click="currentPage = 1">1</button>
        <button :class="{ active: currentPage === 2 }" @click="currentPage = 2">2</button>
        <button :class="{ active: currentPage === 3 }" @click="currentPage = 3">3</button>
        <button :class="{ active: currentPage === 4 }" @click="currentPage = 4">4</button>
        <button @click="nextPage"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable', // ✅ multi-word, safe with ESLint
  data() {
    return {
      transactions: [
        { id: '#TR-1234', date: 'Jul 10, 2023', customer: 'John Doe', status: 'Completed', amount: '$235.99' },
        { id: '#TR-1233', date: 'Jul 10, 2023', customer: 'Sarah Johnson', status: 'Completed', amount: '$198.50' },
        { id: '#TR-1232', date: 'Jul 9, 2023', customer: 'Michael Brown', status: 'Pending', amount: '$412.75' },
        { id: '#TR-1231', date: 'Jul 9, 2023', customer: 'Emily Wilson', status: 'Completed', amount: '$374.20' },
        { id: '#TR-1230', date: 'Jul 8, 2023', customer: 'David Lee', status: 'Failed', amount: '$612.00' }
      ],
      sortField: 'date',
      sortDirection: 'desc',
      currentPage: 1
    }
  },
  computed: {
    sortedTransactions() {
      return [...this.transactions].sort((a, b) => {
        let modifier = this.sortDirection === 'desc' ? -1 : 1
        if (a[this.sortField] < b[this.sortField]) return -1 * modifier
        if (a[this.sortField] > b[this.sortField]) return 1 * modifier
        return 0
      })
    }
  },
  methods: {
    sortTable(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortField = field
        this.sortDirection = 'asc'
      }
    },
    getStatusColor(status) {
      switch (status) {
        case 'Completed': return '#2ecc71'
        case 'Pending': return '#f39c12'
        case 'Failed': return '#e74c3c'
        default: return '#495057'
      }
    },
    exportCSV() {
      console.log('Exporting CSV...')
      // ✅ Later: implement real CSV export logic here
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < 4) this.currentPage++
    }
  }
}
</script>
