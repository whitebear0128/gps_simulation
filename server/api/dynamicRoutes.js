import { Router } from 'express'
const router = Router()

// POST /api/route/compute
router.post('/compute', (req, res) => {
  // Example: { route: { start: {lat, lon, alt}, via: [{lat, lon, alt}, ...], goal: {lat, lon, alt} } }
  const { route } = req.body

  if (!route || !route.start || !route.goal || !Array.isArray(route.via)) {
    return res.status(400).json({ error: 'Missing or invalid route structure. Expect { route: { start, via, goal } }' })
  }

  // Validate all points have lat, lon, alt
  const points = [route.start, ...route.via, route.goal]
  for (const point of points) {
    if (typeof point.lat === 'undefined' || typeof point.lon === 'undefined' || typeof point.alt === 'undefined') {
      return res.status(400).json({ error: 'Each route point must have lat, lon, and alt.' })
    }
  }

  // Path planning logic placeholder
  res.json({
    message: 'Route computed successfully.',
    route
  })
})

export default router 