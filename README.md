# Product Catalog Web App

A **Next.js 14 (App Router)** based **Product Catalog Application** with **Cookie-based Authentication**, **Protected Routes**, and **Dynamic Product Pages**.

---

## About the Project

This is a **demo product catalog web application** where users can:

- Browse products from [FakeStoreAPI](https://fakestoreapi.com/)
- View dynamic product details at `/products/[id]`
- **Login to access protected product pages**
- **Redirect after login** to the product user wanted to see
- **Logout** securely using HttpOnly cookies
- **Header updates in real-time** with Login/Logout button using Zustand

This project demonstrates **Next.js App Router + Middleware + HttpOnly Cookie Authentication**.

---

## Features

- **Dynamic Product Pages** with `fetch` from FakeStore API
- **Protected Routes** using **Next.js Middleware**
- **HttpOnly Cookie Auth** (more secure than localStorage)
- **Redirect After Login** for better UX
- **State Management** with **Zustand**
- **TailwindCSS** for fast UI styling
- **Logout** clears cookie & updates header instantly

---

## Technologies Used

- **Next.js 14 (App Router)**
- **React 18**
- **TailwindCSS**
- **Zustand** (state management)
- **Next.js Middleware** (route protection)
- **HttpOnly Cookies** for auth
- **FakeStore API** (for demo products)

---

## How to Run the Project

**Clone the Repository**

```bash
git clone https://github.com/ruhulamin77/product-catalog.git
cd product-catalog
npm install
npm run dev
Open in Browser http://localhost:3000

```
