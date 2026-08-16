export default {
  navigation: {
    exchange: 'Exchange',
    gold: 'Gold',
    home: 'Home',
    news: 'News',
    profile: 'Profile',
    services: 'Services',
  },
  screens: {
    exchange: {
      description:
        'The feature shell is prepared for real MYR/MMK rate sources, stale-state handling, and future market expansion.',
      sections: {
        market: 'Model current rate, last update time, source attribution, and direction changes without shipping placeholder market values.',
        offline: 'Prepare offline-aware caching, retry actions, and stale-data messaging for unstable connections.',
        source: 'Keep exchange fetching inside typed services and feature hooks so UI work can focus on presentation later.',
      },
      title: 'Exchange Rate Foundation',
    },
    gold: {
      description:
        'This route reserves the product surface for future gold pricing with source metadata, units, and purity types.',
      sections: {
        availability: 'Keep loading, offline, and refresh states reusable so real data can drop in without redesigning app behavior.',
        catalog: 'Support 24K, 22K, 21K, and 18K price models through typed feature contracts instead of loose objects.',
        source: 'Route requests through the centralized API client with timeout, cancellation, and error normalization.',
      },
      title: 'Gold Price Foundation',
    },
    home: {
      description:
        'The home route is intentionally minimal so the next task can focus on premium UI, hierarchy, and motion without reworking architecture.',
      sections: {
        alerts: 'Reserve space for important announcements, notifications, and service updates using shared empty/loading/error patterns.',
        news: 'Keep future news, exchange, and gold modules composable so the home screen can aggregate them without tight coupling.',
        rates: 'Theme, localization, and state foundations are already in place for multilingual Malaysia/Myanmar daily information.',
      },
      title: 'Foundation Home',
    },
    news: {
      description:
        'The news module is scaffolded for real content flows, not fake article cards, so pagination and categories can be added cleanly.',
      sections: {
        categories: 'Prepare typed categories, articles, and sources for Malaysia, Myanmar, jobs, visa, and community content.',
        pagination: 'Reserve cursor-based pagination support in feature contracts and server-state tooling.',
        status: 'Use shared loading, empty, retry, and offline states rather than one-off screen logic.',
      },
      title: 'News Foundation',
    },
    profile: {
      description:
        'Profile stays light for now while settings, session, and future account features are organized behind dedicated stores and services.',
      sections: {
        preferences: 'Persist theme and language preferences safely without mixing them into feature-specific business logic.',
        privacy: 'Keep secure token handling separate from ordinary local storage and avoid sensitive logging.',
        session: 'Prepare authentication state, logout, and session expiration flows without creating fake sign-in screens.',
      },
      title: 'Profile Foundation',
    },
    services: {
      description:
        'The services area is reserved for future directories, referrals, and community utilities, with room to grow into richer modules later.',
      sections: {
        directory: 'Keep future service entities decoupled from navigation so marketplace, jobs, and useful locations can scale.',
        expansion: 'The architecture supports future features such as jobs, marketplace, messaging, and community services without a rewrite.',
        filters: 'Use feature boundaries and typed contracts instead of screen-only state so richer discovery can be layered in later.',
      },
      title: 'Services Foundation',
    },
  },
} as const;
