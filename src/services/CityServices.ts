import http from './http';

class CityService {
  getAll() {
    return http.get('/');
  }

  get(id: number) {
    return http.get(`/${id}`);
  }

  create(data: string) {
    return http.post('/', data);
  }

  update(id: number, data: string) {
    return http.put(`/${id}`, data);
  }

  delete(name: string) {
    return http.delete(`/${name}`);
  }
}

export default new CityService();
