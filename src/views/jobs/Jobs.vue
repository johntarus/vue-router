<template>
    <h1 class="flex justify-center font-bold text-4xl">Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="flex justify-center" >
        <RouterLink :to="{name: 'JobsDetails', params: {id: job.id}}">
            <h2>{{job.title}}</h2>
        </RouterLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                    {title: "Frontend Developer", details: "competitive role", id: 1},
                    {title: "Backend Developer", details: "competitive role", id: 2},
                    {title: "Data Engineer", details: "competitive role", id: 3},
                    {title: "DevOps Engineer", details: "competitive role", id: 4}
                ],
            }
        }
    }
</script>