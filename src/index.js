const EARTH_RADIUS_METER = 6371000

const to_rad = (num) => num * Math.PI / 180

const haversine = (point1, point2) => {
  const φ1 = to_rad(point1.latitude)
  , φ2 = to_rad(point2.latitude)
  , Δφ = to_rad(point2.latitude - point1.latitude)
  , Δλ = to_rad(point2.longitude - point1.longitude)

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2)
  , c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  , distance = EARTH_RADIUS_METER * c

  return distance
}

module.exports = haversine
