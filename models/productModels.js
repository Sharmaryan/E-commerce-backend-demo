const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product Description']
    },
    price: {
        type: Number,
        required: [true, 'Please Enter Product Price'],
        maxLength: [8, 'price cannot exceed 8 characters']
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            requred: true
        },

        url: {
            type: String,
            requred: true
        },

    }],
    category: {
        type: String,
        required: [true, 'Please Enter Product Category'],

    },
    Stock: {
        type: Number,
        requred: [true, 'Please Enter Product Stock'],
        maxLength: [4, 'Stock cannot exceed 4 characters'],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                requiredL: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Product', productSchema)