import {request} from "@/plugins/request";

export const getTags = params => request({
  url: 'api/tags',
  method: 'GET',
  params,
})
