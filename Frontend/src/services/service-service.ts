// src/services/ServiceService.ts

export class ServiceService {
    static async getServicesByIdUser(idUser: number): Promise<any[]> {
      try {
        const response = await fetch('http://localhost:5000/servicio/' + idUser, { credentials: 'include' });
        if (!response.ok) {
          throw new Error('Error fetching services');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
      }
    }

    static async getTypeServices() {
      try {
        const response = await fetch('http://localhost:5000/servicio/typeServices/',
          { credentials: 'include' }
        );
        if (!response.ok) {
          throw new Error('Error fetching type services');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching type services:', error);
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
          credentials: 'include' // Incluir cookies en la solicitud
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

    static async cancelarServicio(idService: number) {
      try {
        const response = await fetch('http://localhost:5000/servicio/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          
          body: JSON.stringify({
            serviceId: idService,
            nuevoEstado: 'CNL'
          }),
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Error al cancelar service');
        }
        return await response.json();
      } catch (error) {
        console.error('Error al cancelar service:', error);
        throw error;
      }
    }
  }
  