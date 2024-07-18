// src/services/microinversorService.ts
export const fetchMicroinversores = async () => {
    try {
      const response = await fetch('/api/microinversores');
      if (!response.ok) {
        throw new Error('Error fetching microinversor data');
      }
      const data = await response.json();
      return data; // Devolviendo todos los microinversores
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  