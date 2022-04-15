import {request} from "@/plugins/request"

export const updateSettings = data => request({
  url: 'api/user',
  method: 'PUT',
  data,
})
