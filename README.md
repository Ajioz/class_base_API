# Product List

This is a basic api that uses the class base approach in JavaScript

The sample code creates methods similar to MongoDB making it fun and easy to work with

It will be a product list, so we can create, delete and update a product and of course we will be able to list all the products created.

[Github Project](https://github.com/Ajioz/class_base_API)

# Instructions

Steps to host API on aws Elastic Beanstalk

# 1 Install beanstalk cli

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-advanced.html

## 2 Initialize the beanstalk and attach to a region

`eb init --platform node.js --region us-east-2`

    depending on your account you might be required to provide
    #a (aws-access-id): xxxxxxxxxx
    #b (aws-secret-key): xxxxxxxxxxx

## 3 Edit the manifest file (package.json) to have a start cmd that point to the server

e.g: `"start": "node src/server.js"`,

## 4 At the root of the app folder, create a file titled as:

Procfile

## 5 Inside the file put in the following command:

`web: npm start`

## 6 Next is to git add & git commit

## 8 enter the following command on your terminal

`eb create --sample product-list`

## 9 Next is to deploy by doing the following command

`eb deploy`

## 10 Next we can open the deployed version by doing:

`eb open`

[My API LInk here ](http://product-list.eba-bppafw3c.us-east-2.elasticbeanstalk.com/products)

Happy Hacking!!!
