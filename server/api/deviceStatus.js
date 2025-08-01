import { Router } from 'express'
const router = Router()

// GET /api/device/status/:uuid
router.get('/status/:uuid', (req, res) => {
  const { uuid } = req.params
  // Example status object
  const status = {
    uuid,
    current_position: { lat: 43.6532, lon: -79.3832, alt: 120 },
    relative_altitude: 118.5,
    ground_speed: 12.4,
    vertical_speed: -1.8,
    heading: 270,
    yaw: 270,
    pitch: -3.5,
    roll: 0.8,
    flight_mode: 'AUTO',
    battery_voltage: 22.4,
    battery_current: 6.3,
    battery_level: 73,
    battery_temperature: 35.6,
    estimated_flight_time_remaining: 8.2,
    motor_rpms: [1300, 1320, 1290, 1310],
    ESC_status: 'OK',
    payload_status: 'attached',
    payload_weight: 1.8,
    camera_status: 'recording',
    camera_angle: { pitch: -30, yaw: 0 },
    recording_status: 'ON',
    image_timestamp: '2025-07-23T05:20:10.322Z',
    RC_signal_strength: 85,
    telemetry_link_quality: 78,
    latency: 240,
    obstacle_distance: { front: 4.5, left: 7.2, right: 6.8 },
    proximity_alerts: ['front'],
    RTK_status: 'FIXED',
    position_accuracy: { hdop: 0.7, vdop: 1.1 },
    failsafe_status: 'idle',
    return_to_home_triggered: false,
    emergency_landing_active: false,
    CPU_usage: 32.5,
    internal_temperature: 41.2,
    log_storage_usage: 78,
    waypoint_progress: { current: 3, total: 8 },
    distance_to_home: 253.7,
    geofence_status: 'inside',
    compass_interference: 'low',
    sensor_health: { IMU: 'OK', Barometer: 'OK', GPS: 'OK' }
  }
  res.json(status)
})

export default router 