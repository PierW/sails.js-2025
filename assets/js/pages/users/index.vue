<script setup>
const { users } = defineProps({
    users : {
        type: Object
    }
});
</script>

<template>
    <pre>
        {{ users }}
    </pre>
</template>