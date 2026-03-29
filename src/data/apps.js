const apps = [
  {
    image: "/demo-app (1).webp",
    title: "Task Master",
    companyName: "Productive Inc.",
    id: 1,
    description: "Organize your daily tasks efficiently and boost productivity. Task Master helps you plan your day, set priorities, create recurring tasks, and track your progress with insightful weekly reports. Whether you're a student, freelancer, or busy professional, Task Master adapts to your workflow and keeps you focused on what matters most.\n\nWith its intuitive drag-and-drop interface, you can rearrange tasks effortlessly, set due dates and reminders, and categorize tasks by projects or priority levels. The built-in focus mode eliminates distractions so you can work in deep concentration.\n\nTask Master also integrates with your calendar, email, and other productivity tools, giving you a unified view of your day. Collaboration features let you share task lists with teammates, assign responsibilities, and track team progress — all in one place.",
    size: 25,
    reviews: 1200,
    ratingAvg: 4.5,
    downloads: 50000,
    ratings: [
      { name: "1 star", count: 50 },
      { name: "2 star", count: 100 },
      { name: "3 star", count: 200 },
      { name: "4 star", count: 400 },
      { name: "5 star", count: 450 }
    ]
  },
  {
    image: "/demo-app (2).webp",
    title: "FitTrack",
    companyName: "Healthify Ltd.",
    id: 2,
    description: "Track your workouts and stay fit with personalized plans. FitTrack combines advanced fitness tracking with smart AI coaching to deliver workouts tailored to your body, goals, and schedule. Whether you're aiming to lose weight, build muscle, or simply stay active, FitTrack builds a progressive plan that grows with you.\n\nLog exercises with detailed metrics including sets, reps, weight, duration, and heart rate. The real-time analytics dashboard gives you a bird's eye view of your fitness journey, showing strength gains, calorie burns, and weekly streaks.\n\nFitTrack also connects to wearables like smartwatches and fitness bands, syncing your health data automatically. The built-in nutrition tracker lets you log meals and monitor macros, so you always know how your diet aligns with your fitness targets.",
    size: 40,
    reviews: 2100,
    ratingAvg: 4.6,
    downloads: 80000,
    ratings: [
      { name: "1 star", count: 60 },
      { name: "2 star", count: 120 },
      { name: "3 star", count: 300 },
      { name: "4 star", count: 700 },
      { name: "5 star", count: 920 }
    ]
  },
  {
    image: "/demo-app (3).webp",
    title: "Foodie Hub",
    companyName: "Taste Labs",
    id: 3,
    description: "Discover and order delicious food from nearby restaurants. Foodie Hub connects you with hundreds of local eateries, cloud kitchens, and home chefs within minutes. Browse menus with mouth-watering photos, read verified reviews, and order your favorites with just a few taps.\n\nReal-time tracking lets you watch your order as it moves from the kitchen to your door. Smart recommendations powered by AI learn your taste preferences over time, suggesting new dishes you're likely to love. Exclusive deals and loyalty rewards make every order more affordable.\n\nFoodie Hub also supports group ordering so you and your team can add items to a shared cart. Schedule orders in advance for lunch meetings or special occasions, and enjoy contactless delivery for added safety.",
    size: 35,
    reviews: 3400,
    ratingAvg: 4.3,
    downloads: 120000,
    ratings: [
      { name: "1 star", count: 200 },
      { name: "2 star", count: 300 },
      { name: "3 star", count: 700 },
      { name: "4 star", count: 1100 },
      { name: "5 star", count: 1100 }
    ]
  },
  {
    image: "/demo-app (4).webp",
    title: "EduLearn",
    companyName: "Smart Study Co.",
    id: 4,
    description: "Learn new skills with interactive courses and lessons. EduLearn brings world-class education to your fingertips with over 10,000 courses across technology, design, business, language, and personal development. Expert instructors from top universities and companies guide you through bite-sized lessons designed for busy learners.\n\nInteractive quizzes, hands-on projects, and peer discussions reinforce what you learn. AI-powered personalization ensures you always study at exactly the right difficulty, preventing boredom and frustration. Earn certificates upon completion that are recognized by leading employers globally.\n\nDownload lessons for offline learning during commutes or travel. The spaced repetition system reminds you to review key concepts at the perfect intervals so nothing is forgotten. With lifetime access to purchased courses, EduLearn is an investment in yourself that pays off forever.",
    size: 50,
    reviews: 5000,
    ratingAvg: 4.7,
    downloads: 200000,
    ratings: [
      { name: "1 star", count: 100 },
      { name: "2 star", count: 150 },
      { name: "3 star", count: 400 },
      { name: "4 star", count: 1200 },
      { name: "5 star", count: 3150 }
    ]
  },
  {
    image: "/demo-app (5).webp",
    title: "TravelGo",
    companyName: "Wander Corp.",
    id: 5,
    description: "Plan your trips and explore new destinations easily. TravelGo is your ultimate travel companion, covering every aspect of your journey from inspiration to return. Discover hidden gems, iconic landmarks, and local secrets curated by real travelers who've been there.\n\nBook flights, hotels, car rentals, and experiences all in one place with best-price guarantees. AI-powered trip planning suggests optimized itineraries based on your interests, budget, and travel dates. Real-time flight alerts notify you of delays, gate changes, and cancellations instantly.\n\nOffline maps work without data so you're never lost. Language translation, currency conversion, and local tips help you navigate unfamiliar cultures confidently. TravelGo's community of millions of travelers shares reviews, photos, and advice to help you make the most of every adventure.",
    size: 60,
    reviews: 2700,
    ratingAvg: 4.4,
    downloads: 95000,
    ratings: [
      { name: "1 star", count: 120 },
      { name: "2 star", count: 200 },
      { name: "3 star", count: 500 },
      { name: "4 star", count: 900 },
      { name: "5 star", count: 980 }
    ]
  },
  {
    image: "/demo-app (6).webp",
    title: "MusicWave",
    companyName: "SoundLab",
    id: 6,
    description: "Stream your favorite songs anytime, anywhere. MusicWave offers access to over 100 million tracks spanning every genre, era, and mood. High-fidelity audio with lossless quality makes every listening session feel like being in the studio with the artist.\n\nAI-curated playlists adapt to your mood, time of day, and recent listening habits. Discover new artists through personalized recommendations and weekly discovery mixes. Follow your favorite artists and get notified when they release new music or announce concerts near you.\n\nDownload unlimited songs for offline listening with any premium plan. Cross-device sync means you can start a playlist on your phone and continue on your smart speaker without missing a beat. Collaborative playlists let you build the perfect party mix with friends in real time.",
    size: 45,
    reviews: 6000,
    ratingAvg: 4.8,
    downloads: 300000,
    ratings: [
      { name: "1 star", count: 80 },
      { name: "2 star", count: 100 },
      { name: "3 star", count: 300 },
      { name: "4 star", count: 1200 },
      { name: "5 star", count: 4320 }
    ]
  },
  {
    image: "/demo-app (1).webp",
    title: "ShopEasy",
    companyName: "MarketPlace Ltd.",
    id: 7,
    description: "Shop online with amazing deals and fast delivery. ShopEasy connects you with thousands of sellers offering everything from electronics and fashion to groceries and home goods. Smart price comparison shows you the best deals across multiple sellers so you always pay the lowest price.\n\nAI-powered search understands natural language queries, helping you find exactly what you need even if you're not sure of the exact name. Detailed product pages with 360-degree photos, video reviews, and verified buyer feedback give you confidence before purchasing.\n\nSame-day and next-day delivery options available in major cities. Easy returns and buyer protection guarantee peace of mind on every purchase. A curated flash sale section offers limited-time discounts of up to 70% on premium products.",
    size: 55,
    reviews: 4500,
    ratingAvg: 4.2,
    downloads: 150000,
    ratings: [
      { name: "1 star", count: 300 },
      { name: "2 star", count: 400 },
      { name: "3 star", count: 800 },
      { name: "4 star", count: 1500 },
      { name: "5 star", count: 1500 }
    ]
  },
  {
    image: "/demo-app (2).webp",
    title: "Note Keeper",
    companyName: "WriteWell",
    id: 8,
    description: "Capture your ideas and notes in one place. Note Keeper is a powerful yet elegantly simple note-taking app that keeps all your thoughts, ideas, meeting notes, and to-dos organized and instantly accessible. Rich text editing, tables, checklists, and code blocks let you structure notes exactly how you want.\n\nAI-assisted writing helps you expand ideas, fix grammar, and summarize long notes with one tap. Automatic tagging and smart folders organize your notes without you lifting a finger. Full-text search finds any note in milliseconds, even from hand-written and scanned documents.\n\nEnd-to-end encryption keeps your private thoughts secure. Real-time collaboration lets teams build shared wikis, project docs, and meeting minutes together. Note Keeper syncs across all devices instantly, so your notes are always with you wherever inspiration strikes.",
    size: 20,
    reviews: 1800,
    ratingAvg: 4.5,
    downloads: 70000,
    ratings: [
      { name: "1 star", count: 90 },
      { name: "2 star", count: 120 },
      { name: "3 star", count: 300 },
      { name: "4 star", count: 600 },
      { name: "5 star", count: 690 }
    ]
  },
  {
    image: "/demo-app (3).webp",
    title: "WeatherNow",
    companyName: "Climate Tech",
    id: 9,
    description: "Get real-time weather updates and forecasts. WeatherNow delivers hyper-local weather data with minute-by-minute precision, sourced from thousands of weather stations and satellites worldwide. Know exactly when rain will start and stop in your specific neighborhood, not just your city.\n\nHourly, daily, and 14-day forecasts cover temperature, precipitation, wind, humidity, UV index, air quality, and more. Severe weather alerts notify you of incoming storms, floods, and extreme heat before they arrive, giving you time to prepare and stay safe.\n\nBeautiful, intuitive visualizations make complex meteorological data easy to understand at a glance. Widgets for your home screen put current conditions one look away. WeatherNow is trusted by millions of outdoor enthusiasts, farmers, pilots, and everyday people who make weather-dependent decisions every day.",
    size: 15,
    reviews: 2200,
    ratingAvg: 4.3,
    downloads: 110000,
    ratings: [
      { name: "1 star", count: 150 },
      { name: "2 star", count: 200 },
      { name: "3 star", count: 500 },
      { name: "4 star", count: 700 },
      { name: "5 star", count: 650 }
    ]
  },
  {
    image: "/demo-app (4).webp",
    title: "PhotoEdit Pro",
    companyName: "Pixel Studio",
    id: 10,
    description: "Edit photos with professional tools and filters. PhotoEdit Pro brings desktop-class photo editing to your mobile device with a comprehensive suite of tools that would make even seasoned photographers impressed. From basic adjustments to advanced retouching, everything you need is right here.\n\nAI-powered tools automatically enhance photos, remove backgrounds, erase unwanted objects, and apply intelligent skin retouching. Over 500 premium filters and presets instantly transform your photos into stunning pieces of art. Layer-based editing gives you full creative control with non-destructive workflows.\n\nExport in any format including RAW, JPEG, TIFF, and PNG with precise control over compression and color profiles. Direct sharing to social media with optimized aspect ratios and resolutions means your photos always look their best online.",
    size: 70,
    reviews: 3900,
    ratingAvg: 4.6,
    downloads: 175000,
    ratings: [
      { name: "1 star", count: 100 },
      { name: "2 star", count: 200 },
      { name: "3 star", count: 600 },
      { name: "4 star", count: 1200 },
      { name: "5 star", count: 1800 }
    ]
  },
  {
    image: "/demo-app (5).webp",
    title: "GameZone",
    companyName: "FunPlay",
    id: 11,
    description: "Enjoy a collection of exciting mini games. GameZone packs over 200 hand-crafted mini games into a single app, offering endless entertainment for players of all ages and skill levels. From brain-teasing puzzles to fast-paced action games, there's always something new to play.\n\nMultiplayer modes let you challenge friends or compete against players from around the world in real-time tournaments with prizes. Seasonal events and limited-time challenges keep the content fresh and give dedicated players exclusive rewards and achievements.\n\nThe offline mode ensures entertainment even without internet connection. Parental controls let you set age-appropriate game restrictions and daily time limits for younger players. Regular updates add new games every week, ensuring GameZone never gets old.",
    size: 80,
    reviews: 8000,
    ratingAvg: 4.7,
    downloads: 400000,
    ratings: [
      { name: "1 star", count: 200 },
      { name: "2 star", count: 300 },
      { name: "3 star", count: 700 },
      { name: "4 star", count: 2000 },
      { name: "5 star", count: 4800 }
    ]
  },
  {
    image: "/demo-app (6).webp",
    title: "Finance Tracker",
    companyName: "MoneyWise",
    id: 12,
    description: "Manage your expenses and savings effectively. Finance Tracker gives you complete visibility into your financial life by automatically categorizing transactions, tracking spending patterns, and projecting future cash flow. Connect your bank accounts and credit cards for automatic syncing, or enter expenses manually.\n\nSet monthly budgets for different spending categories and get notified when you're approaching your limits. Visual spending reports reveal exactly where your money goes, helping you make smarter financial decisions. Bill reminders ensure you never miss a payment and avoid late fees.\n\nThe savings goal feature lets you set targets for big purchases, emergency funds, or investments, showing you exactly how long it will take to reach them based on your saving rate. Finance Tracker uses bank-level 256-bit encryption to keep your financial data completely secure.",
    size: 30,
    reviews: 2600,
    ratingAvg: 4.4,
    downloads: 90000,
    ratings: [
      { name: "1 star", count: 120 },
      { name: "2 star", count: 180 },
      { name: "3 star", count: 500 },
      { name: "4 star", count: 900 },
      { name: "5 star", count: 900 }
    ]
  },
  {
    image: "/demo-app (1).webp",
    title: "Language Learner",
    companyName: "LinguaSoft",
    id: 13,
    description: "Learn new languages with fun lessons. Language Learner makes mastering a foreign language feel like playing a game rather than studying. Science-backed spaced repetition, gamified lessons, and AI conversation practice accelerate your learning faster than traditional methods.\n\nChoose from 45+ languages including Spanish, French, Mandarin, Japanese, Arabic, and more. Bite-sized lessons take just 5 minutes and fit perfectly into your daily commute or coffee break. Immediate pronunciation feedback from the AI helps you sound like a native speaker from day one.\n\nThe community feature connects you with native speakers for language exchange conversations. Stories, podcasts, and real-world dialogues in your target language build listening comprehension naturally. Track your daily streak, earn XP points, and climb the leaderboard among friends for extra motivation.",
    size: 45,
    reviews: 3100,
    ratingAvg: 4.6,
    downloads: 130000,
    ratings: [
      { name: "1 star", count: 90 },
      { name: "2 star", count: 150 },
      { name: "3 star", count: 500 },
      { name: "4 star", count: 1100 },
      { name: "5 star", count: 1260 }
    ]
  },
  {
    image: "/demo-app (2).webp",
    title: "NewsFlash",
    companyName: "Global Media",
    id: 14,
    description: "Stay updated with the latest news worldwide. NewsFlash aggregates breaking news and in-depth articles from thousands of trusted sources globally, delivering a personalized news feed that matches your interests while exposing you to diverse perspectives you might otherwise miss.\n\nAI summarization condenses long articles into short bullets so you can stay informed without spending hours reading. Bias indicators help you understand the editorial lean of different sources, fostering more balanced and critical news consumption.\n\nSave articles for offline reading, create custom topic alerts for issues you care about, and share stories to social media or messaging apps with ease. Original reporting from NewsFlash journalists provides exclusive investigative pieces and analysis unavailable elsewhere.",
    size: 25,
    reviews: 4100,
    ratingAvg: 4.2,
    downloads: 160000,
    ratings: [
      { name: "1 star", count: 300 },
      { name: "2 star", count: 400 },
      { name: "3 star", count: 900 },
      { name: "4 star", count: 1400 },
      { name: "5 star", count: 1100 }
    ]
  },
  {
    image: "/demo-app (3).webp",
    title: "ChatConnect",
    companyName: "SocialNet",
    id: 15,
    description: "Connect with friends and chat instantly. ChatConnect reimagines messaging for the modern era with ultra-fast delivery, expressive reactions, and a rich media sharing experience that makes every conversation more personal and engaging.\n\nEnd-to-end encrypted chats and calls protect your privacy, ensuring only you and the recipient can read your messages. Disappearing messages, screen security, and anonymous chat modes give you full control over your digital footprint.\n\nGroup chats support up to 1000 members with admin tools, polls, and event scheduling for organized communities. Business accounts enable seamless customer communication with automated responses, product catalogs, and payment processing. ChatConnect's lightweight design means it runs smoothly even on older devices with slower connections.",
    size: 35,
    reviews: 7200,
    ratingAvg: 4.5,
    downloads: 350000,
    ratings: [
      { name: "1 star", count: 200 },
      { name: "2 star", count: 300 },
      { name: "3 star", count: 800 },
      { name: "4 star", count: 2200 },
      { name: "5 star", count: 3700 }
    ]
  }
];

export default apps;
