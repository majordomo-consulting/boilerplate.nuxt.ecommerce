# ecommerce

This PWA (Progressive Web Application) is built with NUXT (Vue.js), Bulma and Snipcart.  It is an SPA (Single Page Application) built for JAMStack hosting.  The instructions below will detail how to customize, then deploy the site to Netlify.  Netlify offers free SSL certificates, hosting and many other features though this application can be deployed in any environment that supports Javascript runtimes.

For a simpler website, another option is [this html boilerplate](https://github.com/majordomo-consulting/boilerplate.html.snipcart) which can also be deployed freely to Netlify, has a simpler folder structure, and may be easier to customize.

In either case, the annual cost for a small-medium sized business to run this application, with a custom domain, should be under $25USD.

## ***QUICK START***

Steps to creating [this website](https://getting-started-with-ecommerce.netlify.app/) in under 5 minutes:

1. Create a [Netlify](https://netlify.com) account
2. Create a [GitHub](https://github.com) account
3. Fork this repository (top right button in GitHub)
4. in Netlify click "New site from Git", choose your repo, then click "Deploy"

## Customization

### First Steps:

1. Create a [Netlify](https://netlify.com) account
2. Create a [GitHub](https://github.com) account
3. Create a [Snipcart](https://snipcart.com) account*
* You do not need to enter your credit card details if only accepting in-person payments

### In Snipcart:

1. After creating account complete steps 1 & 2 in the Snipcart dashboard (Fill in your business information, configure your domains)
2. Configure the payment gateway (Deferred Payments) by clicking on the account profile icon on the top right
3. At the bottom of the page, turn Deferred Payments to ON, then click 'CONFIGURE' - choose - 'Only allow deferred payments'
5. Click on TAXES in the menu and CREATE NEW TAX - enter your details (e.g HST, CA, ON, 0.13)
6. Click on Domains & URLs - the domain you put here MUST MATCH the location of the products folder - if it doesn't, YOUR CART WILL NOT WORK
7. Go to API KEYS - COPY your PUBLIC TEST API KEY (the test key is all you will ever need if accepting in-person payments) to your clipboard then proceed to the GitHub section.

### In GitHub:

1. Fork this repository (top right button in GitHub)
2. Edit these files:
- nuxt.config.js - paste the Snipcart API KEY into the `snipcart:` section - paste over the existing key
- /components/about - change titles and text
- /components/carousel - change images
- /components/catalogue - change products
- /components/contact - enter contact information - change links
- /components/footer - change company name
- /components/header - change company name
- /components/logo - link to your logo
- /components/privacy - generate a [privacy policy](https://www.shopify.ca/tools/policy-generator) then paste it here

### In Netlify:

3. Netlify Dashboard:
- New site from Git - select forked repository - Deploy
- Site Settings - change Site Name


## Technologies:

Snipcart

Bulma/Buefy - https://bulma.io/documentation/
