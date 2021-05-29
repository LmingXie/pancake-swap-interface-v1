import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://192.168.0.205:3000/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'http://192.168.0.205:3001/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://192.168.0.205:3001/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://192.168.0.205:3000/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://192.168.0.205:3000/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: 'http://192.168.0.205:3000/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://192.168.0.205:3000/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'http://192.168.0.205:3000/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'http://192.168.0.205:3000/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'http://192.168.0.205:3000/teams',
      },
      {
        label: 'Task Center',
        href: 'http://192.168.0.205:3000/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'http://192.168.0.205:3000/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
        {
            label: 'Pairs',
            href: 'https://pancakeswap.info/pairs',
        },
        {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'http://192.168.0.205:3000/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
