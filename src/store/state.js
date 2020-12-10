import data from '../assets/dummy-data/dummy-data.json'

export const  state = {
        isAuthenticated:false,
        dummyData:data,
        cartData:[],
        routeOrder:false,
        userData : {
                username: 'Rohit',
                password: '12345678'
        }
}