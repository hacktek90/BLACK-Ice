# Site Store

A modern web application that serves as a showcase platform for websites and projects. Users can submit their own sites to be displayed in a beautiful glass-morphism UI design.

## Features

- **Glass-Morphism Design**: Modern UI with glass panels, gradients, and subtle animations
- **Responsive Layout**: Works seamlessly across desktop and mobile devices
- **Real-time Data**: Uses Firebase Realtime Database for live updates
- **Search Functionality**: Allows users to search through submitted sites
- **Submission System**: Easy form to submit new websites to the store
- **Admin Controls**: Special admin mode for editing and managing entries

## Technologies Used

- HTML5
- CSS3 (with modern features like glass effects, gradients, and responsive grids)
- JavaScript (ES6 modules)
- Firebase Realtime Database
- Google Fonts (Inter font family)
- CDN-hosted libraries

## Design Elements

- **Deep Space Theme**: Dark theme with deep space colors (#050507 as main background)
- **Glass Panels**: Semi-transparent elements with backdrop filters
- **Floating Navigation**: Sticky navbar with pill-shaped design
- **Card-based Grid**: Responsive grid layout for displaying site cards
- **Smooth Animations**: Hover effects, transitions, and interactive elements

## How It Works

1. Users visit the site and see a grid of submitted websites
2. They can search for specific sites using the search bar
3. They can submit their own sites using the "Submit" button
4. Submitted sites appear in the grid for others to view
5. Admins with special access can edit or delete entries

## Firebase Configuration

The application uses Firebase Realtime Database with the following configuration:
- API Key: AIzaSyAp9kCBsDLnQEmR7wWHXwt3FB2T1zDtiqU
- Auth Domain: h-90-8a7c5.firebaseapp.com
- Database URL: https://h-90-8a7c5-default-rtdb.firebaseio.com
- Project ID: h-90-8a7c5

## File Structure

- `index.html`: Main HTML structure and UI components
- `style.css`: Additional CSS styles (currently empty, styles are embedded in HTML)
- `script.js`: Additional JavaScript (currently empty, scripts are embedded in HTML)

## Admin Access

Admin functionality is available by appending `?admin=elite` to the URL. This provides access to edit and delete capabilities for site entries.

## Installation

To run this project locally:

1. Clone or download the repository
2. Open `index.html` in a web browser
3. The application requires internet connectivity to access Firebase and external resources

## Usage

- Browse through the submitted sites in the main grid
- Use the search bar to find specific sites
- Click "Submit" to add your own site to the store
- Fill in the project name, live URL, icon URL, and description
- To access admin features, navigate to the page with `?admin=elite` parameter

## Contributing

Feel free to fork this repository and make improvements. Submit a pull request with your changes for review.

## License

This project is open source and available under the MIT License.