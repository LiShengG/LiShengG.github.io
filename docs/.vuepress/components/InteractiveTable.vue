<template>
  <div class="form-container">
    <!-- 添加新元素的表单 -->
    <form @submit.prevent="addItem" class="add-form">
      <input v-model="newItem.category" placeholder="分类" required />
      <input v-model="newItem.content" placeholder="题目内容" required />
      <select v-model="newItem.progress" required>
        <option value="" disabled>选择进展</option>
        <option value="未开始">未开始</option>
        <option value="进行中">进行中</option>
        <option value="已完成">已完成</option>
      </select>
      <button type="submit">添加</button>
    </form>

    <!-- 分类过滤的下拉菜单 -->
    <select v-model="selectedCategory" class="category-filter">
      <option value="">全部分类</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>

    <!-- 表格显示数据 -->
    <table class="items-table">
      <thead>
        <tr>
          <th>分类</th>
          <th>题目内容</th>
          <th>进展</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredItems" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.content }}</td>
          <td>
            <select v-model="item.progress" @change="saveItemsToLocalStorage">
              <option value="未开始">未开始</option>
              <option value="进行中">进行中</option>
              <option value="已完成">已完成</option>
            </select>
          </td>
          <td>
            <button @click="removeItem(index)" class="delete-btn">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      newItem: {
        category: '',
        content: '',
        progress: ''
      },
      items: [],
    };
  },
  computed: {
    filteredItems() {
      if (!this.selectedCategory) {
        return this.items;
      }
      return this.items.filter(item => item.category === this.selectedCategory);
    },
    categories() {
      return [...new Set(this.items.map(item => item.category))];
    },
  },
  methods: {
    addItem() {
      const newItem = {
        id: this.items.length + 1,
        ...this.newItem,
      };
      this.items.push(newItem);
      this.saveItemsToLocalStorage();
      this.newItem = { category: '', content: '', progress: '' };
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.saveItemsToLocalStorage();
    },
    saveItemsToLocalStorage() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    loadItemsFromLocalStorage() {
      const savedItems = localStorage.getItem('items');
      if (savedItems) {
        this.items = JSON.parse(savedItems);
      }
    }
  },
  mounted() {
    this.loadItemsFromLocalStorage();
  }
}
</script>

<style scoped>
.form-container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.add-form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.add-form input,
.add-form select {
  flex: 1;
  margin-right: 10px;
  padding: 5px;
  font-size: 14px;
}

.add-form button {
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.category-filter {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
}

.items-table th, 
.items-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}

.items-table th {
  background-color: #f4f4f4;
}

.items-table select {
  width: 100%;
  padding: 5px;
  font-size: 14px;
}

.delete-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}

.delete-btn:hover {
  background-color: #ff1a1a;
}
</style>
