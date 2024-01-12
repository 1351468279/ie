export const getGoodsDetail = (id) => {
  return $.get({
    url: `/api/shopservice/goods/detail/${id}`,
    type: "GET",
  })
}