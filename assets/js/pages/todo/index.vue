<script setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps({
      todos: {
        type: Array,
        required: true
      }
    });
</script>

<template>


  <div class="container mx-auto">
    <nav class="mt-8">
      <Link href="/todos" class="text-blue-800 md:text-lg mr-4">Lista Task</Link>
      <Link href="/todos/create" class="text-blue-800 md:text-lg">Crea Task</Link>
    </nav>
    <h1 class="text-5xl text-center mb-5">
        Lista Todo
    </h1>
    <ul class="flex flex-wrap gap-2">
      <li v-for="todo in todos" :key="todo.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Link :href="'/todos/' + todo.id" class="block p-6">
          <strong class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">TITOLO: </strong>
          <span class="font-normal text-gray-700 dark:text-gray-400">{{ todo.title }}</span>
          <br>
          <strong class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">COMPLETATO:</strong>{{ todo.done ? '✔️' : '❌' }}
        </Link>
      </li>
    </ul>
  </div>
</template>