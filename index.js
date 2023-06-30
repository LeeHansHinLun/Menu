/**
 * Copyright (c) 2023 MediumCraft Development
 */

// Hides the error messages if the JavaScript loads successfully
// DISABLED FEATURE - Lag
//document.getElementsByClassName('hide-on-js-load').style.display = 'none';

fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        // Set the title of the page
        document.title = data.title || 'Restaurant Menu';

        // Set the header
        const headerElement = document.getElementById('header');
        if (data.header) {
            headerElement.textContent = data.header;
        } else {
            headerElement.style.display = 'none';
        }

        // Set the footer
        const footerElement = document.getElementById('footer');
        if (data.footer) {
            footerElement.textContent = data.footer;
        } else {
            footerElement.style.display = 'none';
        }

        // Set the social media links
        const socialMedia = data['social-media'];
        if (socialMedia) {
            const facebookLink = document.getElementById('facebook');
            if (socialMedia.facebook) {
                facebookLink.href = socialMedia.facebook;
            } else {
                facebookLink.style.display = 'none';
            }

            const instagramLink = document.getElementById('instagram');
            if (socialMedia.instagram) {
                instagramLink.href = socialMedia.instagram;
            } else {
                instagramLink.style.display = 'none';
            }

            const twitterLink = document.getElementById('twitter');
            if (socialMedia.twitter) {
                twitterLink.href = socialMedia.twitter;
            } else {
                twitterLink.style.display = 'none';
            }

            const youtubeLink = document.getElementById('youtube');
            if (socialMedia.youtube) {
                youtubeLink.href = socialMedia.youtube;
            } else {
                youtubeLink.style.display = 'none';
            }
        } else {
            document.getElementById('social-media').style.display = 'none';
        }

        // Set the maps links
        const maps = data.maps;
        if (maps) {
            const mapsElement = document.getElementById('maps');
            for (const map in maps) {
                const mapLink = maps[map];
                //const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = mapLink;
                link.textContent = map;
                //listItem.appendChild(link);
                mapsElement.appendChild(link);
        }
        } else {
            document.getElementById('maps-container').style.display = 'none';
        }

        // Set the take out
        const takeouts = data['take-out'];
        if (takeouts) {
            const takeoutsElement = document.getElementById('take-out-container');
            for (const takeout in takeouts) {
                const takeoutLink = takeouts[takeout];
                const link = document.createElement('a');
                link.href = takeoutLink
                link.textContent = takeout
                takeoutsElement.appendChild(link)
            }
        } else {
            document.getElementById('take-out-container').style.display = 'none';
        }

        // Set the copyright
        const copyrightElement = document.getElementById('copyright');
        if (data.copyright) {
            copyrightElement.textContent = data.copyright;
        } else {
            copyrightElement.style.display = 'none';
        }

        // Render the menu items
        const menuContainer = document.getElementById('menu');
        const menuItems = data['menu-items'];
        for (let category in menuItems) {
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'card';

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            categoryContainer.appendChild(categoryTitle);

            const itemList = menuItems[category];
            for (let itemId in itemList) {
                const item = itemList[itemId];
                const itemName = item.name;
                const itemDescription = item.description;
                const itemImage = item.image;
                const itemPrice = item.price;

                const itemContainer = document.createElement('div');
                itemContainer.className = 'menu-item';

                const itemImageElement = document.createElement('img');
                itemImageElement.src = itemImage;
                itemImageElement.alt = itemName;
                itemImageElement.className = 'menu-item-image';

                const itemTitle = document.createElement('h3');
                itemTitle.textContent = itemName;

                const itemDescriptionElement = document.createElement('p');
                itemDescriptionElement.textContent = itemDescription;

                const itemPriceElement = document.createElement('p');
                itemPriceElement.textContent = itemPrice;
                

                itemContainer.appendChild(itemTitle); // title
                itemContainer.appendChild(itemDescriptionElement); // description
                itemContainer.appendChild(itemPriceElement); // price
                itemContainer.appendChild(itemImageElement); // image

                categoryContainer.appendChild(itemContainer);
            }

            menuContainer.appendChild(categoryContainer);
        }   
    }
);