<script setup>
import { Link } from '@inertiajs/vue3'

function sendForm(e){
  console.log("Form Inviato")
}

</script>

<template>

<div class="container mx-auto">
  <nav class="mt-8">
      <Link href="/todos" class="text-blue-800 md:text-lg mr-4">Lista Task</Link>
      <Link href="/todos/create" class="text-blue-800 md:text-lg">Crea Task</Link>
    </nav>
    <form class="w-full max-w-sm mx-auto" @submit.prevent="sendForm">
      <div class="flex items-center border-b border-blue-500 py-2">
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Scrivi Task" aria-label="Full name">
        <button class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
          Invia
        </button>
      </div>
    </form>
</div>

</template>