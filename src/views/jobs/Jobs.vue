<template>
    <div v-if="jobs.length">
    <h1 class="flex justify-center font-bold text-4xl">Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="flex justify-center" >
        <RouterLink :to="{name: 'JobsDetails', params: {id: job.id}}">
            <h2>{{job.title}}</h2>
        </RouterLink>
    </div>
    </div>
    <div v-else class="flex justify-center">
        <p>Loading Jobs</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [],
            }
    },
    mounted() {
        fetch("http://localhost:3000/jobs").then(response => response.json())
            .then(data => this.jobs = data)
            .catch(error=> console.log(error.message))
        }
    }
</script>