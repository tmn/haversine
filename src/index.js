const EARTH_RADIUS_METER = 6371000

const to_rad = (num) => num * Math.PI / 180

const haversine = (point1, point2) => {
  const φ1 = to_rad(point1.latitude)
  , φ2 = to_rad(point2.latitude)
  , Δλ = to_rad(point2.longitude - point1.longitude)

  const distance = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * EARTH_RADIUS_METER

  return distance
}

module.exports = haversine
