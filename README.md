

https://user-images.githubusercontent.com/106928233/215378859-378408fa-e14b-47e3-96f8-1c39d259cb5a.mp4

# Frontend Case Study

- The purpose of this site is users should be able to buy and sell the player cards they want using their balance on the site. (Within Balance)
- The user can use the filtering feature while selecting the player cards.
- The user can view the details of the player cards.

## Header

- Header must be fixed.
- When the user makes a purchase or sale, the total amount of money he/she has should change (from 100 euros initially).
- The red indicator belonging to MyCards and Market in the header should change according to the area where the user is scrolling.
- Clicking on MyCards or Market should go to the corresponding area.

## Banner Carousel

- It should be Infinite slide. The first banner will be returned after the last banner.

## My Cards / Market

- Cards should be filterable with Card Type, Position, Price fields.
- When the Buy and Sell buttons are clicked, the purchase or sale verification modal should be opened.
- When clicking on the card, a modal with the details of the card should be opened and a request should be sent to the relevant endpoint for the details.
- Each page can contain a maximum of 10 player cards.
- The money owned by the user should change after the purchase and sale.
- If there is not enough money, the card should not be purchased and the warning modal should become opened.
- If the card is purchased, the card should be displayed in the MyCards area.
- If the card is Sold, the card should be displayed in the Marketplace

## Card Detail

- A modal with detailed information about the card .
- The information will be pulled from the endpoint.
- You can buy or sell the Card on this screen.

## Notes

- The project should be written in React.js or next.js.
- You can use any library you want.
- Web design should be done according to the submitted design.
- It should be a performance application.
- Accessibility should be given importance.
- Apart from these improvements, the improvements made according to the knowledge will be evaluated extra.
- IMPORTANT! Details and design of the project should not be shared anywhere! Repository must be private!.

## Endpoints

- API = http://challenge.vole.io

### Get requests

> - API/cards/market
> - API/cards/mycards
> - API/cards/:id
> - API/budget

![image](https://user-images.githubusercontent.com/106928233/215375251-6190bc38-6882-44b6-8414-56c121622d93.png)
![image](https://user-images.githubusercontent.com/106928233/215375309-2e88cd4e-2b43-4bcf-9a2d-667cf2ee7b59.png)
![image](https://user-images.githubusercontent.com/106928233/215375331-377a5c51-5070-4a70-9288-d3c8751413b4.png)
![image](https://user-images.githubusercontent.com/106928233/215375363-72dedcbf-dd30-4294-a4e9-e06b244f000a.png)
![image](https://user-images.githubusercontent.com/106928233/215375396-ba739f1b-eda7-4997-934d-3bd452e86c10.png)

