import project1 from "../assets/images/pj1.png";
import project2 from "../assets/images/pj2.png";
import project3 from "../assets/images/pj3.png";
import project4 from "../assets/images/pj4.png";
import imageOne from "../assets/images/Binfo.png";
import imageTwo from "../assets/images/Frame 843.png";
import imageThree from "../assets/images/Frame 844.png";


import Binfo from "../assets/images/My work-Application Image/Binfo-Application.png";
import A2Myanmar from "../assets/images/My work-Logo Image/A2-Myanmar-Logo.png";
import Zconor from "../assets/images/My work-Website Image/Zconor-Website.png"



export const projectNavData = [
  {
    path: "/my-work/app",
    title: "App Design",
  },
  {
    path: "/my-work/web",
    title: "Web Design",
  },
  {
    path: "/my-work/logo",
    title: "Logo Design",
  },
];



export const projectData = [
    {
      id: 1,
      project_name: "Binfo Track & Trains",
      title: "BINFO Calorie Tracker",
      // image: Binfo,
      // image: A2Myanmar,
      image: Zconor,
      slider:true,
      type:'app',
      content: `Binfo is a modern and user-friendly mobile application designed to help people take control of their health and fitness journey. With a focus on simplicity and accuracy, the app allows users to track their daily calorie intake, monitor nutritional values, and set personalized fitness goals.

      The app features an intuitive interface where users can log their meals, discover detailed food information, and visualize their progress with easy-to-read charts. Binfo also provides fitness tracking options, enabling users to record workouts and balance calorie intake with physical activity.

      Built to encourage consistency and healthy habits, Binfo combines functionality with a sleek design, making it an ideal companion for anyone looking to improve their lifestyle.`,
      organization: "EarthLike.,Ltd.",
      date: "Feb 2024 - Apr 2024",
      industry: "Calorie Track & Health",
      scope_of_work: ["UX/UI Design", "Product Ideation", "Mobile App Design"],
      how_it_work: `
                Binfo is a calorie-tracking app that includes a built-in step counter and a comprehensive database of Myanmar foods, helping users track daily activity and log local meals with ease.

                Binfo Calorie Tracker features automatic step counting and Myanmar-specific food data, so users can monitor both movement and meals in one place.

                With step counting and a rich Myanmar food database, Binfo enables users to accurately track calories, stay active, and make informed nutrition choices.`,
      image_one: Zconor,
      image_two: imageOne,
      image_three: Binfo,
      image_four: A2Myanmar,
      image_five: imageOne,
      user_journey: `1. Onboarding & Setup:
                      When users first download Binfo, they are welcomed with a clean and friendly onboarding experience.
                      They set up their profile by entering basic health data such as age, gender, weight, height, and fitness goals (e.g., weight loss, muscle gain, or maintaining health).
                      2. Tracking Calories & Nutrition:
                      Users can easily log their meals through a searchable food database that includes both international and Myanmar food data.
                      Binfo provides calorie breakdowns along with carbs, protein, and fat details so users understand their daily nutrition balance.
                      3. Activity & Step Tracking:
                      Integrates a step count function, automatically tracking movement throughout the day.
                      This helps users see how many calories they burn from walking or exercise, keeping fitness goals connected with real activity.
                      4. Progress & Insights:
                      Users can check their daily, weekly, and monthly progress with easy-to-read charts.
                      Motivational reminders and notifications encourage consistency.
                      The app highlights insights such as “You met your protein goal today” or “You are close to your calorie target,” which keeps the experience engaging.`,
      
      solution: `Binfo Application is a simple and effective app for daily health management and calorie calculation. It helps users track their food intake with detailed nutrition data, including Myanmar foods, making it easy to monitor what they eat every day. 

The app also has a step count function, allowing users to connect their movement with their calorie goals. With clear charts, progress tracking, and personalized health targets, Binfo provides a smooth user experience and supports fitness and wellness in daily life.`,
    },
    {
      id: 2,
      image: project3,
      title: "BINFO Calorie Tracker",
      slider:false,
      type:'app',
    },
    {
      id: 3,
      image: project4,
      title: "BINFO Calorie Tracker",
      slider:true,
      type:'app'
    },


    {
      id: 4,
      project_name: "Binfo Track & Train",
      title: "BINFO Calorie Tracker",
      image: project3,
      slider:true,
      type:'web',
      content: `Binfo is a modern and user-friendly mobile application designed to help people take control of their health and fitness journey. With a focus on simplicity and accuracy, the app allows users to track their daily calorie intake, monitor nutritional values, and set personalized fitness goals.

The app features an intuitive interface where users can log their meals, discover detailed food information, and visualize their progress with easy-to-read charts. Binfo also provides fitness tracking options, enabling users to record workouts and balance calorie intake with physical activity.

Built to encourage consistency and healthy habits, Binfo combines functionality with a sleek design, making it an ideal companion for anyone looking to improve their lifestyle.`,
      organization: "EarthLike.,Ltd.",
      date: "Feb 2024 - Apr 2024",
      industry: "Calorie Track & Health",
      scope_of_work: ["UX/UI Design", "Product Ideation", "Mobile App Design"],
      image_one: imageOne,
      how_it_work: `
                Binfo is a calorie-tracking app that includes a built-in step counter and a comprehensive database of Myanmar foods, helping users track daily activity and log local meals with ease.

                Binfo Calorie Tracker features automatic step counting and Myanmar-specific food data, so users can monitor both movement and meals in one place.

                With step counting and a rich Myanmar food database, Binfo enables users to accurately track calories, stay active, and make informed nutrition choices.`,
      image_two: imageOne,
      image_three: imageTwo,
      image_four: imageThree,
      user_journey: `1. Onboarding & Setup:
                      When users first download Binfo, they are welcomed with a clean and friendly onboarding experience.
                      They set up their profile by entering basic health data such as age, gender, weight, height, and fitness goals (e.g., weight loss, muscle gain, or maintaining health).
                      2. Tracking Calories & Nutrition:
                      Users can easily log their meals through a searchable food database that includes both international and Myanmar food data.
                      Binfo provides calorie breakdowns along with carbs, protein, and fat details so users understand their daily nutrition balance.
                      3. Activity & Step Tracking:
                      Integrates a step count function, automatically tracking movement throughout the day.
                      This helps users see how many calories they burn from walking or exercise, keeping fitness goals connected with real activity.
                      4. Progress & Insights:
                      Users can check their daily, weekly, and monthly progress with easy-to-read charts.
                      Motivational reminders and notifications encourage consistency.
                      The app highlights insights such as “You met your protein goal today” or “You are close to your calorie target,” which keeps the experience engaging.`,
      image_five: imageOne,
      solution: `Binfo Application is a simple and effective app for daily health management and calorie calculation. It helps users track their food intake with detailed nutrition data, including Myanmar foods, making it easy to monitor what they eat every day. 

The app also has a step count function, allowing users to connect their movement with their calorie goals. With clear charts, progress tracking, and personalized health targets, Binfo provides a smooth user experience and supports fitness and wellness in daily life.`,
    },
    {
      id: 5,
      image: project2,
      title: "BINFO Calorie Tracker",
      slier:false,
      type:'web',
    },

    {
      id: 6,
      image: project1,
      title: "BINFO Calorie Tracker",
      slider:false,
      type:'logo',
    },
    {
      id: 7,
      image: project2,
      title: "BINFO Calorie Tracker",
      slider:true,
      type:'logo',
    },
    {
      id: 8,
      image: project3,
      title: "BINFO Calorie Tracker",
      slider:false,
      type:'logo',
    },
    {
      id: 9,
      image: project4,
      title: "BINFO Calorie Tracker",
      slider:false,
      type:'logo'
    },
  ];