// import React, { useState, useEffect } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Bus } from 'lucide-react';
// import { cities, connections } from "./network";



// const RouteSimulator = () => {
//   const [source, setSource] = useState(''); 
//   const [destination, setDestination] = useState('');
//   const [measure, setMeasure] = useState('price');
//   const [path, setPath] = useState([]);
//   const [busPosition, setBusPosition] = useState({ x: 0, y: 0 });
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [totalMeasure, setTotalMeasure] = useState(0);
//   const [zoom, setZoom] = useState(1);
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

//   // Dijkstra's algorithm implementation
//   const findShortestPath = (start, end, measure) => {
//     const graph = {};
//     Object.keys(cities).forEach(city => {
//       graph[city] = {};
//     });

//     Object.entries(connections).forEach(([key, values]) => {
//       const [city1, city2] = key.split('-');
//       graph[city1][city2] = values[measure];
//       graph[city2][city1] = values[measure];
//     });

//     const distances = {};
//     const previous = {};
//     const unvisited = new Set(Object.keys(cities));

//     Object.keys(cities).forEach(city => {
//       distances[city] = Infinity;
//     });
//     distances[start] = 0;

//     while (unvisited.size > 0) {
//       let current = null;
//       let minDistance = Infinity;
      
//       unvisited.forEach(city => {
//         if (distances[city] < minDistance) {
//           minDistance = distances[city];
//           current = city;
//         }
//       });

//       if (current === null) break;
//       if (current === end) break;

//       unvisited.delete(current);

//       Object.entries(graph[current]).forEach(([neighbor, value]) => {
//         if (!unvisited.has(neighbor)) return;
        
//         const alt = distances[current] + value;
//         if (alt < distances[neighbor]) {
//           distances[neighbor] = alt;
//           previous[neighbor] = current;
//         }
//       });
//     }

//     const path = [];
//     let current = end;
//     while (current !== undefined) {
//       path.unshift(current);
//       current = previous[current];
//     }

//     return { path, totalMeasure: distances[end] };
//   };

//   const animateBus = (pathPoints: string[]) => {
//     setIsAnimating(true);
//     let step = 0;
//     const TOTAL_STEPS = 100; // Constant number of steps for animation
//     const ANIMATION_SPEED = 50; // Milliseconds between each frame - adjust this to make animation faster/slower
    
//     const animate = () => {
//       if (step >= TOTAL_STEPS) {
//         setIsAnimating(false);
//         return;
//       }
  
//       // Calculate current segment and progress
//       const segment = Math.floor((step / TOTAL_STEPS) * (pathPoints.length - 1));
//       const segmentProgress = (step / TOTAL_STEPS) * (pathPoints.length - 1) - segment;
  
//       const start = cities[pathPoints[segment]];
//       const end = cities[pathPoints[segment + 1]];
  
//       // Linear interpolation for position
//       const x = start.x + (end.x - start.x) * segmentProgress;
//       const y = start.y + (end.y - start.y) * segmentProgress;
  
//       setBusPosition({ x, y });
//       step++;
  
//       // Use setTimeout for consistent speed
//       setTimeout(() => requestAnimationFrame(animate), ANIMATION_SPEED);
//     };
  
//     animate();
//   };

//   const handleSimulate = () => {
//     if (!source || !destination) {
//       alert('Please select both source and destination cities');
//       return;
//     }
    
//     const { path: newPath, totalMeasure: newTotal } = findShortestPath(source, destination, measure);
//     setPath(newPath);
//     setTotalMeasure(newTotal);
//     setBusPosition({ x: cities[newPath[0]].x, y: cities[newPath[0]].y });
//     animateBus(newPath);
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       setPan({
//         x: e.clientX - dragStart.x,
//         y: e.clientY - dragStart.y
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleWheel = (e) => {
//     const newZoom = Math.max(0.5, Math.min(2, zoom - e.deltaY * 0.001));
//     setZoom(newZoom);
//   };

//   return (
//     <Card className="w-full max-w-4xl">
//       <CardHeader>
//         <CardTitle>Bus Route Simulator</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="flex gap-4 mb-4">
//           <select 
//             value={source}
//             onChange={(e) => setSource(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="">Select source city</option>
//             {Object.entries(cities).map(([key, city]) => (
//               <option key={key} value={key}>{city.name}</option>
//             ))}
//           </select>
//           <select
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="p-2 border rounded"
//             >
//               <option value="">Select destination city</option>
//               {Object.entries(cities).map(([key, city]) => (
//                 <option key={key} value={key}>{city.name}</option>
//               ))}
//           </select>
//           <select
//             value={measure}
//             onChange={(e) => setMeasure(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="distance">Distance (km)</option>
//             <option value="time">Time (hours)</option>
//             <option value="price">Price ($)</option>
//           </select>
//           <Button 
//             onClick={handleSimulate}
//             disabled={isAnimating}
//           >
//             Simulate Route
//           </Button>
//         </div>

//         <div 
//           className="relative border rounded p-4 overflow-hidden" 
//           style={{ height: '600px' }}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onWheel={handleWheel}
//         >
//           <div
//             className="absolute"
//             style={{
//               transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
//               transformOrigin: '0 0'
//             }}
//           >
//             {/* Draw connections */}
//             <svg width="800" height="600">
//               {Object.entries(connections).map(([key]) => {
//                 const [city1, city2] = key.split('-');
//                 return (
//                   <line
//                     key={key}
//                     x1={cities[city1].x}
//                     y1={cities[city1].y}
//                     x2={cities[city2].x}
//                     y2={cities[city2].y}
//                     stroke={path.includes(city1) && path.includes(city2) ? '#4CAF50' : '#ddd'}
//                     strokeWidth={2}
//                   />
//                 );
//               })}
//             </svg>

//             {/* Draw cities with labels */}
//             {Object.entries(cities).map(([key, city]) => (
//               <div key={key} className="absolute" style={{ left: city.x, top: city.y }}>
//                 <div className="w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5 -translate-y-1.5" />
//                 <div className="absolute text-xs -translate-x-1/2 translate-y-2 whitespace-nowrap">
//                   {city.name}
//                 </div>
//               </div>
//             ))}

//             {/* Animated bus */}
//             {isAnimating && (
//               <div
//                 className="absolute -translate-x-4 -translate-y-4"
//                 style={{ left: busPosition.x, top: busPosition.y }}
//               >
//                 <Bus className="w-8 h-8 text-yellow-500" />
//               </div>
//             )}
//           </div>
//         </div>

//         {path.length > 0 && (
//           <div className="mt-4">
//             <p>Route: {path.map(city => cities[city].name).join(' → ')}</p>
//             <p>Total {measure}: {totalMeasure.toFixed(1)} {measure === 'distance' ? 'km' : measure === 'time' ? 'hours' : '$'}</p>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default RouteSimulator;





































































import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bus } from 'lucide-react';
import { cities, connections } from "./network";

const RouteSimulator = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [measure, setMeasure] = useState('price');
  const [path, setPath] = useState([]);
  const [busPosition, setBusPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [totalMeasure, setTotalMeasure] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [sequentialConnections, setSequentialConnections] = useState(new Set());

  // Dijkstra's algorithm implementation
  const findShortestPath = (start, end, measure) => {
    const graph = {};
    Object.keys(cities).forEach(city => {
      graph[city] = {};
    });

    Object.entries(connections).forEach(([key, values]) => {
      const [city1, city2] = key.split('-');
      graph[city1][city2] = values[measure];
      graph[city2][city1] = values[measure];
    });

    const distances = {};
    const previous = {};
    const unvisited = new Set(Object.keys(cities));

    Object.keys(cities).forEach(city => {
      distances[city] = Infinity;
    });
    distances[start] = 0;

    while (unvisited.size > 0) {
      let current = null;
      let minDistance = Infinity;

      unvisited.forEach(city => {
        if (distances[city] < minDistance) {
          minDistance = distances[city];
          current = city;
        }
      });

      if (current === null) break;
      if (current === end) break;

      unvisited.delete(current);

      Object.entries(graph[current]).forEach(([neighbor, value]) => {
        if (!unvisited.has(neighbor)) return;

        const alt = distances[current] + value;
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = current;
        }
      });
    }

    const path = [];
    let current = end;
    while (current !== undefined) {
      path.unshift(current);
      current = previous[current];
    }

    return { path, totalMeasure: distances[end] };
  };

  const animateBus = (pathPoints) => {
    setIsAnimating(true);
    let step = 0;
    const TOTAL_STEPS = 100;
    const ANIMATION_SPEED = 50;

    const animate = () => {
      if (step >= TOTAL_STEPS) {
        setIsAnimating(false);
        return;
      }

      const segment = Math.floor((step / TOTAL_STEPS) * (pathPoints.length - 1));
      const segmentProgress = (step / TOTAL_STEPS) * (pathPoints.length - 1) - segment;

      const start = cities[pathPoints[segment]];
      const end = cities[pathPoints[segment + 1]];

      const x = start.x + (end.x - start.x) * segmentProgress;
      const y = start.y + (end.y - start.y) * segmentProgress;

      setBusPosition({ x, y });
      step++;

      setTimeout(() => requestAnimationFrame(animate), ANIMATION_SPEED);
    };

    animate();
  };

  const handleSimulate = () => {
    if (!source || !destination) {
      alert('Please select both source and destination cities');
      return;
    }

    const { path: newPath, totalMeasure: newTotal } = findShortestPath(source, destination, measure);
    setPath(newPath);
    setTotalMeasure(newTotal);
    setBusPosition({ x: cities[newPath[0]].x, y: cities[newPath[0]].y });

    // Create a set of sequential connections
    const sequentialConnections = new Set();
    for (let i = 0; i < newPath.length - 1; i++) {
      sequentialConnections.add(`${newPath[i]}-${newPath[i + 1]}`);
      sequentialConnections.add(`${newPath[i + 1]}-${newPath[i]}`); // Add reverse connection
    }

    console.log("Sequential Connections:", sequentialConnections); // Debugging

    // Store sequential connections in state
    setSequentialConnections(sequentialConnections);

    animateBus(newPath);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    const newZoom = Math.max(0.5, Math.min(2, zoom - e.deltaY * 0.001));
    setZoom(newZoom);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Bus Route Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select source city</option>
            {Object.entries(cities).map(([key, city]) => (
              <option key={key} value={key}>{city.name}</option>
            ))}
          </select>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select destination city</option>
            {Object.entries(cities).map(([key, city]) => (
              <option key={key} value={key}>{city.name}</option>
            ))}
          </select>
          <select
            value={measure}
            onChange={(e) => setMeasure(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="distance">Distance (km)</option>
            <option value="time">Time (hours)</option>
            <option value="price">Price ($)</option>
          </select>
          <Button
            onClick={handleSimulate}
            disabled={isAnimating}
          >
            Simulate Route
          </Button>
        </div>

        <div
          className="relative border rounded p-4 overflow-hidden"
          style={{ height: '600px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          <div
            className="absolute"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: '0 0'
            }}
          >
            {/* Draw connections */}
            <svg width="800" height="600">
              {Object.entries(connections).map(([key]) => {
                const [city1, city2] = key.split('-');
                const isSequential = sequentialConnections.has(`${city1}-${city2}`) || sequentialConnections.has(`${city2}-${city1}`);
                return (
                  <line
                    key={key}
                    x1={cities[city1].x}
                    y1={cities[city1].y}
                    x2={cities[city2].x}
                    y2={cities[city2].y}
                    stroke={isSequential ? '#4CAF50' : '#ddd'}
                    strokeWidth={2}
                  />
                );
              })}
            </svg>

            {/* Draw cities with labels */}
            {Object.entries(cities).map(([key, city]) => (
              <div key={key} className="absolute" style={{ left: city.x, top: city.y }}>
                <div className="w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5 -translate-y-1.5" />
                <div className="absolute text-xs -translate-x-1/2 translate-y-2 whitespace-nowrap">
                  {city.name}
                </div>
              </div>
            ))}

            {/* Animated bus */}
            {isAnimating && (
              <div
                className="absolute -translate-x-4 -translate-y-4"
                style={{ left: busPosition.x, top: busPosition.y }}
              >
                <Bus className="w-8 h-8 text-yellow-500" />
              </div>
            )}
          </div>
        </div>

        {path.length > 0 && (
          <div className="mt-4">
            <p>Route: {path.map(city => cities[city].name).join(' → ')}</p>
            <p>Total {measure}: {totalMeasure.toFixed(1)} {measure === 'distance' ? 'km' : measure === 'time' ? 'hours' : '$'}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RouteSimulator;