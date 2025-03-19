// // Generate cities in a rectangular grid layout with parallel coordinates
// export const cities = {
//   // Northern Row (y=100)
//   "AMR": { x: 100, y: 100, name: "Amritsar" },
//   "LDH": { x: 200, y: 100, name: "Ludhiana" },
//   "CHD": { x: 300, y: 100, name: "Chandigarh" },
//   "DEH": { x: 400, y: 100, name: "Dehradun" },
//   "HRD": { x: 500, y: 100, name: "Haridwar" },
  
//   // Upper-Central Row (y=200)
//   "JAL": { x: 100, y: 200, name: "Jalandhar" },
//   "KTL": { x: 200, y: 200, name: "Kaithal" },
//   "PNP": { x: 300, y: 200, name: "Panipat" },
//   "MRT": { x: 400, y: 200, name: "Meerut" },
//   "BRL": { x: 500, y: 200, name: "Bareilly" },
  
//   // Middle Row (y=300)
//   "JAI": { x: 100, y: 300, name: "Jaipur" },
//   "KRN": { x: 200, y: 300, name: "Karnal" },
//   "DEL": { x: 300, y: 300, name: "Delhi" },
//   "GZB": { x: 400, y: 300, name: "Ghaziabad" },
//   "LKO": { x: 500, y: 300, name: "Lucknow" },
  
//   // Lower-Central Row (y=400)
//   "JDH": { x: 100, y: 400, name: "Jodhpur" },
//   "GGN": { x: 200, y: 400, name: "Gurugram" },
//   "FBD": { x: 300, y: 400, name: "Faridabad" },
//   "AGR": { x: 400, y: 400, name: "Agra" },
//   "KNP": { x: 500, y: 400, name: "Kanpur" },
  
//   // Southern Row (y=500)
//   "AHM": { x: 100, y: 500, name: "Ahmedabad" },
//   "UDY": { x: 200, y: 500, name: "Udaipur" },
//   "GWL": { x: 300, y: 500, name: "Gwalior" },
//   "JHS": { x: 400, y: 500, name: "Jhansi" },
//   "VAR": { x: 500, y: 500, name: "Varanasi" }
// };

// // Create connections with different trade-offs to ensure different priorities give different paths
// export const connections = {
//   // Fast but expensive routes (priority: time)
//   "AMR-LDH": { distance: 140, time: 1.5, price: 300 },  // Express Highway
//   "LDH-CHD": { distance: 110, time: 1.2, price: 250 },  // Fast Expressway
//   "CHD-DEH": { distance: 180, time: 2.0, price: 400 },  // Premium Express
//   "DEH-HRD": { distance: 55, time: 0.8, price: 200 },   // Fast Route
  
//   "DEL-GZB": { distance: 25, time: 0.5, price: 150 },   // Express Connection
//   "DEL-FBD": { distance: 35, time: 0.6, price: 180 },   // Premium Route
//   "DEL-GGN": { distance: 30, time: 0.5, price: 170 },   // Express Highway
//   "DEL-AGR": { distance: 230, time: 2.3, price: 600 },  // Yamuna Expressway
  
//   // Cheap but slow routes (priority: cost)
//   "AMR-JAL": { distance: 85, time: 2.0, price: 70 },    // Local Bus
//   "LDH-KTL": { distance: 130, time: 3.0, price: 90 },   // Budget Route
//   "KTL-PNP": { distance: 60, time: 1.8, price: 50 },    // Economy Bus
//   "PNP-DEL": { distance: 85, time: 2.5, price: 60 },    // Regular Bus
  
//   "FBD-AGR": { distance: 170, time: 2.5, price: 240 },  // Direct Route (kept this version)
//   "GGN-JAI": { distance: 260, time: 5.5, price: 150 },  // Economy Service
//   "KRN-MRT": { distance: 140, time: 3.5, price: 90 },   // Local Transport
  
//   // Short distance routes (priority: distance)
//   "KTL-KRN": { distance: 40, time: 1.2, price: 120 },   // Direct Road
//   "PNP-KRN": { distance: 50, time: 1.4, price: 130 },   // Short Highway
//   "CHD-KTL": { distance: 110, time: 2.8, price: 200 },  // Direct Route
//   "DEL-KRN": { distance: 120, time: 2.5, price: 220 },  // Straight Highway
  
//   "GZB-AGR": { distance: 180, time: 3.0, price: 250 },  // Direct Highway
//   "MRT-GZB": { distance: 65, time: 1.8, price: 140 },   // Short Route
//   // Removed duplicate FBD-AGR connection
  
//   // Grid connectivity (ensuring each city connects to adjacent cities)
//   // Horizontal connections in rows
//   "JAL-KTL": { distance: 100, time: 2.2, price: 180 },
//   // KTL-PNP is already defined above
//   "PNP-MRT": { distance: 95, time: 2.0, price: 190 },
//   "MRT-BRL": { distance: 135, time: 2.8, price: 230 },
  
//   "JAI-KRN": { distance: 280, time: 4.5, price: 350 },
//   "KRN-DEL": { distance: 120, time: 2.5, price: 220 },
//   // DEL-GZB is already defined above
//   "GZB-LKO": { distance: 500, time: 6.0, price: 550 },
  
//   "JDH-GGN": { distance: 570, time: 7.0, price: 650 },
//   "GGN-FBD": { distance: 40, time: 1.0, price: 130 },
//   // FBD-AGR is already defined above
//   "AGR-KNP": { distance: 290, time: 4.0, price: 320 },
  
//   "AHM-UDY": { distance: 260, time: 4.5, price: 300 },
//   "UDY-GWL": { distance: 520, time: 7.5, price: 580 },
//   "GWL-JHS": { distance: 120, time: 2.0, price: 200 },
//   "JHS-VAR": { distance: 320, time: 5.0, price: 400 },
  
//   // Vertical connections in columns
//   // AMR-JAL is already defined above
//   "JAL-JAI": { distance: 550, time: 8.0, price: 600 },
//   "JAI-JDH": { distance: 340, time: 5.0, price: 380 },
//   "JDH-AHM": { distance: 330, time: 5.5, price: 400 },
  
//   // LDH-KTL is already defined above
//   // KTL-KRN is already defined above
//   "KRN-GGN": { distance: 120, time: 2.3, price: 230 },
//   "GGN-UDY": { distance: 650, time: 9.0, price: 700 },
  
//   "CHD-PNP": { distance: 85, time: 1.8, price: 190 },
//   // PNP-DEL is already defined above
//   // DEL-FBD is already defined above
//   "FBD-GWL": { distance: 320, time: 4.5, price: 350 },
  
//   "DEH-MRT": { distance: 80, time: 1.8, price: 180 },
//   // MRT-GZB is already defined above
//   // GZB-AGR is already defined above
//   "AGR-JHS": { distance: 235, time: 3.5, price: 290 },
  
//   "HRD-BRL": { distance: 195, time: 4.0, price: 250 },
//   "BRL-LKO": { distance: 250, time: 4.5, price: 300 },
//   "LKO-KNP": { distance: 90, time: 1.8, price: 180 },
//   "KNP-VAR": { distance: 320, time: 5.0, price: 380 },
  
//   // Diagonal and alternative paths (to create interesting route choices)
//   "CHD-KRN": { distance: 150, time: 2.0, price: 350 },  // Fast premium (time-optimized)
//   "KTL-DEL": { distance: 160, time: 4.0, price: 100 },  // Slow cheap (cost-optimized)
//   "PNP-GGN": { distance: 130, time: 3.0, price: 180 },  // Balanced option
  
//   "JAI-DEL": { distance: 280, time: 3.0, price: 600 },  // Fast expensive (time-optimized)
//   "DEL-KNP": { distance: 440, time: 8.0, price: 250 },  // Slow cheap (cost-optimized)
//   "LKO-AGR": { distance: 335, time: 7.0, price: 210 },  // Long cheap (cost-optimized)
  
//   // "AMR-DEL": { distance: 450, time: 6.0, price: 700 },  // Fast premium (time-optimized) 
//   "CHD-BRL": { distance: 350, time: 9.0, price: 220 },  // Slow cheap (cost-optimized)
//   "DEH-KNP": { distance: 510, time: 10.0, price: 300 }  // Balanced but long
// };



















// Define TypeScript interfaces for our data structures
interface City {
  x: number;
  y: number;
  name: string;
}

interface Connection {
  distance: number;
  time: number;
  price: number;
}

// Type for the cities object with string keys
interface CitiesMap {
  [cityCode: string]: City;
}

// Type for the connections object with string keys
interface ConnectionsMap {
  [routeKey: string]: Connection;
}

// Generate cities in a rectangular grid layout with parallel coordinates
export const cities: CitiesMap = {
  // Northern Row (y=100)
  "AMR": { x: 100, y: 100, name: "Amritsar" },
  "LDH": { x: 200, y: 100, name: "Ludhiana" },
  "CHD": { x: 300, y: 100, name: "Chandigarh" },
  "DEH": { x: 400, y: 100, name: "Dehradun" },
  "HRD": { x: 500, y: 100, name: "Haridwar" },
  
  // Upper-Central Row (y=200)
  "JAL": { x: 100, y: 200, name: "Jalandhar" },
  "KTL": { x: 200, y: 200, name: "Kaithal" },
  "PNP": { x: 300, y: 200, name: "Panipat" },
  "MRT": { x: 400, y: 200, name: "Meerut" },
  "BRL": { x: 500, y: 200, name: "Bareilly" },
  
  // Middle Row (y=300)
  "JAI": { x: 100, y: 300, name: "Jaipur" },
  "KRN": { x: 200, y: 300, name: "Karnal" },
  "DEL": { x: 300, y: 300, name: "Delhi" },
  "GZB": { x: 400, y: 300, name: "Ghaziabad" },
  "LKO": { x: 500, y: 300, name: "Lucknow" },
  
  // Lower-Central Row (y=400)
  "JDH": { x: 100, y: 400, name: "Jodhpur" },
  "GGN": { x: 200, y: 400, name: "Gurugram" },
  "FBD": { x: 300, y: 400, name: "Faridabad" },
  "AGR": { x: 400, y: 400, name: "Agra" },
  "KNP": { x: 500, y: 400, name: "Kanpur" },
  
  // Southern Row (y=500)
  "AHM": { x: 100, y: 500, name: "Ahmedabad" },
  "UDY": { x: 200, y: 500, name: "Udaipur" },
  "GWL": { x: 300, y: 500, name: "Gwalior" },
  "JHS": { x: 400, y: 500, name: "Jhansi" },
  "VAR": { x: 500, y: 500, name: "Varanasi" }
};

// Create connections with different trade-offs to ensure different priorities give different paths
export const connections: ConnectionsMap = {
  // Fast but expensive routes (priority: time)
  "AMR-LDH": { distance: 140, time: 1.5, price: 300 },  // Express Highway
  "LDH-CHD": { distance: 110, time: 1.2, price: 250 },  // Fast Expressway
  "CHD-DEH": { distance: 180, time: 2.0, price: 400 },  // Premium Express
  "DEH-HRD": { distance: 55, time: 0.8, price: 200 },   // Fast Route
  
  "DEL-GZB": { distance: 25, time: 0.5, price: 150 },   // Express Connection
  "DEL-FBD": { distance: 35, time: 0.6, price: 180 },   // Premium Route
  "DEL-GGN": { distance: 30, time: 2, price: 170 },   // Express Highway
  "DEL-AGR": { distance: 230, time: 2.3, price: 600 },  // Yamuna Expressway
  
  // Cheap but slow routes (priority: cost)
  "AMR-JAL": { distance: 85, time: 2.0, price: 70 },    // Local Bus
  "LDH-KTL": { distance: 130, time: 3.0, price: 90 },   // Budget Route
  "KTL-PNP": { distance: 60, time: 1.8, price: 50 },    // Economy Bus
  "PNP-DEL": { distance: 85, time: 2.5, price: 60 },    // Regular Bus
  
  "FBD-AGR": { distance: 170, time: 2.5, price: 240 },  // Direct Route (kept this version)
  "GGN-JAI": { distance: 260, time: 5.5, price: 150 },  // Economy Service
  "KRN-MRT": { distance: 140, time: 3.5, price: 90 },   // Local Transport
  
  // Short distance routes (priority: distance)
  "KTL-KRN": { distance: 40, time: 1.2, price: 120 },   // Direct Road
  "PNP-KRN": { distance: 50, time: 1.4, price: 130 },   // Short Highway
  "CHD-KTL": { distance: 110, time: 2.8, price: 200 },  // Direct Route
  "DEL-KRN": { distance: 120, time: 2.5, price: 220 },  // Straight Highway
  
  "GZB-AGR": { distance: 180, time: 3.0, price: 250 },  // Direct Highway
  "MRT-GZB": { distance: 65, time: 1.8, price: 140 },   // Short Route
  // Removed duplicate FBD-AGR connection
  
  // Grid connectivity (ensuring each city connects to adjacent cities)
  // Horizontal connections in rows
  "JAL-KTL": { distance: 100, time: 2.2, price: 180 },
  // KTL-PNP is already defined above
  "PNP-MRT": { distance: 95, time: 2.0, price: 190 },
  "MRT-BRL": { distance: 135, time: 2.8, price: 230 },
  
  "JAI-KRN": { distance: 280, time: 4.5, price: 350 },
  "KRN-DEL": { distance: 120, time: 2.5, price: 220 },
  // DEL-GZB is already defined above
  "GZB-LKO": { distance: 500, time: 6.0, price: 550 },
  
  "JDH-GGN": { distance: 570, time: 7.0, price: 650 },
  "GGN-FBD": { distance: 40, time: 1.0, price: 130 },
  // FBD-AGR is already defined above
  "AGR-KNP": { distance: 290, time: 4.0, price: 320 },
  
  "AHM-UDY": { distance: 260, time: 4.5, price: 300 },
  "UDY-GWL": { distance: 520, time: 7.5, price: 580 },
  "GWL-JHS": { distance: 120, time: 2.0, price: 200 },
  "JHS-VAR": { distance: 320, time: 5.0, price: 400 },
  
  // Vertical connections in columns
  // AMR-JAL is already defined above
  "JAL-JAI": { distance: 550, time: 8.0, price: 600 },
  "JAI-JDH": { distance: 340, time: 5.0, price: 380 },
  "JDH-AHM": { distance: 330, time: 5.5, price: 400 },
  
  // LDH-KTL is already defined above
  // KTL-KRN is already defined above
  "KRN-GGN": { distance: 120, time: 2.3, price: 230 },
  "GGN-UDY": { distance: 650, time: 9.0, price: 700 },
  
  "CHD-PNP": { distance: 85, time: 1.8, price: 190 },
  // PNP-DEL is already defined above
  // DEL-FBD is already defined above
  "FBD-GWL": { distance: 320, time: 4.5, price: 350 },
  
  "DEH-MRT": { distance: 80, time: 1.8, price: 180 },
  // MRT-GZB is already defined above
  // GZB-AGR is already defined above
  "AGR-JHS": { distance: 235, time: 3.5, price: 290 },
  
  "HRD-BRL": { distance: 195, time: 4.0, price: 250 },
  "BRL-LKO": { distance: 250, time: 4.5, price: 300 },
  "LKO-KNP": { distance: 90, time: 1.8, price: 180 },
  "KNP-VAR": { distance: 320, time: 5.0, price: 380 },
  
  // Diagonal and alternative paths (to create interesting route choices)
  "CHD-KRN": { distance: 150, time: 2.0, price: 350 },  // Fast premium (time-optimized)
  "KTL-DEL": { distance: 160, time: 4.0, price: 100 },  // Slow cheap (cost-optimized)
  "PNP-GGN": { distance: 130, time: 3.0, price: 180 },  // Balanced option
  
  // "JAI-DEL": { distance: 280, time: 3.0, price: 600 },  // Fast expensive (time-optimized)
  "DEL-KNP": { distance: 440, time: 8.0, price: 250 },  // Slow cheap (cost-optimized)
  "LKO-AGR": { distance: 335, time: 7.0, price: 210 },  // Long cheap (cost-optimized)
  
  // "AMR-DEL": { distance: 450, time: 6.0, price: 700 },  // Fast premium (time-optimized) 
  "CHD-BRL": { distance: 350, time: 9.0, price: 220 },  // Slow cheap (cost-optimized)
  "DEH-KNP": { distance: 510, time: 10.0, price: 300 }  // Balanced but long
};