type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hello@stevedylan.dev",
  title: "Hey there! I'm Steve",
  //profile: "/profile.webp",
  description:
    "Head of Developer Relations at Pinata | Technical Writer | Developer | Creator",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/stevedylandev",
    },
    {
      label: "YouTube",
      link: "https://youtube.com/@stevedylandev",
    },
    {
      label: "Github",
      link: "https://github.com/stevedylandev",
    },
  ],
};

export default presentation;
