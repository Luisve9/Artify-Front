import {_api} from './api' 

export const createDesignEndPoint = (data) => _api.post('/design/create',data);
export const getAllDesignEndPoint = () => _api.get('/design/getAll');
export const getDesignByIdEndPoint = (id) => _api.get(`/design/getDesignById/${id}`);
export const getDesignByTagEndPoint = (tag) => _api.get(`/design/getDesignByTag/${tag}`)

export const updateDesignEndPoint = (data) => _api.patch('/design/updateDesign', data);
export const deleteDesignEndPoint = (id) => _api.delete(`/design/delete/${id}`)
