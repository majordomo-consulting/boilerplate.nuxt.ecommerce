# ecommerce

This [PWA](https://getting-started-with-ecommerce.netlify.app/) (Progressive Web Application) is built with NUXT (Vue.js), [Bulma](https://bulma.io) and [Snipcart](https://snipcart.com).  It is an SPA (Single Page Application) built for JAMStack hosting.  The instructions below will detail how to customize, then deploy the site to [Netlify](https://netlify.com).  Netlify offers free SSL certificates, hosting and many other features. However, this application can be deployed in any environment that supports Javascript runtimes (Node.js).

For a simpler website, another option is [this html boilerplate](https://github.com/majordomo-consulting/boilerplate.html.snipcart).  It too can be deployed freely to Netlify, has a simpler folder structure, and may be easier to customize due to less Javascript code.

In either case, the annual cost for a small-medium sized business to run this application, with a custom domain, should be under $25USD.  Free if you don't add a custom domain.

## ***QUICKEST START***

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/majordomo-consulting/boilerplate.nuxt.ecommerce">
  <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify">
</a>

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
6. Click on Domains & URLs - the domain you put here MUST MATCH the location of the products folder - if it doesn't, YOUR CART WILL NOT WORK - if you don't know your domain yet or are using a Netlify domain - come back to this section
7. Go to API KEYS - COPY your PUBLIC TEST API KEY (the test key is all you will ever need if accepting in-person payments) to your clipboard then proceed to the GitHub section.

### In GitHub:

1. Fork this repository (top right button in GitHub)
2. Edit these files by clicking on the pencil icon after forking:
- nuxt.config.js: paste the Snipcart API KEY into the `snipcart:` section (paste over the existing key)
- /components/about: change titles and text
- /components/carousel: change images
- /store/index.js:

There are two arrays (one for each category). 

```
          { 
            id: 'first-product', 
            title: 'first product', 
            description: 'first product description', 
            image: 'https://dummyimage.com/300x300/ccc/aaa', 
            price: '4.99'
          },
```

Copy and paste the block (include commas) as many times as needed.  These details are critical to proper functionality of the cart.

- /components/contact - enter contact information - change links
- /components/footer - change company name
- /components/header - change company name
- /components/logo - link to your logo
- /components/privacy - generate a [privacy policy](https://www.shopify.ca/tools/policy-generator) then paste it here

### In Netlify:

3. Netlify Dashboard:
- New site from Git - select forked repository - Deploy
- Site Settings - change Site Name (Button)
- *optional* click on Domain Management in left-hand menu - Add custom domain (Button)

## Advanced Customizations

### Styles

Styles are divided into two sheets - main.scss and default.css.  If modifying Bulma styles (see docs below), use main.scss.

## Technologies:

[Snipcart](https://snipcart.com) - https://snipcart.com

[Bulma/Buefy](https://bulma.io/documentation/) - https://bulma.io/documentation/

## Updates:

03.06.2021 - new [template](https://getting-started-with-ecommerce.netlify.app/homepage-ii)