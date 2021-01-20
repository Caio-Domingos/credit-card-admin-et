# Credit Cards Management

This app aims to manage credit cards. It can either list new or existing credit cards, modify and delete them if necessary.

## Installation

- Clone this repository (`git clone https://github.com/Caio-Domingos/credit-card-admin-et.git`).
- Run the script`npm install` to install all dependencies.
- Run the script`npm run serve`.

## Usage

- Authentication

The app have a static authentication, if you no has logged yet, the app not show to you your pages.
I created only one credential, is `username:"admin"` and `password:"admin"`
The authentication module use the LocalStorage to persist your login, so you don't need login every time when the app load.

- List cards

The card's list is sorted by card's name, you can filter her by name too, and the list is paginate by 10 per page.
Each card have two buttons aside, one to edit your values and other to delete.
The last card always will be a card for creation of one new

- Create/Edit Card

All inputs with "\*" are required, and should be validated before save a new card or any updates

## Contributing

I really enjoyed making this app, is my first time making any app using the Vue, and I hadn't used it yet one library to manipulate the state (like Redux, or in this case Vuex), and i really liked this experience, is incredible how all data can be access for all component without need pass her between components, i think my code stay more clean and i was able to better separate the data each in its place for future errors that were appearing in the middle of the way, it was much easier to find and correct them.

Make by [Caio Domingos](https://github.com/Caio-Domingos)
