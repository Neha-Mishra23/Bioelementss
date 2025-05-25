import express from 'express';
import Product from '../models/product.model.js';
import asyncHandler from 'express-async-handler';

// CREATE PRODUCT
const createProduct = asyncHandler(async (req, res) => {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();

    if (product) {
        res.status(201).json(product);
    } else {
        res.status(400);
        throw new Error('Product was not created');
    }
});

// UPDATE PRODUCT
const updateProduct = asyncHandler(async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (!updatedProduct) {
        res.status(400);
        throw new Error("Product has not been updated");
    } else {
        res.status(200).json(updatedProduct);
    }
});

// DELETE PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("Product was not deleted");
    } else {
        res.status(200).json({ message: "Product deleted successfully" });
    }
});

// GET PRODUCT
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product was not found");
    } else {
        res.status(200).json(product);
    }
});

// GET ALL PRODUCTS
const getAllProducts = asyncHandler(async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qSearch = req.query.search;
    let products;

    if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
        products = await Product.find({ categories: { $in: [qCategory] } });
    } else if (qSearch) {
        products = await Product.find({
            $text: {
                $search: qSearch,
                $caseSensitive: false,
                $diacriticSensitive: false,
            },
        });
    } else {
        products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    }

    res.status(200).json(products);
});

// RATE PRODUCT
const ratingProduct = asyncHandler(async (req, res) => {
    const { star, name, comment, postedBy } = req.body;

    if (star && name && comment && postedBy) {
        const ratedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    ratings: { star, name, comment, postedBy },
                },
            },
            { new: true }
        );

        res.status(201).json(ratedProduct);
    } else {
        res.status(400);
        throw new Error("Missing rating fields");
    }
});

// GET PRODUCT BY ID
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(product);
});

// GET PRODUCTS (simple fetch all)
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

export {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
    ratingProduct,
    getProductById,
    getProducts
};
