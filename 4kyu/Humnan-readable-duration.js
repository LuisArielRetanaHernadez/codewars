const formatDuraction = seconds => {
  if (seconds <= 0) return "now"

  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    console.log(minutes)
    const secondsReset = seconds % 60
    return `${minutes} minute${minutes > 1 ? "s" : ""} and ${secondsReset} seconds`
  }

  if (seconds >= 3600) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secondsReset = seconds % 60
    return `${hours} hour${hours > 1 ? "s" : ""}, ${minutes} minute${minutes > 1 ? "s" : ""} and ${secondsReset} seconds`
  }

  if (seconds >= 2419200 && 2419200 <= seconds) {
    const moths = Math.floor(seconds / 2419200)
    const days = Math.floor((seconds % 2419200) / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secondsReset = seconds % 60
    return `${moths} month${moths > 1 ? "s" : ""}, ${days} day${days > 1 ? "s" : ""}, ${hours} hour${hours > 1 ? "s" : ""}, ${minutes} minute${minutes > 1 ? "s" : ""} and ${secondsReset} seconds`
  }
}

console.log(formatDuraction(3200))