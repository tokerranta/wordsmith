import MockApi from './ReversehistoryMockApi'; // eslint-disable-line import/no-unresolved
import Api from './ReversehistoryApi'; // eslint-disable-line import/no-unresolved
const isProduction = true;
const api = isProduction ? Api : MockApi;
export default api;
