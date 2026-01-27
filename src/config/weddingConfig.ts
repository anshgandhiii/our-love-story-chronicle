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
    date: "2025-01-30", // YYYY-MM-DD format
    time: "7:30 PM onwards",
    venue: "Rajanpara Flamingos 102",
    address: "Pice of mind center, New Link Rd, Malad, Jai Janata Nagar, Malad West, Mumbai, Maharashtra 400064",
    dressCode: "Festive Attire",
    dinner: "Dinner & Celebration",
    googleMapsUrl: "https://maps.google.com/?q=19.1869,72.8489",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0!2d72.8489!3d19.1869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzEyLjgiTiA3MsKwNTAnNTYuMCJF!5e0!3m2!1sen!2sin!4v1",
  },

  // Romantic Taglines
  taglines: {
    hero: "A journey written in memories… and sealed with love.",
    countdown: "Counting down to our celebration…",
    invitation: "You're cordially invited to celebrate",
  },

  // Scrapbook Story Pages
  storyPages: [
    {
      title: "How it started ✨",
      subtitle: "1999 - The Beginning",
      description: "Two hearts found each other on a beautiful spring day. What started as a chance meeting became the beginning of forever.",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Our best moments 📸",
      subtitle: "Through the years",
      description: "From our first dance to countless adventures, every moment together has been a treasure.",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Family & blessings 👨‍👩‍👧‍👦",
      subtitle: "Growing together",
      description: "Our love grew into a beautiful family. Each child, a new chapter in our story of love.",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "25 years completed 🥂",
      subtitle: "Silver Anniversary",
      description: "A quarter century of love, laughter, and holding hands through it all. Here's to forever more.",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
  ],

  // Gallery Photos (Polaroid style)
  gallery: [
    { src: "/placeholder.svg", caption: "Our Wedding Day", rotation: -3 },
    { src: "/placeholder.svg", caption: "First Anniversary", rotation: 2 },
    { src: "/placeholder.svg", caption: "Family Vacation", rotation: -2 },
    { src: "/placeholder.svg", caption: "Holiday Memories", rotation: 4 },
    { src: "/placeholder.svg", caption: "Date Night", rotation: -1 },
    { src: "/placeholder.svg", caption: "Forever Us", rotation: 3 },
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
