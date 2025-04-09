export type Contribution = {
  name: string;
  url: string;
  description: string;
  techs: string[];
  prs: ContributionPR[];
};

export type ContributionPR = {
  title: string;
  prNumber: string;
  username: string;
  imageUrl: string;
  url: string;
};

export const contributionsData: Contribution[] = [
  {
    name: "Zulip",
    url: "https://github.com/zulip/zulip",
    description: "Organized chat for distributed teams.",
    techs: [
      "PostgreSQL", "Docker", "Django", "RabbitMQ", "Websocket", "Caching"
    ],
    prs: [
      {
        title: "message_feed: Fix muted banner visibility for empty feed.",
        prNumber: "31601",
        username: "imkeanserna",
        imageUrl: "https://avatars.githubusercontent.com/u/156565248?v=4",
        url: "https://github.com/zulip/zulip/pull/32132"
      },
      {
        title: "sidebar: Fix deactivated user visibility in sidebar.",
        prNumber: "32215",
        username: "imkeanserna",
        imageUrl: "https://avatars.githubusercontent.com/u/156565248?v=4",
        url: "https://github.com/zulip/zulip/pull/32215"
      }
    ]
  },
  {
    name: "OPNHUB",
    url: "https://github.com/MohamedDanis/opnhub",
    description: "Discover open-source projects from GitHub.",
    techs: [
      "Next.js", "TypeScript"
    ],
    prs: [
      {
        title: "feat: Adding Multi-language repo selected.",
        prNumber: "21",
        username: "imkeanserna",
        imageUrl: "https://avatars.githubusercontent.com/u/156565248?v=4",
        url: "https://github.com/MohamedDanis/opnhub/pull/21"
      }
    ]
  },
  {
    name: "Quick Meet ",
    url: "https://github.com/Cefalo/quick-meet",
    description: "Tailored for organizations and securing meeting rooms in google calendar.",
    techs: [
      "NestJS", "TypeScript", "SQLite"
    ],
    prs: [
      {
        title: "fix: Fix Meeting Creation Order.",
        prNumber: "63",
        username: "imkeanserna",
        imageUrl: "https://avatars.githubusercontent.com/u/156565248?v=4",
        url: "https://github.com/Cefalo/quick-meet/pull/63"
      },
      {
        title: "Feature/UI duration format #55",
        prNumber: "58",
        username: "imkeanserna",
        imageUrl: "https://avatars.githubusercontent.com/u/156565248?v=4",
        url: "https://github.com/Cefalo/quick-meet/pull/58"
      }
    ]
  },
];
