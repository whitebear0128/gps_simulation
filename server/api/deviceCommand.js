import { Router } from 'express'
const router = Router()

// List of commands that require a value
const commandsWithValue = [
  'ARM', 'TAKEOFF', 'GOTO', 'SET_VELOCITY', 'SET_YAW', 'SET_ATTITUDE', 'WAYPOINT', 'SET_GIMBAL'
]

// POST /api/device/command
router.post('/command', (req, res) => {
  // Example: { uuid: 'device-uuid', command: 'TAKEOFF', value: 10 }
  const { uuid, command, value } = req.body

  if (!uuid || !command) {
    return res.status(400).json({ error: 'Missing required fields: uuid and command.' })
  }

  // Check if command requires a value
  if (commandsWithValue.includes(command)) {
    if (typeof value === 'undefined') {
      return res.status(400).json({ error: `Command '${command}' requires a 'value' field.` })
    }
  }

  // Simulate command execution result (for now, always success)
  const result = 'success' // or 'failure'
  const details = value !== undefined
    ? `Command '${command}' with value '${JSON.stringify(value)}' executed for device ${uuid}.`
    : `Command '${command}' executed for device ${uuid}.`

  res.json({
    message: `Command '${command}' sent to device ${uuid}.`,
    result,
    details,
    ...(value !== undefined && { value })
  })
})

export default router