// import { request } from '@/utils/request'
export var getWebSiteInfo = function () {
  return $.ajax({
    url: "/api/api/cmall/getWebSiteInfo",
    data: {},
    type: "POST",
  })
}
export var qurryGoods = function (data) {
  return $.ajax({
    url: "searchapi/search/queryGoods",
    method: "post",
    data: data
  })
}
// export var getTagList = async function () {
//   return await request({
//     url: '/shopservice/communal/getCateTagList',
//     method: 'POST',
//     data: {
//       data_type: 4
//     }
//   })
// }
export var getTagList = function () {
  return $.ajax({
    url: "/api/shopservice/communal/getCateTagList",
    contentType: 'application/json',
    data: JSON.stringify({
      "data_type": 4
    }),
    type: "POST",
  })
}
