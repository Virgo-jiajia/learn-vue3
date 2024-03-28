import { get } from './api'

let userApi = {
  comments: () => get('/api/comments'),
}
export default userApi
