const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Columbia, US"',
  },

  {
    input: 'self.interests',
    return: '["web dev", "Virtual Reality", "NBA"]',
  },
  {
    input: 'self.education',
    return: '"Information Technology - University of Missouri - Columbia"',
  },
  {
    input: 'self.skills',
    return:
      '[ "C#", "HTML", "PHP", "C", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://https://www.linkedin.com/in/levi-cheney-b6b4411aa/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/Winston104">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://www.facebook.com/levi.cheney/">Facebook</a>"]`,
  },
];

export default info;
