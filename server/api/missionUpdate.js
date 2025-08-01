import { Router } from 'express'
const router = Router()

// POST /api/device/mission
router.post('/mission', (req, res) => {
  // Example: see mission structure in the latest requirements
  const mission = req.body

  // Basic validation for required fields
  const requiredFields = [
    'mission_id', 'device_id', 'mission_status', 'valid', 'mission_type',
    'release_time', 'last_updated', 'start', 'goal', 'mission_distance_meters',
    'expected_duration_sec', 'priority', 'scheduled_timeslot',
    'environment_constraints', 'payload_info', 'route_version'
  ]
  for (const field of requiredFields) {
    if (typeof mission[field] === 'undefined') {
      return res.status(400).json({ error: `Missing required field: ${field}` })
    }
  }

  // Validate start and goal structure
  const checkPoint = (pt, name) => {
    if (typeof pt.lat === 'undefined' || typeof pt.lon === 'undefined' || typeof pt.alt === 'undefined') {
      return `${name} must have lat, lon, alt.`
    }
    return null
  }
  let err = checkPoint(mission.start, 'start') || checkPoint(mission.goal, 'goal')
  if (err) return res.status(400).json({ error: err })

  // Validate via points if present
  if (mission.via && !Array.isArray(mission.via)) {
    return res.status(400).json({ error: 'via must be an array if present.' })
  }
  if (mission.via) {
    for (const [i, pt] of mission.via.entries()) {
      err = checkPoint(pt, `via[${i}]`)
      if (err) return res.status(400).json({ error: err })
    }
  }

  // Mission update logic placeholder
  res.status(200).json({
    message: `Mission update received for device ${mission.device_id}.`,
    mission
  })
})

export default router 