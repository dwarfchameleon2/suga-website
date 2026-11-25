export interface RolePerspective {
  id: 'lovers' | 'chefs' | 'riders';
  label: string;
  headline: string;
  description: string;
  highlights: string[];
  portraitImage: string;
  portraitAlt: string;
  avatarImage: string;
  avatarAlt: string;
  primaryScreen: {
    image: string;
    alt: string;
    caption: string;
  };
  secondaryScreen: {
    image: string;
    alt: string;
    caption: string;
  };
  accentColor: 'orange' | 'blue' | 'purple';
}

export const ROLE_PERSPECTIVES: RolePerspective[] = [
  {
    id: 'lovers',
    label: 'Food Lovers',
    headline: 'Explore authentic meals through stories, menus, and local cravings.',
    description:
      'Browse dishes shared by talented local chefs and food vendors near you. Watch short food stories, pick your favourite meals, and enjoy smooth food ordering from kitchen to doorstep.',
    highlights: [
      'Discover fresh meals via lively Food Stories and curated categories',
      'Explore menus from homegrown kitchens and trusted neighbourhood spots',
      'Follow your favourite cooks and keep track of active and past orders',
    ],
    portraitImage: '/assets/aistudio/suga-consumer_0c80cd03.png',
    portraitAlt: 'Young African woman smiling while ordering fresh food on the SUGA mobile app',
    avatarImage: '/assets/aistudio/suga-consumer-avatar_e0f76921.png',
    avatarAlt: 'SUGA food lover illustrated avatar',
    primaryScreen: {
      image: '/assets/aistudio/mockup-explore-suga-page_efbff946.png',
      alt: 'SUGA app Explore screen showing food categories and food stories',
      caption: 'Explore local categories & Food Stories',
    },
    secondaryScreen: {
      image: '/assets/aistudio/mockup-food-profile_d8db225d.png',
      alt: 'SUGA app dish profile screen with Place Order and Add to Cart options',
      caption: 'Clear dish details & easy ordering',
    },
    accentColor: 'orange',
  },
  {
    id: 'chefs',
    label: 'Chefs & Vendors',
    headline: 'Showcase your signature dishes and grow a loyal community.',
    description:
      'Whether you cook from a thriving kitchen or run a growing food spot, SUGA helps people discover your food, follow your culinary story, and order directly with confidence.',
    highlights: [
      'Present your dishes with rich photography, prep notes, and menu categories',
      'Share short food stories that bring diners closer to your kitchen',
      'Manage incoming orders, receipts, and earnings in one clean place',
    ],
    portraitImage: '/assets/aistudio/suga-chef_0e5ee5da.png',
    portraitAlt: 'Smiling African chef holding a smartphone beside a freshly plated dish',
    avatarImage: '/assets/aistudio/suga-chef-avatar_a007ed05.png',
    avatarAlt: 'SUGA chef and food vendor illustrated avatar',
    primaryScreen: {
      image: '/assets/aistudio/mockup-chefs-dishes-list_b30b45ce.png',
      alt: 'SUGA app chef menu view listing Jollof Rice, Egusi Soup, and Pepper Soup',
      caption: 'Organise dishes & update availability',
    },
    secondaryScreen: {
      image: '/assets/aistudio/mockup-completed-order-preview_db6485d7.png',
      alt: 'SUGA app completed order summary screen showing customer and dish breakdown',
      caption: 'Clear order summaries & receipts',
    },
    accentColor: 'purple',
  },
  {
    id: 'riders',
    label: 'Delivery Riders',
    headline: 'Deliver with clarity, independence, and reliable order flow.',
    description:
      'Delivery riders keep the SUGA community moving. See open delivery requests, manage active drop-offs, and keep track of completed trips and wallet payouts effortlessly.',
    highlights: [
      'Toggle your availability whenever you are ready to take deliveries',
      'View pickup and drop-off addresses clearly before you head out',
      'Track completed trips and delivery earnings directly on your phone',
    ],
    portraitImage: '/assets/aistudio/suga-rider_c5e78c18.png',
    portraitAlt: 'Smiling SUGA delivery rider on a motorcycle wearing a SUGA helmet and jacket',
    avatarImage: '/assets/aistudio/suga-rider-avatar_d0f8e2c2.png',
    avatarAlt: 'SUGA delivery rider illustrated avatar',
    primaryScreen: {
      image: '/assets/aistudio/mockup-rider-dashboard_9d8f6bc9.png',
      alt: 'SUGA app delivery rider view showing current order, navigation, and earnings',
      caption: 'Stay on top of active deliveries',
    },
    secondaryScreen: {
      image: '/assets/aistudio/mockup-dispatch-wallet_44b8dda8.png',
      alt: 'SUGA app rider availability and wallet screen',
      caption: 'Simple availability & earnings overview',
    },
    accentColor: 'blue',
  },
];

export interface DiscoveryScreenItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export const DISCOVERY_SCREENS: DiscoveryScreenItem[] = [
  {
    id: 'food-story',
    title: 'Visual Food Stories',
    subtitle: 'See dishes steaming fresh from local kitchens before you order.',
    image: '/assets/aistudio/mockup-food-story_129f7d3c.png',
    alt: 'SUGA app Food Story screen displaying a steaming pasta dish from a local chef',
  },
  {
    id: 'available-dishes',
    title: 'Daily Available Dishes',
    subtitle: 'Browse freshly prepared meals ready to order right around you.',
    image: '/assets/aistudio/mockup-available-dish_ae0a8f8d.png',
    alt: 'SUGA app Available Dishes feed showing freshly cooked spaghetti pasta',
  },
  {
    id: 'dish-detail',
    title: 'Seamless Food Ordering',
    subtitle: 'Check prep notes, explore the chef’s full menu, and place orders smoothly.',
    image: '/assets/aistudio/mockup-food-profile_d8db225d.png',
    alt: 'SUGA app food profile screen with ordering actions and menu recommendations',
  },
  {
    id: 'consumer-home',
    title: 'Your Food Hub',
    subtitle: 'Jump back into active orders, saved rewards, and new discoveries.',
    image: '/assets/aistudio/mockup-consumer-dashboard_9c355ab3.png',
    alt: 'SUGA app consumer home screen with quick actions for Explore, Orders, and Wallet',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SUPPORT_FAQS: FaqItem[] = [
  {
    id: 'download-android',
    question: 'How do I install SUGA on my Android phone right now?',
    answer:
      'Visit our Download page and tap "Download SUGA for Android" to get the official suga.apk release. Once the download finishes, open the file from your browser or Downloads folder. Your phone may ask you to allow app installation from your browser or file manager before completing setup.',
  },
  {
    id: 'app-stores',
    question: 'When will SUGA be on Google Play and the Apple App Store?',
    answer:
      'SUGA is coming soon to Google Play and the Apple App Store. Until the store listings go live, Android users can download and experience the app directly using our official Android APK release.',
  },
  {
    id: 'join-chef',
    question: 'I am a local chef or food vendor. How can I join SUGA?',
    answer:
      'Download the SUGA app for Android to create your chef or vendor profile, or send us a message through the form on this page. Our team welcomes passionate home cooks, independent chefs, and local food vendors who want to share great meals with their community.',
  },
  {
    id: 'join-rider',
    question: 'How can delivery riders get started with SUGA Ecosystem?',
    answer:
      'Delivery riders can download the SUGA app for Android to explore the rider experience or reach out to our support team using the contact form below for onboarding guidance.',
  },
  {
    id: 'partnerships',
    question: 'Can food brands, kitchens, or community groups partner with SUGA?',
    answer:
      'Yes! We love collaborating with culinary creators, neighbourhood kitchens, logistics partners, and community events. Select "Business & Partnerships" in the support form and tell us a little about what you are building.',
  },
];
