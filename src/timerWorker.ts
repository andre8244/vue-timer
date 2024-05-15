let countdown = 0
let timerIntervalId = 0

onmessage = function (e) {
  if (e.data.type === 'start') {
    countdown = e.data.countdown

    if (timerIntervalId) {
      clearInterval(timerIntervalId)
    }

    timerIntervalId = setInterval(() => {
      countdown--
      postMessage({ type: 'tick', countdown: countdown })

      if (countdown === 0) {
        clearInterval(timerIntervalId)
        postMessage({ type: 'expired' })
      }
    }, 1000)
  } else if (e.data.type === 'stop') {
    clearInterval(timerIntervalId)
  }
}
