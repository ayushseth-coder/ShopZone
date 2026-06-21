# Development Log & AI Prompts

Building ShopZone was a fun ride! Since I was tight on time for my Sprint 6 assignment, I decided to lean heavily on AI to help scaffold things out and get past some boilerplate. 

Here's a breakdown of how I approached it and the prompts I used.

## The Prompts I Used

I started off with a pretty detailed prompt to get the base structure going:
> "You are a senior React + Frontend Architect working in an enterprise product team. I want you to GENERATE A COMPLETE, WORKING REACT PROJECT for my Sprint 6 assignment. My project name is: 'ShopZone – E-Commerce SPA'."

Once the base was there, I fired off a few follow-ups to add specific features:
> "Initialize routing using react-router-dom."
> "Implement global cart using React Context API."
> "Sync cart data with localStorage."
> "Create mock authentication and protected routes for checkout."

## Challenges I Ran Into 

It wasn't all smooth sailing though. A few things tripped me up:

* **Cart State & localStorage:** Managing the global cart state with Context API was fine, but syncing it with `localStorage` got a bit tricky. I had to make sure the `useEffect` hooks were firing at the right time so I didn't accidentally overwrite the saved cart with an empty one on reload.
* **Data Fetching:** Pulling the products from `https://dummyjson.com/products` meant dealing with loading states. If I didn't handle the loading flags correctly, the app would either crash or show an ugly empty screen before the data arrived.
* **React Router Quirks:** I wanted a protected route for the checkout page. Figuring out exactly how to wrap the checkout component in a `<ProtectedRoute>` while adhering to the newer `react-router-dom` syntax took a bit of trial and error.

## How AI Came in Handy 

Honestly, the AI was a huge time-saver. 
* It set up the Vite + React boilerplate in seconds.
* I didn't have to write the repetitive Context API code from scratch (which is always a plus).
* It even helped generate a decent-looking CSS structure without me having to install Tailwind or Bootstrap.
* Getting the basic `fetch` logic down was instantaneous.

## Takeaways

This project was a great refresher. 
- I realized that for small to medium apps, the React Context API is more than enough—Redux would have been overkill here.
- Hydrating state from `localStorage` is a super useful pattern that makes the app feel much more robust.
- Protected routes are easier to implement than I thought once you understand the wrapper component pattern.

Overall, a solid learning experience!
