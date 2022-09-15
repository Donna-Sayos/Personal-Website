import HangOut from "../../assets/HangOut.png";
import RTR from "../../assets/RTR.png";
import PT from "../../assets/PT.png";

export const PROJECTS = [
    {
        id: 1,
        image: HangOut,
        title: "HangOut Mobile App",
        description: "A social app connecting users through events and activities. A social app that connects users by centering community connection through events and activities that are close to both users; Users can choose how they want to use the app (romance, friendship, solo).",
        skills: "React Native Expo | Firebase (Firestore, Auth, Storage) | CSS | Redux | APIs (react-native-deck-swiper, react-native-gifted-chat, expo-image-picker, react-native-maps, react-native-google-places-autocomplete, datetimepicker)",
        github: "https://github.com/team-fireballs-gh/team-fireballs-capstone-shredda.git",
        demo: "https://www.youtube.com/watch?v=SVDFDJWC3bA&list=PLx0iOsdUOUmnLN8sDLqSgVBNZmFq7Rx4k&index=6",
    },
    {
        id: 2,
        image: RTR,
        title: "Ready To Roomba",
        description: "Are you ready to Roomba? Are you ready to change your life? Your life will be dust-free and crust-free. Pick up a Roomba today! A mock e-commerce site where users can browse a selection of robotic vacuums, add to their cart, and checkout their selected products.",
        skills: "Node.js | HTML5 | CSS | React | Redux | Express | PostgreSQL | Bootstrap | Stripe | Heroku",
        github: "https://github.com/Team-Wall-E/Ready-To-Roomba.git",
        demo: "https://drive.google.com/file/d/15-Me47i0KLTT3GteoIg3BU8zajsJTf0D/view?usp=sharing",
    },
    {
        id: 3,
        image: PT,
        title: "Price Tracker",
        description: "A program that watch for price changes by periodically scraping product pricings on eCommerce sites and extracts the changes. Get real-time change alerts on pricing. Once the price goes below your target price, an email will be sent to you.",
        skills: "Node.js | Cronjob | Nightmare | Puppeteer | Nodemailer | Web Scraping",
        github: "https://github.com/Donna-Sayos/Price-Tracker.git",
        demo: "https://drive.google.com/file/d/15-Me47i0KLTT3GteoIg3BU8zajsJTf0D/view?usp=sharing",
    },
];