# App Navigation

The way to use the aplication is quite simple, navigating through the menu you can read the instructions on `How To Buy` or `about Sweet Olivia`. After that you can access the Catalogue through the nav bar up top, the category preview on the home page to go with an already aplied flter or from the footer.

In the Catalogue you can find the list of all the products avaliable with their `name`, `price`, `two thumbnail samples` and `disconted ammount`(if it has any). Aditionaly you can look for products using both the searchbar or the filter list, the later which changes to a dropdown menue in mobile.

When selecting a product you´ll be taken to it´s detailed view. There you can look at diferent samples with the slider and when you want to buy it just select the size and color of the product. After clicking on `buy` you´ll be taken to Sweet Olivia´s WhasApp chat with a pre-rendered message that lists the `name` of the product along with the selected `size` and `color`. There both buyer and seller can ask anout the stock and arrange the shipping method.

Both Footer and Navbar can redirect you to the Home & Category sections, open WhatsApp to ask more about the shop and a link to the shop´s instagram page.

## Dependencies Used

| Dependecy                | Purpose                                                                                                                                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react-router-dom         | Used to easily render wichever component was needed for the app params are aplied on the Catalogue to load it with a pre selected filter and on the product detail touse the params and filter the selected product with it. |
| react-bootstrap          | Used for some of the styling but mostly to get easy access to a slider and a dropdown menu.                                                                                                                                  |
| whatsapp-react-component | Used to redirect to a WhatsApp with the given phone number and pre-rendered message.                                                                                                                                         |

## How It Works

The app, as it was requested, is a purely front end site. The `data` folder serves as a storage and it´s designed so that the app can be updated by just editing, deleting or adding objects to this folder.

### Storage (data folder)

- catalogue: It stores one JS file for each category of product. A new file within it can be created if the user wants to introduce a new category.
- productData: All the categories on the "catalogue" folder get combined into an array that holds the entire product catalogue called `productData` which is going to be imported to use all over the site. Aditionaly there is a second array that contains the names of each category called `cats` which is going to be used to display the filters on the Home and Catalogue component. It also imports another array called `mainSlider` that controls the showed images for the slider on the Home component. Lastly it has a simple function that is exported to the ProductDetail component that filters the searched item on the list.

### Home

- Slider: it´s a default `react-bootstrap` `Carousel` component, displays as many images as the owner adds on the `mainSlider` array from the `data` folder.
- categories preview: it´s a list made with CSS grids that cuts the first and last categories of the `cats` array and then maps the other ones returning a card containing the first product of each category. Each card has a `react-router-dom` `Link` component that redirects to the Catalogue with it´s corresponding filter already aplied.

### ProductList (catalogue)

- filter bar: It filters the `productData` acording to it´s categories and stores it as a `category` state. Using a state it renders the filters as a bar when in desktop or a `react-bootstrap` `Dropdown` component on mobile.
- Searchbar : Auxiliary component that gets the full product list and filters the matching products with the searchbar input. If empty it returns the full list.
- categoryFilter: A common function that takes the filtered list from the searchbar and applies an extra filter based on the category selected.
- product list map: It renders a `ProductCard` component for each element on the array returned by the `categoryFilter` funtion. If the array is empty, it returns a "no products avaliable message".

### Product Card (catalogue)

- On hover: on mouse hover the card has a transition to the second picture of the product. However if there is no second picture it displays a static image to avoid an error.
- discount: validates if the product has an applied discount value, and if it does ir reders a small circle in the corner with it.

### Product Detail

- Slider: it´s a default `react-bootstrap` `Carousel` component, displays as many images as the owner adds on the `picture` value of the product´s object.
- size & color selectors: selectors for the product´s size and color, both take their display from their corresponding arrays on the product.color & product.size arrays respectively. On click they change a state which highlights the selected option. By default the first one is always selected.
- description: the description is optional on the product, if product.description is false, then it just wont render.

### WhatsApp mini components

- WhatsappButton: a component that uses the it takes the `whatsapp-react-component` dependency. It takes `size` and `color` states and te product `title` to create a pre-rendered message and imports the phone number to be addessed to from the `data` folder. On click it opens a WhatsApp addressed at the owner´s phone number with the pre-rendered message, works on both web and aplication versions of Whatsapp.
- WhatsappMenu: works similarly to the `WhatsappButton` but the prerendered message is fixed and is meant to let the client with the owner without having to buy something first. Also it can recive the text to be displayed in it along with the CSS class to be applied.

## Credits

This project was made by a small team of 4 people, 2 in charge of the development and 2 of the design.

### UX designers

- [Antonio Estevez](https://www.linkedin.com/in/antonino-estevez-824007152/)
- [Marina Bensusan](https://www.linkedin.com/in/marina-bensusan-290679144/)

### Front-end developers

- [Luciano Cerullo](https://www.linkedin.com/in/lucianocerullo77/)
- [Joaquin Bruhn](https://github.com/JoaquinBruhn)
