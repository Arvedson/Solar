// src/services/panelService.ts
export const fetchPanelData = async () => {
    try {
      const response = await fetch('/api/paneles');
      if (!response.ok) {
        throw new Error('Error fetching panel data');
      }
      const data = await response.json();
      return data[0]; // Asumiendo que siempre habrá al menos un panel
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  