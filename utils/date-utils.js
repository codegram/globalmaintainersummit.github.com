/**
 * Formats two given dates with the following patterns:
 * For dates within the same month:
 * June 8-9, 2021
 *
 * For dates that belong to different months:
 * June 8 - July 9, 2021
 *
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} locale
 * @returns
 */
export function formatDate(startDate, endDate, locale) {
  const startDay = startDate.getDate()
  const startMonth = startDate.toLocaleDateString(locale, {
    month: 'long',
  })
  const endDay = endDate.getDate()
  const endMonth = endDate.toLocaleDateString(locale, {
    month: 'long',
  })
  const year = startDate.getFullYear()

  return startMonth === endMonth
    ? `${startMonth} ${startDay}-${endDay}, ${year}`
    : `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`
}

/**
 * Build a URL to create an event in Google Calendar with the given parameters.
 * In order to set an all day event in Google Calendar, the end day has to be a day more of the actual date.
 * e.g. To create an event for dates June 8-9 it needs to be set June 8-10
 *
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} text
 * @param {*} details
 * @returns
 */
export function buildGoogleCalendarUrl(startDate, endDate, text, details) {
  const startDateFormatted = formatDateCalendar(startDate)
  const endDateFormatted = formatDateCalendar(nextDay(endDate))

  return `http://www.google.com/calendar/event?action=TEMPLATE&dates=${startDateFormatted}%2F${endDateFormatted}&text=${text}&&details=${details}`
}

/**
 * Format the given date to the following format:
 * YYYYMMDD
 *
 * @param {*} date
 * @returns
 */
function formatDateCalendar(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '')
}

/**
 * Calculates the next day of the given date
 *
 * @param {*} date
 * @returns
 */
function nextDay(date) {
  const nextDate = new Date(date)
  return new Date(nextDate.setDate(nextDate.getDate() + 1))
}
