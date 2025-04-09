export type WorkExperienceItemData = {
  id: string;
  title: string;
  company: string;
  period: string;
  gradientClass?: string;
  logoType: "text" | "path";
  logoConfig: {
    text?: string;
    fontSize?: number;
    fontWeight?: string;
    fontStyle?: string;
    yPosition?: number;
    color?: string;
    gradientId?: string;
    path?: string;
  };
};

export const workExperienceData: WorkExperienceItemData[] = [
  {
    id: "instafix",
    title: "Founder | Lead Developer",
    company: "Instafix.pro",
    period: "Dec 2024 - Present",
    gradientClass: "from-yellow-400/40 to-yellow-500/10",
    logoType: "text",
    logoConfig: {
      text: "F",
      fontSize: 600,
      fontStyle: "italic",
      fontWeight: "bold",
      yPosition: 250,
      color: "black",
      gradientId: ""
    }
  },
  {
    id: "deped",
    title: "Full-stack Engineering Intern",
    company: "Deped.gov.ph",
    period: "July 2024- Sept 2024",
    logoType: "text",
    logoConfig: {
      text: "DepEd",
      fontSize: 240,
      fontWeight: "bold",
      yPosition: 150,
      gradientId: "depedGradient"
    }
  },
  {
    id: "hacktoberfest",
    title: "Open Source Contributor",
    company: "Hacktoberfest.com",
    period: "October 2024",
    gradientClass: "from-green-600/30 to-green-100/10",
    logoType: "text",
    logoConfig: {
      text: "HACKTOBER",
      fontSize: 150,
      fontWeight: "bold",
      yPosition: 60,
      gradientId: "hacktoberfestGradient"
    }
  }
];

export const workExperienceGradients = {
  instafixGradient: {
    id: "instafixGradient",
    stops: [
      { offset: "0%", color: "#32CD32" },
      { offset: "100%", color: "#006400" }
    ]
  },
  depedGradient: {
    id: "depedGradient",
    stops: [
      { offset: "0%", color: "#0047AB" },
      { offset: "100%", color: "#ED1C24" }
    ]
  },
  hacktoberfestGradient: {
    id: "hacktoberfestGradient",
    stops: [
      { offset: "0%", color: "#32CD32" },
      { offset: "100%", color: "#006400" }
    ]
  }
};
