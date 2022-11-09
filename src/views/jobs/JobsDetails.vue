<template>
    <div v-if="job" class="flex flex-col justify-center items-center">
    <h1>{{job.title}}</h1>
    <h2>The job is {{id}}</h2>
    <h1>{{job.detail}}</h1>
    </div>
    <div v-else class="flex justify-center">
        <p>Loading Job Details...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null,
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id).then(response => response.json())
            .then(data => this.job = data)
            .catch(error=> console.log(error.message))
        }
    }
</script>