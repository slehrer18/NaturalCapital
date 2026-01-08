import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useStore } from '../lib/store';
import { 
  Layers, MapPin, TreePine, Droplets, Mountain, Eye, EyeOff, 
  Info, Bookmark, Search, ZoomIn, ZoomOut, Compass, X, Plus,
  ChevronDown, ChevronRight
} from 'lucide-react';

// UK map data sources - free and open
const MAP_SOURCES = {
  // OS Open Zoomstack (free, open) - requires API key from OS Data Hub
  // For now, using OpenStreetMap as base
  baseStyle: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  
  // Natural England open data endpoints
  naturalEngland: {
    sssi: 'https://services.arcgis.com/JJzESW51TqeY9uj0/arcgis/rest/services/SSSI_England/FeatureServer/0/query',
    ancientWoodland: 'https://services.arcgis.com/JJzESW51TqeY9uj0/arcgis/rest/services/Ancient_Woodland_England/FeatureServer/0/query',
    priorityHabitats: 'https://services.arcgis.com/JJzESW51TqeY9uj0/arcgis/rest/services/Priority_Habitat_Inventory_England/FeatureServer/0/query'
  }
};

// Layer definitions
const LAYERS = [
  {
    id: 'peatland',
    name: 'Peatland',
    icon: Mountain,
    color: '#8B4513',
    description: 'Deep peat soils (>40cm). Priority for restoration due to carbon storage potential.',
    visible: false,
    category: 'habitats'
  },
  {
    id: 'woodland',
    name: 'Woodland',
    icon: TreePine,
    color: '#228B22',
    description: 'Existing woodland cover including ancient woodland sites.',
    visible: false,
    category: 'habitats'
  },
  {
    id: 'wetland',
    name: 'Wetland & Water',
    icon: Droplets,
    color: '#4682B4',
    description: 'Freshwater habitats including rivers, lakes, fens, and marshes.',
    visible: false,
    category: 'habitats'
  },
  {
    id: 'sssi',
    name: 'SSSI',
    icon: MapPin,
    color: '#FF6B6B',
    description: 'Sites of Special Scientific Interest - legally protected areas.',
    visible: false,
    category: 'designations'
  },
  {
    id: 'flood-risk',
    name: 'Flood Risk Zones',
    icon: Droplets,
    color: '#1E90FF',
    description: 'Environment Agency flood risk zones - opportunities for natural flood management.',
    visible: false,
    category: 'opportunities'
  },
  {
    id: 'restoration-potential',
    name: 'Restoration Potential',
    icon: TreePine,
    color: '#32CD32',
    description: 'Areas with high potential for woodland creation or peatland restoration.',
    visible: false,
    category: 'opportunities'
  }
];

// Sample UK regions for demonstration
const UK_REGIONS = [
  { name: 'Scottish Highlands', center: [-4.5, 57.0], zoom: 7, description: 'Major peatland and native woodland restoration opportunities' },
  { name: 'Yorkshire', center: [-1.5, 54.0], zoom: 8, description: 'Yorkshire Water catchment work, upland restoration' },
  { name: 'Southwest England', center: [-3.5, 50.8], zoom: 8, description: 'Cotswolds woodland creation, wetland restoration' },
  { name: 'Wales', center: [-3.8, 52.4], zoom: 7, description: 'Upland restoration, native woodland expansion' },
  { name: 'East Anglia', center: [1.0, 52.5], zoom: 8, description: 'Fenland restoration, agricultural transitions' }
];

// Scenario modelling presets
const SCENARIOS = [
  {
    id: 'woodland-creation',
    name: 'Woodland Creation',
    description: 'Model outcomes of new native woodland planting',
    parameters: ['Carbon sequestration', 'Biodiversity uplift', 'Flood mitigation', 'WCC eligibility']
  },
  {
    id: 'peatland-restoration',
    name: 'Peatland Restoration',
    description: 'Model outcomes of peatland rewetting',
    parameters: ['Emissions avoided', 'Water quality improvement', 'Biodiversity uplift', 'Peatland Code eligibility']
  },
  {
    id: 'riparian-buffer',
    name: 'Riparian Buffers',
    description: 'Model outcomes of riverside woodland strips',
    parameters: ['Water quality', 'Flood attenuation', 'Habitat connectivity', 'BNG potential']
  }
];

export default function UKMapExplorer() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeLayers, setActiveLayers] = useState(['base']);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showLayers, setShowLayers] = useState(true);
  const [showScenarios, setShowScenarios] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { savedLocations, saveLocation } = useStore();

  // Initialize map
  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_SOURCES.baseStyle,
      center: [-2.5, 54.5], // Center of UK
      zoom: 5.5,
      minZoom: 4,
      maxZoom: 16,
      maxBounds: [[-12, 49], [4, 61]] // Restrict to UK area
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.addControl(new maplibregl.ScaleControl(), 'bottom-left');

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add demonstration layers
      addDemoLayers();
    });

    map.current.on('click', (e) => {
      setClickedLocation({
        lng: e.lngLat.lng.toFixed(4),
        lat: e.lngLat.lat.toFixed(4)
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Add demonstration ecosystem layers
  const addDemoLayers = () => {
    // Add source for demo peatland areas (Scottish Highlands approximation)
    map.current.addSource('peatland-demo', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'Flow Country', type: 'Blanket Bog', carbon_density: 'Very High', area_ha: 400000 },
            geometry: {
              type: 'Polygon',
              coordinates: [[[-4.5, 58.2], [-3.5, 58.2], [-3.5, 58.6], [-4.5, 58.6], [-4.5, 58.2]]]
            }
          },
          {
            type: 'Feature',
            properties: { name: 'Rannoch Moor', type: 'Blanket Bog', carbon_density: 'Very High', area_ha: 15000 },
            geometry: {
              type: 'Polygon',
              coordinates: [[[-4.8, 56.6], [-4.4, 56.6], [-4.4, 56.75], [-4.8, 56.75], [-4.8, 56.6]]]
            }
          },
          {
            type: 'Feature',
            properties: { name: 'Yorkshire Dales Uplands', type: 'Upland Peat', carbon_density: 'High', area_ha: 50000 },
            geometry: {
              type: 'Polygon',
              coordinates: [[[-2.4, 54.2], [-1.8, 54.2], [-1.8, 54.5], [-2.4, 54.5], [-2.4, 54.2]]]
            }
          }
        ]
      }
    });

    map.current.addLayer({
      id: 'peatland-fill',
      type: 'fill',
      source: 'peatland-demo',
      paint: {
        'fill-color': '#8B4513',
        'fill-opacity': 0.4
      },
      layout: {
        visibility: 'none'
      }
    });

    map.current.addLayer({
      id: 'peatland-outline',
      type: 'line',
      source: 'peatland-demo',
      paint: {
        'line-color': '#8B4513',
        'line-width': 2
      },
      layout: {
        visibility: 'none'
      }
    });

    // Add demo woodland areas
    map.current.addSource('woodland-demo', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'Caledonian Forest Remnants', type: 'Native Pinewood', biodiversity: 'Very High' },
            geometry: {
              type: 'Polygon',
              coordinates: [[[-5.0, 57.0], [-4.5, 57.0], [-4.5, 57.2], [-5.0, 57.2], [-5.0, 57.0]]]
            }
          },
          {
            type: 'Feature',
            properties: { name: 'Cotswolds Woodlands', type: 'Ancient Broadleaf', biodiversity: 'High' },
            geometry: {
              type: 'Polygon',
              coordinates: [[[-2.1, 51.7], [-1.7, 51.7], [-1.7, 52.0], [-2.1, 52.0], [-2.1, 51.7]]]
            }
          }
        ]
      }
    });

    map.current.addLayer({
      id: 'woodland-fill',
      type: 'fill',
      source: 'woodland-demo',
      paint: {
        'fill-color': '#228B22',
        'fill-opacity': 0.4
      },
      layout: {
        visibility: 'none'
      }
    });

    // Add Zulu project markers
    map.current.addSource('zulu-projects', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'Moor Wood Farm', type: 'Woodland Creation', status: 'Active' },
            geometry: { type: 'Point', coordinates: [-1.9, 51.85] }
          },
          {
            type: 'Feature',
            properties: { name: 'Highland Lost Woods', type: 'Ancient Woodland Restoration', status: 'Active' },
            geometry: { type: 'Point', coordinates: [-5.1, 56.8] }
          },
          {
            type: 'Feature',
            properties: { name: 'West Coast SSSI', type: 'Woodland & Peatland', status: 'Active' },
            geometry: { type: 'Point', coordinates: [-5.5, 56.3] }
          },
          {
            type: 'Feature',
            properties: { name: 'Ilkley Water Quality', type: 'Partnership Project', status: 'Active' },
            geometry: { type: 'Point', coordinates: [-1.82, 53.92] }
          },
          {
            type: 'Feature',
            properties: { name: 'Idle & Torne Catchment', type: 'Catchment Project', status: 'In Development' },
            geometry: { type: 'Point', coordinates: [-0.95, 53.45] }
          }
        ]
      }
    });

    map.current.addLayer({
      id: 'zulu-projects-layer',
      type: 'circle',
      source: 'zulu-projects',
      paint: {
        'circle-radius': 8,
        'circle-color': '#10B981',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#fff'
      }
    });

    // Add popup for Zulu projects
    map.current.on('click', 'zulu-projects-layer', (e) => {
      const props = e.features[0].properties;
      new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`
          <div class="p-3">
            <h3 class="font-medium text-white">${props.name}</h3>
            <p class="text-sm text-slate-300">${props.type}</p>
            <p class="text-xs text-emerald-400 mt-1">${props.status}</p>
          </div>
        `)
        .addTo(map.current);
    });

    map.current.on('mouseenter', 'zulu-projects-layer', () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });
    
    map.current.on('mouseleave', 'zulu-projects-layer', () => {
      map.current.getCanvas().style.cursor = '';
    });
  };

  // Toggle layer visibility
  const toggleLayer = (layerId) => {
    if (!mapLoaded) return;
    
    const layerMappings = {
      peatland: ['peatland-fill', 'peatland-outline'],
      woodland: ['woodland-fill']
    };

    const layers = layerMappings[layerId] || [];
    const isCurrentlyActive = activeLayers.includes(layerId);

    layers.forEach(layer => {
      if (map.current.getLayer(layer)) {
        map.current.setLayoutProperty(
          layer, 
          'visibility', 
          isCurrentlyActive ? 'none' : 'visible'
        );
      }
    });

    setActiveLayers(prev => 
      isCurrentlyActive 
        ? prev.filter(l => l !== layerId)
        : [...prev, layerId]
    );
  };

  // Fly to region
  const flyToRegion = (region) => {
    setSelectedRegion(region);
    map.current.flyTo({
      center: region.center,
      zoom: region.zoom,
      duration: 2000
    });
  };

  // Save current location
  const handleSaveLocation = () => {
    if (clickedLocation) {
      const name = prompt('Name this location:');
      if (name) {
        saveLocation({
          name,
          lat: parseFloat(clickedLocation.lat),
          lng: parseFloat(clickedLocation.lng),
          zoom: map.current.getZoom()
        });
      }
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex">
      {/* Map Container */}
      <div className="flex-1 relative">
        <div ref={mapContainer} className="absolute inset-0" />
        
        {/* Top Controls */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={() => setShowLayers(!showLayers)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur transition-colors ${
              showLayers ? 'bg-emerald-600/90 text-white' : 'bg-slate-800/90 text-slate-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            Layers
          </button>
          <button
            onClick={() => setShowScenarios(!showScenarios)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur transition-colors ${
              showScenarios ? 'bg-violet-600/90 text-white' : 'bg-slate-800/90 text-slate-300'
            }`}
          >
            <Mountain className="w-4 h-4" />
            Scenarios
          </button>
        </div>

        {/* Search */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Click Location Info */}
        {clickedLocation && (
          <div className="absolute bottom-4 left-4 z-10 bg-slate-800/90 backdrop-blur rounded-lg p-3 border border-slate-700">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400">Selected Location</p>
                <p className="text-sm text-white font-mono">{clickedLocation.lat}, {clickedLocation.lng}</p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={handleSaveLocation}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Save location"
                >
                  <Bookmark className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  onClick={() => setClickedLocation(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 z-10 bg-slate-800/90 backdrop-blur rounded-lg p-3 border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Zulu Projects</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
            <span className="text-xs text-white">Active Project Sites</span>
          </div>
        </div>
      </div>

      {/* Side Panel */}
      <div className="w-80 bg-slate-900/95 border-l border-slate-800 overflow-y-auto">
        {/* Layers Panel */}
        {showLayers && (
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              Map Layers
            </h3>
            
            <div className="space-y-1">
              {LAYERS.filter(l => l.category === 'habitats').map(layer => (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    activeLayers.includes(layer.id)
                      ? 'bg-slate-700/50'
                      : 'hover:bg-slate-800'
                  }`}
                >
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: layer.color, opacity: activeLayers.includes(layer.id) ? 1 : 0.5 }}
                  />
                  <span className={`text-sm ${activeLayers.includes(layer.id) ? 'text-white' : 'text-slate-400'}`}>
                    {layer.name}
                  </span>
                  {activeLayers.includes(layer.id) ? (
                    <Eye className="w-4 h-4 text-emerald-400 ml-auto" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-slate-500 ml-auto" />
                  )}
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-3">
              Note: Demo layers showing indicative habitat areas. Full integration with Natural England MAGIC data available with API access.
            </p>
          </div>
        )}

        {/* Regions */}
        <div className="p-4 border-b border-slate-800">
          <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-400" />
            UK Regions
          </h3>
          <div className="space-y-1">
            {UK_REGIONS.map(region => (
              <button
                key={region.name}
                onClick={() => flyToRegion(region)}
                className={`w-full text-left p-2 rounded-lg transition-colors ${
                  selectedRegion?.name === region.name
                    ? 'bg-teal-900/30 border border-teal-500/30'
                    : 'hover:bg-slate-800'
                }`}
              >
                <p className={`text-sm ${selectedRegion?.name === region.name ? 'text-white' : 'text-slate-300'}`}>
                  {region.name}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{region.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Scenarios Panel */}
        {showScenarios && (
          <div className="p-4 border-b border-slate-800">
            <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
              <Mountain className="w-4 h-4 text-violet-400" />
              Scenario Modelling
            </h3>
            <div className="space-y-2">
              {SCENARIOS.map(scenario => (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenario(selectedScenario?.id === scenario.id ? null : scenario)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedScenario?.id === scenario.id
                      ? 'bg-violet-900/20 border-violet-500/30'
                      : 'border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <p className="text-sm text-white">{scenario.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{scenario.description}</p>
                  {selectedScenario?.id === scenario.id && (
                    <div className="mt-2 pt-2 border-t border-slate-700">
                      <p className="text-xs text-slate-500 mb-1">Model outputs:</p>
                      <div className="flex flex-wrap gap-1">
                        {scenario.parameters.map(param => (
                          <span key={param} className="px-2 py-0.5 bg-slate-700/50 rounded text-xs text-slate-300">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Click on the map to select an area, then choose a scenario to model potential outcomes.
            </p>
          </div>
        )}

        {/* Saved Locations */}
        {savedLocations.length > 0 && (
          <div className="p-4">
            <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-400" />
              Saved Locations
            </h3>
            <div className="space-y-1">
              {savedLocations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => {
                    map.current.flyTo({
                      center: [loc.lng, loc.lat],
                      zoom: loc.zoom || 10
                    });
                  }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <p className="text-sm text-slate-300">{loc.name}</p>
                  <p className="text-xs text-slate-500 font-mono">{loc.lat.toFixed(3)}, {loc.lng.toFixed(3)}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Data Sources Info */}
        <div className="p-4 border-t border-slate-800">
          <h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-400" />
            Data Sources
          </h3>
          <div className="text-xs text-slate-500 space-y-1">
            <p>• Base map: OpenStreetMap / CartoDB</p>
            <p>• Habitat data: Natural England (demo)</p>
            <p>• Zulu projects: Company data</p>
            <p className="mt-2 text-slate-400">
              Full integration available with MAGIC Map API, CEH Land Cover, and EA flood data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
