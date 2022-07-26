<script lang="ts">
import { defineComponent } from 'vue'

let id = 0

export default defineComponent({
  data() {
    return {
      newTodo: '',
      showState: 'all',
      todos: [
        { id: id++, text: 'Learn HTML', done: false },
        { id: id++, text: 'Learn JavaScript', done: false },
        { id: id++, text: 'Learn Vue', done: false },
      ],
      uncomState: false,
    }
  },
  computed: {
    filteredTodos(): Array<any> {
      if (this.showState == 'all') {
        return this.todos
      } else if (this.showState == 'com') {
        return this.todos.filter(t => t.done == true)
      } else {
        return this.todos.filter(t => t.done == false)
      }
    },
  },
  methods: {
    addTodo(): void {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo: object): void {
      this.todos = this.todos.filter(t => t !== todo)
    },
    changeAllState(): void {
      this.showState = 'all'
      this.uncomState = false
    },
    changeUncomState(): void {
      this.showState = 'uncom'
      this.uncomState = true
    },
    changeComState(): void {
      this.showState = 'com'
      this.uncomState = false
    },
  },
})
</script>

<template>
  <div id="outer">
    <span class="title">添加任务</span>
    <form @submit.prevent="addTodo">
      <input class="input border" v-model="newTodo" placeholder="今日任务" />
      <button class="addtodo border">添加</button>
    </form>
    <span class="title">任务列表</span>
    <ul>
      <li class="list" v-for="todo in filteredTodos" :key="todo.id">
        <input class="check-box" type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button class="remove-button" @click="removeTodo(todo)">x</button>
      </li>
    </ul>
    <div class="tips" v-if="uncomState">{{ filteredTodos.length }}个任务未完成</div>
    <div class="buttons">
      <button class="select-button" @click="changeAllState">所有任务</button>
      <button class="select-button" @click="changeUncomState">未完成</button>
      <button class="select-button" @click="changeComState">已完成</button>
    </div>
  </div>
</template>

<style>
#outer {
  margin: 10px 20px;
}
.title {
  line-height: 40px;
  font-size: 20px;
}
.input {
  width: 10rem;
  height: 25px;
}
.border {
  border: 1px solid gray;
}
.addtodo {
  margin: 10px;
  height: 25px;
  width: 35px;
  margin: 0 1rem;
}
.tips {
  margin: 10px 3rem 10px 0;
  color: red;
}
.list {
  margin: 5px 0;
}

.check-box {
  margin: 0 4px 0 0;
}
.done {
  text-decoration: line-through;
}
.remove-button {
  margin: 0 0 0 10px;
  border: 1px solid gray;
  height: 15px;
  width: 15px;
  line-height: 10px;
}

.buttons {
  display: flex;
  margin: 5px 0;
}
.select-button {
  margin: 0 10px 0 0;
  font-size: 15px;
}
</style>
