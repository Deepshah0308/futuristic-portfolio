// Portfolio Content Configuration
// Edit this file to update your portfolio content

export const siteContent = {
  // Basic Information
  name: "Deep Shah",
  tagline: "Creative Technologist & Digital Innovator",
  currentYear: new Date().getFullYear(),
  
  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    title: "Deep Shah 👋",
    description: "Crafting immersive digital experiences at the intersection of design and technology",
    buttons: {
      primary: "View My Work",
      secondary: "Hire Me"
    }
  },

  // About Section
  about: {
    title: "About Me",
    description: `Innovative technologist with a passion for creating cutting-edge digital experiences. Specializing in the fusion of design and technology to build immersive, user-centric solutions that push the boundaries of what's possible.`,
    profileImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    skills: [
      "UI/UX Design",
      "React & Next.js",
      "Three.js",
      "WebGL",
      "Motion Design",
      "AI Integration",
      "Creative Coding",
      "3D Modeling"
    ]
  },

  // Projects Section
  projects: [
    {
      title: "Neural Interface",
      description: "AI-powered creative tool with real-time visualization",
      preview: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      category: "AI Projects",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/neural-interface",
      tags: ["AI", "WebGL", "React"]
    },
    {
      title: "Cyberpunk Portfolio",
      description: "Interactive 3D portfolio with gesture controls",
      preview: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      category: "Web Design",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/cyber-portfolio",
      tags: ["Three.js", "Motion", "WebGL"]
    },
    {
      title: "Reality Engine",
      description: "Open-source WebXR framework for immersive experiences",
      preview: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce",
      category: "Open Source",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/reality-engine",
      tags: ["WebXR", "Three.js", "TypeScript"]
    }
  ],

  // Contact Section
  contact: {
    title: "Let's Collaborate",
    subtitle: "Ready to create something extraordinary? Let's make it happen.",
    email: "your.email@example.com", // This email will receive form submissions
    // Your social media links
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "mailto:your.email@example.com" // This is for the email icon link
    }
  }
};