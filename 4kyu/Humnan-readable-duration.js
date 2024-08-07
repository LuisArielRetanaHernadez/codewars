const formatDuraction = seconds => {
  if (seconds <= 0) return "now"

  const years = Math.floor(seconds / 31536000)
  const days = Math.floor((seconds % 31536000) / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secondsReset = seconds % 60

  const formateYears = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""
  const formateDays = days > 0 ? `${days} day${days > 1 ? "s" : ""}` : ""
  const formateHours = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : ""
  const formateMinutes = minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : ""
  const formateSeconds = secondsReset > 0 ? `${secondsReset} second${secondsReset > 1 ? "s" : ""}` : ""

  // return [formateYears, formateMoths, formateDays, formateHours, formateMinutes, formateSeconds].filter(el => el).join(", ").replace(/,([^,]*)$/, " and$1")

  return [formateYears, formateDays, formateHours, formateMinutes, formateSeconds].filter(el => el).join(", ").replace(/,(?=[^,]*$)/, " and")
}

console.log(formatDuraction(15731080))