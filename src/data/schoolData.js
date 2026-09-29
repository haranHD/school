/**
 * DEEKSHA PRESCHOOL - Website Content & Configuration
 * 
 * NOTE FOR PRESCHOOL OWNER / DEVELOPER:
 * All content, photos, social links, and contact details are centralized here.
 * When real photos, fees, timings, or Instagram posts are provided, simply
 * update this file to reflect the live data.
 */

export const SCHOOL_INFO = {
  name: "Deeksha Preschool",
  tagline: "The Little Foundation",
  category: "Preschool / Early Childhood Education",
  phone: "+91 99944 74316",
  phoneRaw: "9994474316",
  phoneLink: "tel:+919994474316",
  whatsappLink: "https://wa.me/919994474316?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20Deeksha%20Preschool.",
  address: "1/187 A, Natarajapuram, Bhavani, Tamil Nadu",
  addressShort: "Natarajapuram, Bhavani, TN",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=1%2F187+A%2C+Natarajapuram%2C+Bhavani%2C+Tamil+Nadu",
  instagramHandle: "deeksha_preschool_bhavani",
  instagramLink: "https://www.instagram.com/deeksha_preschool_bhavani/",
  youtubeName: "Deeksha Preschool Bhavani",
  youtubeLink: "https://www.youtube.com/results?search_query=Deeksha+Preschool+Bhavani",
  admissionsBadge: "Admissions Open",
  academicYear: "2025 – 2026",
  establishedNotice: "Serving young learners and families in Bhavani"
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Phonics", href: "#phonics" },
  { name: "Learning", href: "#learning" },
  { name: "Activities", href: "#activities" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export const TRUST_CARDS = [
  {
    id: "joyful-learning",
    title: "JOYFUL LEARNING",
    desc: "Learning through curiosity, play and exploration in a warm, welcoming environment.",
    icon: "Sparkles",
    color: "#f59e0b",
    bgColor: "#fef3c7"
  },
  {
    id: "confident-children",
    title: "CONFIDENT CHILDREN",
    desc: "Encouraging children to express themselves, build friendships, and discover their abilities.",
    icon: "Heart",
    color: "#ec4899",
    bgColor: "#fce7f3"
  },
  {
    id: "strong-foundations",
    title: "STRONG FOUNDATIONS",
    desc: "Building early learning habits and readiness through engaging, age-appropriate activities.",
    icon: "Compass",
    color: "#0284c7",
    bgColor: "#e0f2fe"
  }
];

export const ABOUT_BULLETS = [
  "Playful learning experiences",
  "Age-appropriate activities",
  "Creative exploration",
  "Social interaction",
  "Early learning development"
];

export const PROGRAMS_DATA = [
  {
    id: "playgroup",
    title: "PLAYGROUP",
    subtitle: "First Steps into Social Learning",
    desc: "An engaging introduction to early learning through play, interaction and exploration.",
    ageHint: "Early Explorer Stage",
    icon: "Baby",
    themeColor: "#f97316",
    badgeBg: "#ffedd5",
    accentBorder: "#fed7aa"
  },
  {
    id: "pre-kg",
    title: "PRE-KG",
    subtitle: "Curiosity & Routine Building",
    desc: "Encouraging curiosity and helping children become comfortable with structured learning.",
    ageHint: "Curious Learner Stage",
    icon: "Smile",
    themeColor: "#0284c7",
    badgeBg: "#e0f2fe",
    accentBorder: "#bae6fd"
  },
  {
    id: "jr-kg",
    title: "JR KG",
    subtitle: "Foundational Skills & Creativity",
    desc: "Building early academic, social and creative skills through engaging activities.",
    ageHint: "Active Thinker Stage",
    icon: "Palette",
    themeColor: "#8b5cf6",
    badgeBg: "#f3e8ff",
    accentBorder: "#ddd6fe"
  },
  {
    id: "sr-kg",
    title: "SR KG",
    subtitle: "Confidence & School Readiness",
    desc: "Preparing children for the next stage of their learning journey with confidence.",
    ageHint: "Future Ready Stage",
    icon: "GraduationCap",
    themeColor: "#16a34a",
    badgeBg: "#dcfce7",
    accentBorder: "#bbf7d0"
  }
];

export const PHONICS_CARDS = [
  {
    id: "letters",
    icon: "🔤",
    title: "Letters",
    desc: "Recognizing letter shapes, strokes, and alphabetical awareness in engaging formats."
  },
  {
    id: "sounds",
    icon: "🎵",
    title: "Sounds",
    desc: "Connecting letter symbols with natural phonetic sounds, rhythms, and pronunciation."
  },
  {
    id: "early-reading",
    icon: "📖",
    title: "Early Reading",
    desc: "Blending sound patterns to unlock simple sentences, storybooks, and reading joy."
  },
  {
    id: "word-recognition",
    icon: "🧠",
    title: "Word Recognition",
    desc: "Developing vocabulary, sight words, and associative memory naturally through play."
  }
];

export const LEARNING_STEPS = [
  {
    step: "01",
    title: "EXPLORE",
    desc: "Children discover new ideas through curiosity, tactile materials, and guided discovery.",
    color: "#f59e0b",
    icon: "Compass"
  },
  {
    step: "02",
    title: "CREATE",
    desc: "Creative activities encourage imagination, color perception, and individual expression.",
    color: "#ec4899",
    icon: "Palette"
  },
  {
    step: "03",
    title: "PLAY",
    desc: "Play-based experiences make learning enjoyable, nurturing collaborative teamwork.",
    color: "#0284c7",
    icon: "Puzzle"
  },
  {
    step: "04",
    title: "GROW",
    desc: "Children develop confidence, independent thinking, and emotional resilience for tomorrow.",
    color: "#16a34a",
    icon: "Sprout"
  }
];

export const ACTIVITIES_DATA = [
  {
    id: "art",
    icon: "🎨",
    name: "Art & Creativity",
    desc: "Finger painting, sketching, crafts, and color blending to ignite artistic flair.",
    color: "#f43f5e",
    bg: "#ffe4e6"
  },
  {
    id: "story",
    icon: "📚",
    name: "Story Time",
    desc: "Interactive moral stories, puppet narration, and animated picture books.",
    color: "#0284c7",
    bg: "#e0f2fe"
  },
  {
    id: "music",
    icon: "🎵",
    name: "Music & Movement",
    desc: "Rhythmic rhymes, joyful dancing, action songs, and body coordination.",
    color: "#8b5cf6",
    bg: "#f3e8ff"
  },
  {
    id: "fun-learning",
    icon: "🧩",
    name: "Fun Learning",
    desc: "Number puzzles, matching boards, block towers, and shape discovery.",
    color: "#ea580c",
    bg: "#ffedd5"
  },
  {
    id: "exploration",
    icon: "🌱",
    name: "Exploration",
    desc: "Sensory bins, nature walks, plant discovery, and observational learning.",
    color: "#16a34a",
    bg: "#dcfce7"
  },
  {
    id: "creative",
    icon: "🎭",
    name: "Creative Activities",
    desc: "Role-playing, dress-up days, creative enactments, and expressive gestures.",
    color: "#d97706",
    bg: "#fef3c7"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Classroom Activities",
    category: "Learning",
    badge: "Active Learning",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    desc: "Children engaged in hands-on alphabet blocks and collaborative play."
  },
  {
    id: 2,
    title: "Art & Craft Discovery",
    category: "Creativity",
    badge: "Expressive Art",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    desc: "Exploring colors, paintbrush strokes, and imaginative paper crafts."
  },
  {
    id: 3,
    title: "Children Learning Together",
    category: "Social Skills",
    badge: "Team Play",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    desc: "Sharing, smiling, and solving colorful wooden table puzzles together."
  },
  {
    id: 4,
    title: "Story & Reading Circle",
    category: "Phonics & Stories",
    badge: "Storytime",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    desc: "Curious little eyes following vibrant picture books and phonics tales."
  },
  {
    id: 5,
    title: "Building & Block Play",
    category: "Motor Skills",
    badge: "Coordination",
    image: "https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80",
    desc: "Stacking wooden blocks, balancing towers, and practicing fine motor skills."
  },
  {
    id: 6,
    title: "Joyful Celebrations",
    category: "Events",
    badge: "Festive Moments",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    desc: "Warm smiles, cheerful festive dress-up, and memorable school gatherings."
  }
];

export const PARENT_CARDS = [
  {
    id: "communication",
    title: "COMMUNICATION",
    subtitle: "Transparent & Timely",
    desc: "Keep parents informed about important school activities, holiday circulars, and updates via direct channels.",
    icon: "MessageSquare",
    color: "#0284c7",
    bg: "#e0f2fe"
  },
  {
    id: "learning-journey",
    title: "LEARNING JOURNEY",
    subtitle: "Milestones in View",
    desc: "Give parents a clear view of their child's early learning experience, creative growth, and social milestones.",
    icon: "TrendingUp",
    color: "#16a34a",
    bg: "#dcfce7"
  },
  {
    id: "easy-enquiries",
    title: "EASY ENQUIRIES",
    subtitle: "One Tap Connect",
    desc: "Make it simple for parents to ask questions, schedule a campus visit, and connect seamlessly with the school.",
    icon: "PhoneCall",
    color: "#ea580c",
    bg: "#ffedd5"
  }
];

export const FAQ_DATA = [
  {
    id: 1,
    question: "What age groups do you accept?",
    answer: "Please contact us for current admission details. We will be happy to guide you based on your child's age and readiness."
  },
  {
    id: 2,
    question: "Which classes are available?",
    answer: "We offer Playgroup, Pre-KG, Jr KG, and Sr KG, along with dedicated Phonics classes to foster early literacy and confident pronunciation."
  },
  {
    id: 3,
    question: "Where is the preschool located?",
    answer: "Deeksha Preschool is conveniently located at 1/187 A, Natarajapuram, Bhavani, Tamil Nadu. You are welcome to visit during school hours."
  },
  {
    id: 4,
    question: "How can I enquire about admission?",
    answer: "You can enquire instantly through WhatsApp at +91 99944 74316, give us a phone call, or visit our campus. Our team will share the latest admission guidelines."
  },
  {
    id: 5,
    question: "How can I contact the preschool?",
    answer: "You can call or WhatsApp us at +91 99944 74316, or visit us in Natarajapuram, Bhavani. We are always happy to welcome prospective parents!"
  }
];
