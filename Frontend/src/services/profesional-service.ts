// src/services/ProfessionalService.ts

export class ProfessionalService {
    // Obtener todos los profesionales
    static async getAllProfessionals() {
      try {
        const response = await fetch('http://localhost:5000/profesionales', {
          credentials: 'include' // Incluir cookies en la solicitud
        });
        if (!response.ok) {
          throw new Error('Error fetching professionals');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching professionals:', error);
        throw error;
      }
    }
  
    // Obtener profesional por ID
    static async getProfessionalById(idProfessional: number) {
      try {
        const response = await fetch('http://localhost:5000/profesionales/' + idProfessional);
        if (!response.ok) {
          throw new Error('Error fetching professional');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching professional:', error);
        throw error;
      }
    }
  
   
   
  
   
  }
  