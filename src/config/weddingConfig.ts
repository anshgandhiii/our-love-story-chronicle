// ==========================================
// 📝 WEDDING ANNIVERSARY CONFIGURATION
// Edit these values to customize your invitation
// ==========================================

export const weddingConfig = {
  // Couple Information
  couple: {
    partner1: "Pallavi",
    partner2: "Purnesh",
    yearsMarried: 25,
  },

  // Event Details
  event: {
    date: "2026-01-30", // YYYY-MM-DD format
    time: "7:30 pm", // 24-hour format for countdown
    displayTime: "7:30 PM onwards",
    venue: "Fir Milenge Banquet Hall, Malad West, Mumbai",
    address: "Rajanpara flamingos 102, Pice of mind center, New Link Rd, Malad, Jai Janata Nagar, Malad West, Mumbai, Maharashtra 400644",
    dressCode: "Western Attire",
    dinner: "Dinner & Celebration",
    googleMapsUrl: "https://maps.app.goo.gl/v7aEaA5kHJBSse5V6",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.955326110889!2d72.83154957498061!3d19.197153482032455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7001394c06f%3A0x50a55ef25973e462!2sFir%20milenge!5e0!3m2!1sen!2sin!4v1769581535798!5m2!1sen!2sin",
  },

  // Romantic Taglines
  taglines: {
    hero: "A journey written in memories… and sealed with love.",
    countdown: "Counting down to our celebration…",
    invitation: "You're cordially invited to celebrate",
  },

  // Scrapbook Story Pages - single image per page
  storyPages: [
    {
      title: "How it started ✨",
      subtitle: "1998 - The Beginning",
      description: "Two hearts found each other and began a beautiful journey together.",
      imageKey: "coupleGarden",
    },
    {
      title: "Our best moments 📸",
      subtitle: "Through the years",
      description: "From our first dance to countless adventures, every moment together has been a treasure.",
      imageKey: "coupleGreen",
    },
    {
      title: "Celebrations & Joy 🎉",
      subtitle: "Growing together",
      description: "Every celebration became more special with each other by our side.",
      imageKey: "coupleParty",
    },
    {
      title: "25 years completed 🥂",
      subtitle: "Silver Anniversary",
      description: "A quarter century of love, laughter, and holding hands through it all. Here's to forever more.",
      imageKey: "coupleRed",
    },
  ],

  // Gallery Photos (Polaroid style) - using all images
  gallery: [
    { imageKey: "coupleRed", caption: "Forever Together", rotation: -3 },
    { imageKey: "coupleGreen", caption: "Festive Vibes", rotation: 2 },
    { imageKey: "coupleParty", caption: "Party Nights", rotation: -2 },
    { imageKey: "coupleGarden", caption: "Golden Moments", rotation: 4 },
    { imageKey: "coupleDinner", caption: "Date Nights", rotation: -1 },
    { imageKey: "coupleFamily", caption: "Family Love", rotation: 3 },
  ],

  // Surprise Quotes
  surpriseQuotes: [
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day. 💕",
    "The best thing to hold onto in life is each other. ❤️",
    "Growing old with you has been my greatest adventure. 🌟",
    "25 years and still choosing you, every day. 💑",
  ],

  // RSVP Configuration
  rsvp: {
    deadline: "2025-03-01",
    maxGuests: 4,
  },
};

export type WeddingConfig = typeof weddingConfig;
