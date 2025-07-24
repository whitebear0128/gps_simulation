import { Router } from 'express'
const router = Router()

// POST /api/device/coordinates
router.post('/coordinates', (req, res) => {
  // Example: { uuid: 'device-uuid', lat: 0, lng: 0, alt: 0 }
  const { uuid, lat, lng, alt } = req.body

  // Basic validation
  if (!uuid || typeof lat === 'undefined' || typeof lng === 'undefined' || typeof alt === 'undefined') {
    return res.status(400).json({ error: 'Missing required fields: uuid, lat, lng, alt.' })
  }

  // Store coordinates logic placeholder
  res.json({ message: `Coordinates received for device ${uuid}.`, lat, lng, alt })
})

export default router 