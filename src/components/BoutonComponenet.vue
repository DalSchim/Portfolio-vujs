<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Bouton',
        },
    },

    name: 'BoutonComponent',
}


</script>

<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{ text }}
    </button>

</template>

<style scoped>

</style>