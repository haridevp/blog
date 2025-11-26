window.BLOG_POSTS = [
  {
    id: 1,
    title: "HTB — Learning workflow & notes",
    date: "2025-11-01",
    category: "Practice",
    difficulty: "Medium",
    readTime: "8 min",
    content: `
### Executive Summary

Notes on how I approach retired HackTheBox machines: recon → enum → foothold → persistence → priv-esc → cleanup.

### Quick commands I use

\`\`\`
nmap -sC -sV -p- -oA scans/initial 10.10.x.x
gobuster dir -u http://TARGET -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
\`\`\`

### Observations

I keep a personal checklist: ports, services, known exploits, credentials found, and local privesc vectors.
    `
  },
  {
    id: 2,
    title: "Linux PrivEsc checklist",
    date: "2025-06-12",
    category: "Tutorial",
    difficulty: "Easy",
    readTime: "6 min",
    content: `Content placeholder for a short PrivEsc checklist...`
  }
];
