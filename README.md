# 1.gps_simulation 

This project implements a web-based GPS tracking simulation system. 



It supports device position reporting and custom route planning by allowing users to input the current location and target location. Then the system performs route computation and displays the result route on the map interface.



A visual interface is built with OpenStreetMap to help users easily select start and destination points, view the optimized route, and observe the real-time simulation of device movement along the path.

# 2.Code

Code uses React as the frontend, and Node.js as the backend.

# 3.User Interface Overview

<img width="2517" height="954" alt="image" src="https://github.com/user-attachments/assets/9d89af10-11de-4c5c-8ee4-7941a2b99c9c" />

Fig. 1 Interface for Device Position Reporting and Destination Input


Users can also input the current location and target location manually. The system records and prepares for route planning based on the given coordinates.


<img width="2511" height="1735" alt="image" src="https://github.com/user-attachments/assets/87932af1-02e2-4083-944c-7518aee5a5f5" />

Fig. 2 Visualized Route Display After Path Planning



After setting the start and destination points, the system computes the optimal path and displays the result route on the map.

# 4.How to use the gps_simulation project

### （1） Install dependencies:

```
cd gps_simulation  
npm install
```

### （2） Run frontend in development mode:

```
cd client  
npm run dev  
Visit http://localhost:5173
```

### （3） Build frontend and start backend:

```
cd client  
npm run build  
cd gps_simulation  
npm start  
Visit http://localhost:3000
```

