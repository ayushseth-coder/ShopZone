# ShopZone - E-Commerce SPA 

Welcome to **ShopZone**, a neat little single-page e-commerce application I built using React! 

The main goal of this project was to build a functional, lightweight frontend for an online store without overcomplicating things. I wanted to focus on core features like browsing products, adding them to a cart, and checking out, all while keeping the state manageable.

## Features 

* **Product Browsing:** Fetches and displays a list of products dynamically (using DummyJSON API).
* **Shopping Cart:** Add, remove, and manage quantities of items in your cart. 
* **State Persistence:** Your cart doesn't just disappear when you refresh the page! I hooked it up to `localStorage` so your items stay right there.
* **Authentication & Protected Routes:** Added a simple mock login system. You can browse all you want, but you gotta "log in" to access the checkout page.

## Tech Stack 

* **Frontend Framework:** React 19
* **Build Tool:** Vite (because it's ridiculously fast)
* **Routing:** React Router v7
* **State Management:** React Context API (decided to skip Redux for this one to keep it simple)
* **Styling:** Custom CSS (no Tailwind here, just pure CSS magic)

## important link

github respository link-- https://github.com/ayushseth-coder/kanban-board.git

Live demo Link-- https://kanban-board-teal-iota.vercel.app

video link-- https://www.loom.com/share/4786b8766dd44d4e96f342e771643d20

## Running it Locally 

If you want to spin this up on your own machine, it's pretty straightforward:

1. Clone this repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open up your browser and head to the local address provided by Vite.

## Future Plans (Maybe?)

- Add a real backend instead of a mock API.
- Implement a proper payment gateway like Stripe.
- Add some fancy animations.

Feel free to poke around the code and see how it works!
