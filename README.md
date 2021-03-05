# ecommerce

This PWA (Progressive Web Application) is built with NUXT (Vue.js), Bulma and Snipcart.  It is an SPA (Single Page Application) built for JAMStack hosting.  The instructions below will detail how to customize, then deploy the site to Netlify.

For a simpler website, another option is [this html boilerplate](https://github.com/majordomo-consulting/boilerplate.html.snipcart) which can also be deployed freely to Netlify, has a simpler folder structure, and may be easier to customize.

## ***QUICK START***

1. Create a Netlify account
2. Create a GitHub account
3. Fork this repository
4. in Netlify click "New site from Git", choose your repo, then click "Deploy"

## Customization

### First Steps:

1. Create a Netlify account
2. Create a GitHub account
3. Create a Snipcart account


### In Snipcart:

You will need to create a Snipcart account (free). You do not need to enter your credit card details if only accepting in-person payments.

1. After creating your account complete steps 1 & 2 in the Snipcart dashboard (Fill in your business information, configure your domains)
2. Configure the payment gateway (Deferred Payments) by clicking on the account profile icon on the top right
3. 4. At the bottom of the page, turn Deferred Payments to ON, then click 'CONFIGURE' - choose - 'Only allow deferred payments'
5. Click on TAXES in the menu and CREATE NEW TAX - enter your details (e.g HST, CA, ON, 0.13)
6. Click on Domains & URLs - the domain you put here MUST MATCH the location of the products folder - if it doesn't, YOUR CART WILL NOT WORK
7. Go to API KEYS - COPY your PUBLIC TEST API KEY (the test key is all you will ever need if accepting in-person payments).
8. Copy the key to the file:  nuxt.config.js in the Snipcart section (paste over existing key)


### In GitHub:

1. Fork this repository
2. Edit these files:
- /components:
- /about - change titles and text
- /carousel - change images
- /catalogue - change products
- /contact - enter contact information - change links
- /footer - change company name
- /header - change company name
- /logo - link to your logo
- /privacy - generate a [privacy policy](https://www.shopify.ca/tools/policy-generator) then paste it here
- nuxt.config.js - copy Snipcart key within quotation marks

### In Netlify:

3. Netlify Dashboard:
- New site from Git - select forked repository - Deploy
- Site Settings - change Site Name


## Technologies:

Snipcart

Bulma/Buefy - https://bulma.io/documentation/
