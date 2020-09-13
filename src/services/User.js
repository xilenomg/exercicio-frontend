const user = {
  name: 'James Lee',
  role: 'Web App Developer',
  avatar: '/img/profile.png',
  aboutMe: [
    'Write a brief intro about yourself',
    "It's a good idea to include personal interests and hobbies as well",
  ],
  skillsInfo: {
    description: 'Intro about your skills goes here',
    skills: [
      { name: 'Python & Django', level: 'newbie' },
      { name: 'Javascript & jQuery', level: 'beginner' },
      { name: 'HTML5 , CSS3, SASS & LESS', level: 'skillful' },
      { name: 'Ruby on Rails', level: 'proficient' },
      { name: 'Java', level: 'expert' },
    ],
  },
  contactInfo: {
    city: 'San Francisco, US',
    email: 'jameslee@website.com',
    website: 'http://www.website.com',
  },
  socialNetworks: [
    { name: 'twitter', account: 'jameslee' },
    { name: 'google-plus', account: 'jameslee' },
    { name: 'linkedin', account: 'jameslee' },
    { name: 'github', account: 'jameslee' },
    { name: 'yahoo', account: 'jameslee' },
  ],
};

export const getUser = async () => {
  return user;
};
