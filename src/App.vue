<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTitle } from '@vueuse/core'
import { NeButton, NeTextInput } from '@nethesis/vue-components'

const windowTitle = useTitle()

const appName = 'vue-timer'
const defaultWorkMinsString = '30'
const defaultRelaxMinsString = '5'
const workMinutes = ref(defaultWorkMinsString)
const relaxMinutes = ref(defaultRelaxMinsString)
const countdown = ref(0)
const timerWorker = new Worker('src/timerWorker.ts')
windowTitle.value = appName

const formattedCountdown = computed(() => {
  const seconds = countdown.value
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
})

const minutesRemaining = computed(() => Math.floor(countdown.value / 60))

onMounted(() => {
  workMinutes.value = localStorage.getItem('workMinutes') || defaultWorkMinsString
  relaxMinutes.value = localStorage.getItem('relaxMinutes') || defaultRelaxMinsString
})

const startWork = () => {
  countdown.value = Number(workMinutes.value) * 60
  startTimer()
}

const startRelax = () => {
  countdown.value = Number(relaxMinutes.value) * 60
  startTimer()
}

const startTimer = () => {
  timerWorker.postMessage({ type: 'start', countdown: countdown.value })
  windowTitle.value = `${minutesRemaining.value} mins`

  timerWorker.onmessage = (e) => {
    // console.log('received from worker', e.data, new Date().toLocaleString()) ////

    if (e.data.type === 'expired') {
      const audio = new Audio('alarm-long.ogg')
      audio.play()
    } else if (e.data.type === 'tick') {
      countdown.value = e.data.countdown

      if (countdown.value % 60 === 0) {
        if (minutesRemaining.value > 0) {
          windowTitle.value = `${minutesRemaining.value} mins`
        } else {
          windowTitle.value = appName
        }
      }
    }
  }
}

const stopTimer = () => {
  timerWorker.postMessage({ type: 'stop' })
  countdown.value = 0
}

function onInputWorkMinutes(e: InputEvent) {
  const target = e.target as HTMLInputElement
  const value = Number(target.value)

  if (value > 0) {
    localStorage.setItem('workMinutes', value.toString())
  }
}

function onInputRelaxMinutes(e: InputEvent) {
  const target = e.target as HTMLInputElement
  const value = Number(target.value)

  if (value > 0) {
    localStorage.setItem('relaxMinutes', value.toString())
  }
}
</script>

<template>
  <div class="p-10 max-w-2xl m-auto flex items-center flex-col gap-12">
    <div class="flex items-center flex-col gap-6">
      <div class="text-primary-700 dark:text-primary-300 text-9xl text-center">
        {{ formattedCountdown }}
      </div>
      <NeButton size="lg" class="w-24" @click="stopTimer">Stop</NeButton>
    </div>
    <div class="space-y-6">
      <form @submit.prevent="startWork" class="flex justify-center gap-4 items-start">
        <NeTextInput
          type="number"
          v-model="workMinutes"
          class="w-40"
          helperText="Minutes"
          @input="onInputWorkMinutes"
        />
        <NeButton type="submit" kind="primary" size="lg">Start work</NeButton>
      </form>
      <form @submit.prevent="startRelax" class="flex justify-center gap-4 items-start">
        <NeTextInput
          type="number"
          v-model="relaxMinutes"
          class="w-40"
          helperText="Minutes"
          @input="onInputRelaxMinutes"
        />
        <NeButton type="submit" kind="primary" size="lg">Start relax</NeButton>
      </form>
    </div>
  </div>
</template>
