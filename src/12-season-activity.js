/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {

  if (!Number.isInteger(month) || month < 1 || month > 12) return null;

  const data = {
    1: {month: "january", season:"Winter" },
    2: {month: "february", season: "Winter"},
    3: {month: "march"  , season: "Spring"},
    4: {month: "april", season: "Spring"},
    5: {month: "may", season: "Spring"},
    6: {month: "june", season: "Summer"},
    7: {month: "july", season: "Summer"},
    8: {month: "august", season: "Summer"},
    9: {month: "september", season: "Autumn"},
    10:{month: "october", season: "Autumn"},
    11:{month: "november", season: "Autumn"},
    12:{month: "december", season: "Winter"}, 
  }

  if (!data[month]) return null;


  let userdata = (data[month]);
  let seasonis = userdata.season;


  if (seasonis === "Winter" && temperature < 0) {
    return {
      season: seasonis,
      activity: "skiing"
    }
  }
  if (seasonis === "Winter" && temperature >= 0) {
    return {
      season: seasonis,
      activity: "ice skating"
    }
  }
  if (seasonis === "Spring" && temperature > 20) {
    return {
      season: seasonis,
      activity: "hiking"
    }
  }
  if (seasonis === "Spring" && temperature <= 20) {
    return {
      season: seasonis,
      activity: "museum visit"
    }
  }
  if (seasonis === "Summer" && temperature > 35) {
    return {
      season: seasonis,
      activity: "swimming"
    }
  }
  if (seasonis === "Summer" && temperature <= 35) {
    return {
      season: seasonis,
      activity: "cycling"
    }
  }
  if (seasonis === "Autumn" && temperature > 15) {
    return {
      season: seasonis,
      activity: "nature walk"
    }
  }
  if (seasonis === "Autumn" && temperature <= 15) {
    return {
      season: seasonis,
      activity: "reading at a cafe"
    }
  }
}
