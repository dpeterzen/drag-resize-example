1. **Create a new Vite project:**
   - Open your terminal and run the following command to create a new Vite project with React template:
     ```sh
     npm create vite@latest my-vite-react-app --template react
     ```
   - Navigate into your project directory:
     ```sh
     cd my-vite-react-app
     ```

2. **Install Tailwind CSS:**
   - Install Tailwind CSS and its dependencies:
     ```sh
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Initialize Tailwind CSS configuration:
     ```sh
     npx tailwindcss init -p
     ```

3. **Configure Tailwind CSS:**
   - Open `tailwind.config.js` and update the `content` array to include your template files:
     ```js
     module.exports = {
       content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

4. **Add Tailwind directives to your CSS:**
   - Open `src/index.css` and add the following lines:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

5. **Start your development server:**
   - Run the following command to start the development server:
     ```sh
     npm run dev
     ```

Here is the complete code for the configuration files:

**tailwind.config.js:**
```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now, you should have a Vite project set up with React and Tailwind CSS. You can start building your application!