import request from '../../utils/request';

const service = {
    userLogin: (data) => request({
        url: '/product/login',
        method: 'POST',
        data
    })
};

export default service;
