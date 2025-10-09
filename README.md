# Modern and Interactive Developer Portfolio

This is a template for a modern, single-page developer portfolio website built with HTML, CSS, and JavaScript. It is designed to be visually appealing, interactive, and easy to customize. The design is clean, professional, and includes a dark mode.

-----

## Key Features

This portfolio is packed with modern and interactive features to make a great impression:

  * **Light/Dark Mode Toggle**: A sleek theme switcher that remembers the user's preference using `localStorage`.
  * **Interactive Particle Background**: An animated, interactive particle effect in the hero section using `particles.js`.
  * **Animated Typing Effect**: The main headline features a dynamic typing animation powered by `Typed.js`.
  * **3D Skills Sphere**: An engaging, rotating 3D sphere of skills that can be manipulated with the mouse, created with `TagCloud.js`.
  * **Konami Code Easter Egg**: A hidden "Matrix" digital rain effect that activates when the user inputs the classic Konami code.
  * **Fully Responsive Design**: Adapts beautifully to all screen sizes, from mobile phones to widescreen desktops.
  * **Scroll Animations**: Elements like project cards and skills fade in smoothly as you scroll down, powered by the Intersection Observer API.
  * **Dynamic Navigation**: The navigation bar appears and disappears on scroll and automatically highlights the currently active section.
  * **Certificate Modal**: A clean pop-up modal to display certification images in full view.

-----

## Technologies Used

  * **Frontend**: HTML5, CSS3, JavaScript (ES6+)
  * **Libraries**:
      * particles.js - for the hero background.
      * Typed.js - for the typing animation.
      * TagCloud.js - for the 3D skills sphere.

-----

## How to Use

Getting this portfolio set up for your own use is simple:

1.  **Clone the repository**:

    ```bash
    git clone https://sanele4848.github.io/My-Portfolio.git
    ```

2.  **Navigate to the directory**:

    ```bash
    cd My-Portfolio
    ```

3.  **Open index.html**:
    Simply open the `index.html` file in your favorite web browser to see the site.

-----

## Customization Guide

You can easily personalize this template. All the content is in the `index.html` file.

1.  **Personal Information**:

      * Open `index.html` and search for placeholder text like "Sanele Mabuza", project descriptions, and contact details. Replace them with your own information.

2.  **Animated Hero Text**:

      * In the `<script>` tag at the bottom, find the `Typed.js` instance.
      * Modify the `strings` array to change the animated words:
        ```javascript
        new Typed('#typed-text', {
            strings: ['Your Skill.', 'Your Passion.', 'Your Technology.'],
            // ... options
        });
        ```

3.  **3D Skills Sphere**:

      * Find the `TagCloud` initialization in the script.
      * Update the `myTags` array with your list of skills:
        ```javascript
        const myTags = [
            'React', 'Node.js', 'Python', 'Docker',
            'AWS', 'SQL', 'Git', 'Figma'
            // ... add your skills
        ];
        TagCloud('.tagcloud', myTags, { /* ... options */ });
        ```

4.  **Certificate Images**:

      * Find the `certImages` object in the script.
      * Replace the placeholder URLs with links to your actual certificate images.
        ```javascript
        const certImages = {
            'cert1': 'path/to/your/first-certificate.png',
            'cert2': 'path/to/your/second-certificate.png',
            // ... and so on
        };
        ```

5.  **Colors and Theme**:

      * To change the site's color scheme, edit the CSS variables at the top of the `<style>` tag in the `<head>` section.
        ```css
        :root {
            --primary: #1a73e8; /* Change this for the main accent color */
            /* ... other colors */
        }
        ```
