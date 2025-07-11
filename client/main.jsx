import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import L from 'leaflet'
import 'leaflet-routing-machine'

// 蓝色图标
const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
})

// 红色图标
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
})

function App () {
  const mapRef = useRef(null)
  const routingRef = useRef(null)
  const deviceRef = useRef(null)
  const destRef = useRef(null)

  const [startLat, setStartLat] = useState(35.7165526)
  const [startLng, setStartLng] = useState(139.4157575)
  const [destLat, setDestLat] = useState('')
  const [destLng, setDestLng] = useState('')

  // 初始化地图
  useEffect(() => {
    const map = L.map('map', {
      fullscreenControl: true,
      minZoom: 1
    }).setView([startLat, startLng], 16)
    mapRef.current = map

    L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      noWrap: true,
      bounds: [[-90, -180], [90, 180]]
    }).addTo(map)

    L.control.scale().addTo(map)

    const device = L.marker([startLat, startLng], {
      icon: blueIcon,
      title: 'Device'
    }).addTo(map).bindPopup('Start Point').openPopup()
    deviceRef.current = device

    map.on('click', e => {
      handlePlanRoute(e.latlng.lat, e.latlng.lng)
    })

    return () => {
      map.remove()
    }
  }, [])

  // 设置起点（点击按钮）
  const handleSetStart = () => {
    const lat = parseFloat(startLat)
    const lng = parseFloat(startLng)
    if (!isFinite(lat) || !isFinite(lng)) {
      alert('Please enter a valid number')
      return
    }

    const map = mapRef.current
    deviceRef.current.setLatLng([lat, lng]).openPopup()
    map.panTo([lat, lng])

    if (destRef.current) {
      handlePlanRoute(destLat, destLng)
    }
  }

  // 设置终点（点击按钮）
  const handleSetDest = () => {
    const lat = parseFloat(destLat)
    const lng = parseFloat(destLng)
    if (!isFinite(lat) || !isFinite(lng)) {
      alert('Please enter a valid number')
      return
    }

    handlePlanRoute(lat, lng)
  }

  // 规划路线
  const handlePlanRoute = (lat, lng) => {
    const map = mapRef.current

    // 清除旧路线
    if (routingRef.current) {
      map.removeControl(routingRef.current)
    }
    if (destRef.current) {
      map.removeLayer(destRef.current)
    }

    const destination = L.marker([lat, lng], {
      icon: redIcon,
      title: 'Destination'
    }).addTo(map).bindPopup('Destination').openPopup()
    destRef.current = destination

    setDestLat(lat.toFixed(6))
    setDestLng(lng.toFixed(6))

    routingRef.current = L.Routing.control({
      waypoints: [deviceRef.current.getLatLng(), L.latLng(lat, lng)],
      router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }),
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      createMarker: () => null
    }).addTo(map)
  }

  return (
    <>
      <div id="panel">
        <div><strong>Start Point</strong></div>
        <input value={startLat} onChange={e => setStartLat(e.target.value)} placeholder="lat" />
        <input value={startLng} onChange={e => setStartLng(e.target.value)} placeholder="lng" />
        <button onClick={handleSetStart}>Set as Start</button>
        <hr />
        <div><strong>Destination Point</strong></div>
        <input value={destLat} onChange={e => setDestLat(e.target.value)} placeholder="lat" />
        <input value={destLng} onChange={e => setDestLng(e.target.value)} placeholder="lng" />
        <button onClick={handleSetDest}>Set as Destination</button>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
