import Send from './config';

export default {
  //get
  getData() {
    return Send({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: '/data/info/',
      method: 'get',
    });
  },

  getUser(number) {
    return Send({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: '/user/data/?data=' + number,
      method: 'get',
    });
  },
  //post
  updateTable(data) {
    const params = {
      id: data.id,
      name: data.name,
      text: data.value,
    };
    return Send({
      url: `/data/info/update`,
      method: 'post',
      data: params,
    });
  },
};
