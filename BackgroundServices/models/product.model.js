import mongoose  from "mongoose";

const ProductSchema = mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    whatinbox:{
        type: String,
    },
    img:{
        type: String,
        required: true,
    },
    video:{
        type: String,
    },
    wholesalePrice:{
        type: Number,
    },
    wholesaleMinimumQuantity:{
        type: Number,
    },
    categories:{
        type: Array,
    },
    concern:{
        type: Array,
    },
    brand:{
        type: String,
    },
    skintype:{
        type: Array,
    },
    originalPrice:{
        type: Number,
        required: true,
    },
    discountedPrice:{
        type: Number,
    },
    inStock:{
        type: Boolean,
        default: true,
    },
    ratings:[
        {
            star: { type: String },
            name: {type: String},
            comment: {type: String},
            postedBy: {type: String}
        }
    ]
})
ProductSchema.index({ "$**": "text" });
const Product = mongoose.model("Product", ProductSchema);
export default Product;