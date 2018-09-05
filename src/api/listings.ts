import axios from 'axios';

const fetch = async (id:any):Promise<any> => {
    const requestConfig = {
        url: `https://1u5zv1svga.execute-api.eu-central-1.amazonaws.com/TEST/listings/${id}`,
        method: 'get',
        responseType: 'json',
        headers: {
            'x-api-key': 'hfoOyQuZSW8gLoab9CemK1w7soBcz4er6h7bzes5'
        }
    };

    const { data } = await axios.request(requestConfig);
    return data;

};

export default { fetch };
