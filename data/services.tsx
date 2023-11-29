import stylist1 from '../assets/hairstyles/lemonade.jpg'
import stylist2 from '../assets/hairstyles/cornrow.jpg'
import stylist3 from '../assets/hairstyles/knotless-box.jpg'
import stylist4 from '../assets/hairstyles/triangle2.jpg'

const services = [
    {
        image: require('../assets/hairstyles/lemonade.jpg'), // Use require to fetch image,
        name: "Lemonade braids",
        description: "this is a braid",
        rating: 1,
        ratingnum: "1.0",
        price: 10
    },
    {
        image: require('../assets/hairstyles/cornrow.jpg'), // Use require to fetch image,
        name: "Cornrows",
        description: "this is a braid",
        rating: 2,
        ratingnum: "2.0",
        price: 50
    },
    {
        image: require('../assets/hairstyles/knotless-box.jpg'),
        name: "Knotless braids",
        description: "this is a braid",
        rating: 5,
        ratingnum: "5.0",
        price: 80
    },
    {
        image: require('../assets/hairstyles/triangle2.jpg'),
        name: "Triangle braids",
        description: "this is a braid",
        rating: 3,
        ratingnum: "3.0",
        price: 70
    }
]

export default services