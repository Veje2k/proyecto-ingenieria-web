// src/services/ServiceService.ts

export class ServiceService {
    static async getServicesByIdUser(idUser: number) {
      try {
        const response = await fetch('http://localhost:5000/servicio/' + idUser);
        if (!response.ok) {
          throw new Error('Error fetching services');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
      }
    }
  
    static async createService(serviceData: object) {
      try {
        const response = await fetch('http://localhost:5000/servicio/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(serviceData),
        });
        if (!response.ok) {
          throw new Error('Error creating service');
        }
        return await response.json();
      } catch (error) {
        console.error('Error creating service:', error);
        throw error;
      }
    }
  }
  