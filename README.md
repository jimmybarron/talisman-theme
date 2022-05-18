<img src="https://raw.githubusercontent.com/jimmybarron/talisman/master/assets/talismanLogoBig.png" width=30% height=30%>

# Talisman Shopify Theme

### [Live Theme on Shopify Development Store](https://talismanla.myshopify.com/)
##### Password: crystalLight
I worked on a website for a start-up selling crystals called Talisman. It was built on top of Shopify's starter theme Debut as a boilerplate, after which pretty much every component was edited or rebuilt. I was the sole designer and developer for the project, with the exception of a brand designer. To keep the site small and manageable for a single developer, we kept the site very limited in scope. A homepage, a dynamic filtering collection page, and a product page.

## Collection Page
I had to build a system that was able to use the existing Shopify structure but pull it into something that I could control dynamically on the fly without refreshes. I wanted it to be quick, fluid, and responsive. I did this by essentially creating a collection that contains all the crystals, and then hide and show them based on their ‘tags’. I used a library called Isotope to handle the changes and reordering. I also really liked all the custom animations I created for the ‘mood filters’ using GSAP.

## Product Page
This was fun to make because one of things asked for was an animated gradient that would be a custom color palette for each crystal. The CMS is very limited by design so I had to create a solution for adding all this extra data for each product. I used a hidden metafields attribute provided by Shopify to dynamically link the extra data and images uploaded elsewhere to each crystal based on the crystal’s name and a strict file naming scheme for the extra images.
