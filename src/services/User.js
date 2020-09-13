const user = {
  name: 'James Lee',
  role: 'Web App Developer',
  avatar: '/img/profile.png',
  aboutMe: [
    'Write a brief intro about yourself. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna diam, accumsan eu risus vel, iaculis porttitor metus. Phasellus elit turpis, faucibus non dignissim sed, pretium eget sem. Nulla ac mauris nibh. Pellentesque a enim at neque mattis iaculis. Vivamus commodo tristique porttitor.',
    "It's a good idea to include personal interests and hobbies as well. Donec elit ligula, aliquam laoreet accumsan et, ultrices et felis. In hac habitasse platea dictumst. Integer nec pulvinar metus. Integer convallis lobortis aliquet. Sed condimentum tellus ultrices, viverra elit in, euismod mi. Suspendisse malesuada elementum tellus, a suscipit ante mattis eu.",
  ],
  skillsInfo: {
    description:
      'Intro about your skills goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna diam, accumsan eu risus vel, iaculis porttitor metus.',
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
