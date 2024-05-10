<script setup lang="ts">
import { ref, computed } from 'vue'

const workMinutes = ref(25)
const relaxMinutes = ref(5)
const countdown = ref(0)
const timerIntervalId = ref(0)

const formattedCountdown = computed(() => {
  const seconds = countdown.value
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
})

const startWork = () => {
  countdown.value = workMinutes.value * 60
  startTimer()
}

const startRelax = () => {
  countdown.value = relaxMinutes.value * 60
  startTimer()
}

const startTimer = () => {
  if (timerIntervalId.value) {
    clearInterval(timerIntervalId.value)
  }

  timerIntervalId.value = setInterval(() => {
    countdown.value--

    if (countdown.value === 0) {
      clearInterval(timerIntervalId.value)
      const audio = new Audio('alarm-long.ogg')
      audio.play()
    }
  }, 1000)
}
</script>

<template>
  <div>vue-timer</div>
  <form @submit.prevent="startWork">
    <input type="number" v-model="workMinutes" />
    <button type="submit">Start work</button>
  </form>
  <form @submit.prevent="startRelax">
    <input type="number" v-model="relaxMinutes" />
    <button type="submit">Start relax</button>
    <div>{{ formattedCountdown }}</div>
  </form>
</template>
