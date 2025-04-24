<script setup>
const props = defineProps({
      todos: {
        type: Array,
        required: true
      }
    });
</script>

<template>

<div>
    <h1 class="text-5xl text-center mb-5">
        Lista Todo
    </h1>
    <ul class="flex flex-wrap gap-2">
      <li v-for="todo in todos" :key="todo.id" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <strong class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">TITOLO: </strong>
        <span class="font-normal text-gray-700 dark:text-gray-400">{{ todo.title }}</span>
         <br>
        <strong class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">COMPLETATO:</strong>{{ todo.done ? '✔️' : '❌' }}
      </li>
    </ul>
  </div>
</template>