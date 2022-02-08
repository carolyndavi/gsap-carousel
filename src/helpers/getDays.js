import { days } from './days'

export const getDays = () => {
  const today = new Date().getDay()
  const weeklyDays = []

  for (let i = 0; i <= days.length; i++) {
    weeklyDays.push(days[(today + i) % days.length])
  }

  return weeklyDays
}
