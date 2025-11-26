// Expose a global RESUME_DATA so app.jsx can import it without modules
window.RESUME_DATA = {
  personal: {
    name: "Haridev P",
    display: "Haridev_P",
    email: "haridevpnarayananivas@gmail.com",
    github: "https://github.com/haridevp",
    linkedin: "https://linkedin.com/in/haridevp",
    website: "https://haridevp.tech",
    location: "Kozhikode, Kerala, India"
  },

  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Amrita Vishwa Vidyapeetham, Coimbatore",
    period: "Aug 2023 — Jul 2027",
    cgpa: "6.72"
  },

  objective: "Aspiring penetration tester focusing on web app security, red-team skills and practical labs (HTB / TryHackMe). Open to internships and entry-level red-team roles.",

  skills: [
    { category: "Offensive", items: ["Nmap", "Burp Suite", "Gobuster", "Hydra", "Dirb"] },
    { category: "Tools & Analysis", items: ["Wireshark", "tcpdump", "VirtualBox", "Kali Linux"] },
    { category: "Languages", items: ["Python", "Bash", "JavaScript", "SQL", "HTML/CSS"] }
  ],

  experience: [
    {
      role: "Security Enthusiast & CTF Player",
      org: "Self-driven (HTB / TryHackMe practice)",
      period: "Jan 2023 — Present",
      points: [
        "Regularly practice retired HTB boxes and TryHackMe rooms to sharpen exploitation and privilege escalation skills.",
        "Automate reconnaissance tasks using Python and small Bash scripts.",
        "Document writeups and notes for each box to build a public learning record."
      ]
    },
    {
      role: "Volunteer — NSS / Campus Activities",
      org: "CKG Memorial HSS / Amrita (volunteer)",
      period: "Earlier schooling",
      points: [
        "Community service and social initiatives during school time (NSS)."
      ]
    }
  ],

  certificates: [
    { title: "Google Cybersecurity Certificate", issuer: "Google", date: "Nov 2024" },
    { title: "Google Cloud Computing Foundations", issuer: "Google", date: "Jul 2024" }
  ],

  contactCard: {
    phone: "7012705946"
  }
};
