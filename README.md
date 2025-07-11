# 1.gps_simulation 

This project implements a web-based GPS tracking simulation system. 



It supports device position reporting and custom route planning by allowing users to input the current location and target location. Then the system performs route computation and displays the result route on the map interface.



A visual interface is built with OpenStreetMap to help users easily select start and destination points, view the optimized route, and observe the real-time simulation of device movement along the path.

# 2.Code

Code uses React as the frontend, and Node.js as the backend.

# 3.User Interface Overview

![image-20250711171757376](C:\Users\cvsue\AppData\Roaming\Typora\typora-user-images\image-20250711171757376.png)

Fig. 1 Interface for Device Position Reporting and Destination Input



Users can also input the current location and target location manually. The system records and prepares for route planning based on the given coordinates.

![image-20250711172001675](C:\Users\cvsue\AppData\Roaming\Typora\typora-user-images\image-20250711172001675.png)

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

