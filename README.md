# Group_Project_WebDev
# CrowdHive Event Management System

## Purpose of the Website

**CrowdHive** is an event management platform designed to help users find and host events. The website allows users to search for events based on categories like music, business, food, and more. Users can register and log in to access personalized features, including event hosting and participation. It is designed to provide a smooth experience across all devices with a responsive design.

### Features
1. **User Authentication**: The website provides secure login and registration functionalities with form validation for user credentials.
2. **Event Listings**: Users can browse events in different categories such as music, business, and nightlife.
3. **Responsive Design**: The website is optimized for both desktop and mobile devices, ensuring compatibility across all platforms.
4. **Landing Page**: Display of upcoming and trending events, with navigation options for different event categories.

## Technologies Used
- HTML
- CSS (with Bootstrap for layout and components)
- JavaScript (for form validation and page interaction)
- Bootstrap 5.3 (for responsive design)

## List of Bootstrap Components Used
1. **Navbar**: A fully responsive navigation bar allowing users to navigate between the home page, events, categories, and login page.
2. **Cards**: Bootstrap card components are used to display individual events on the landing page.
3. **Form Controls**: Bootstrap form controls are used for the login and registration forms, including input fields, labels, and buttons.
4. **Modal**: A modal is used in the login page for password reset functionality.
5. **Carousel**: The landing page uses a Bootstrap carousel to display trending events in a scrollable manner.
6. **Grid System**: Bootstrap's grid system is utilized to arrange event categories and event cards in a responsive layout.
7. **Buttons**: Custom-styled Bootstrap buttons for form submissions and interactive elements.
8. **Input Group**: Used in registration and login forms to structure user input.
9. **Form Validation**: JavaScript validation integrated with Bootstrap styles for error messages.
10. **Tooltips**: Used to display informative messages on hover.
11. **Typography Utilities**: Various Bootstrap typography utilities (e.g., `text-center`, `fw-bold`) to style text and headings.
12. **Responsive Images**: Bootstrap classes used for making event images responsive.
13. **Shadows**: Bootstrap’s shadow utility to create depth for cards and modals.
14. **Flexbox Utilities**: Bootstrap flexbox utilities are used to align items inside navigation and content sections.
15. **Alignment Classes**: Bootstrap alignment classes are used to center content vertically and horizontally within sections.
16. **Spacing Utilities**: Padding (`p-`) and margin (`m-`) utilities to ensure consistent spacing across elements.

## Project Setup
1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/<your-group-repository-url>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CrowdHive
   ```
3. Open `login.html` and `landing.html` in your preferred web browser to test the functionality.

## Team Members and Contributions
- **[Your Name]**: Worked on the login page design, validation logic, and responsive layout.
- **[Teammate 1]**: Developed the landing page structure and integrated the event categories and cards.
- **[Teammate 2]**: Implemented registration form validation and the card display for event listings.

## Form Validation Details
Form validation is performed using JavaScript, ensuring that:
- **Email**: Must be a valid email format (e.g., `example@domain.com`).
- **Password**: Must be at least 8 characters long and include uppercase, lowercase letters, a number, and a special character.
- **First Name and Last Name**: Required fields that must not be empty.

