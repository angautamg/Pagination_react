# Pagination_react
[ React Pagination App (Overview)
🔧 Imports
./styles.css – Custom styling.

PAGE_SIZE – Constant for items per page.

Card – Component to render individual product cards.

Pagination – Component for pagination controls.

useState, useEffect – React hooks.

📦 State Management
products: Holds all fetched product data.

currentPage: Tracks the current page number.

🌐 Fetching Data
fetchProduct() calls dummy API: https://dummyjson.com/products?limit=500.

On success, stores product data in products.

📅 Pagination Logic
total_product – Total number of products.

totalPages – Total pages = Math.ceil(total_product / PAGE_SIZE).

start and end – Calculate slice indices for current page.

🔁 Pagination Controls
handlePrev – Moves to previous page.

handleNext – Moves to next page.

handleChange(n) – Sets currentPage to n.

🧩 Render
If products is empty → shows "No product found".

Else:

Displays current page info.

Renders Pagination component with handlers.

Displays sliced products using Card.](url)
