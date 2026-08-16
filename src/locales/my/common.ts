export default {
  navigation: {
    exchange: 'ေငြလဲနှုန်း',
    gold: 'ရွှေစျေး',
    home: 'ပင်မ',
    news: 'သတင်း',
    profile: 'ကိုယ်ရေးအကျဉ်း',
    services: 'ဝန်ဆောင်မှုများ',
  },
  screens: {
    exchange: {
      description:
        'MYR/MMK အစစ်အမှန် ငွေလဲနှုန်းရင်းမြစ်များ၊ stale state စီမံမှုနှင့် နောက်ပိုင်း currency တိုးချဲ့မှုအတွက် foundation ကို ပြင်ဆင်ထားပါတယ်။',
      sections: {
        market: 'အတုအယောင် rate မထည့်ဘဲ current rate, update time, source နှင့် direction change များကို model လုပ်နိုင်အောင် စီစဉ်ထားပါတယ်။',
        offline: 'အင်တာနက်မတည်ငြိမ်ချိန်များအတွက် cache, retry နှင့် stale-data messaging ကို architecture အဆင့်တွင် ထည့်ထားပါတယ်။',
        source: 'Exchange data fetching ကို typed services နှင့် hooks ထဲတွင်ထားပြီး UI အလုပ်ကို နောက်အဆင့်တွင် သီးသန့်လုပ်နိုင်အောင် ထားပါတယ်။',
      },
      title: 'ေငြလဲနှုန်း Foundation',
    },
    gold: {
      description:
        'အနာဂတ်တွင် source metadata, unit နှင့် purity type များပါသော ရွှေစျေး feature အတွက် ဒီ route ကို ပြင်ထားပါတယ်။',
      sections: {
        availability: 'အမှန်တကယ် data ချိတ်ဆက်ချိန်တွင် screen behavior ကိုပြန်မပြင်ရအောင် loading, offline နှင့် refresh state pattern များကို reusable လုပ်ထားပါတယ်။',
        catalog: '24K, 22K, 21K, 18K price model များကို loose object မဟုတ်ဘဲ typed contracts ဖြင့် ထောက်ပံ့ပေးထားပါတယ်။',
        source: 'Request များကို timeout, cancellation နှင့် normalized error handling ပါသော centralized API client မှတစ်ဆင့် ဖြတ်သန်းစေပါတယ်။',
      },
      title: 'ရွှေစျေး Foundation',
    },
    home: {
      description:
        'ဒီ home route ကို ရည်ရွယ်ချက်ရှိရှိ အနည်းငယ်သာထားပါတယ်။ နောက် task မှာ premium UI, hierarchy နဲ့ motion ကို architecture မပြင်ဘဲ တိုက်ရိုက်လုပ်နိုင်ဖို့ပါ။',
      sections: {
        alerts: 'အရေးကြီးကြေညာချက်များ၊ notifications နှင့် service updates များအတွက် shared empty/loading/error pattern များကို ပြင်ထားပါတယ်။',
        news: 'အနာဂတ် news, exchange, gold module များကို home screen ကနေ loosely compose လုပ်နိုင်အောင် ခွဲထားပါတယ်။',
        rates: 'Malaysia/Myanmar နေ့စဉ်အသုံးဝင်အချက်အလက်အတွက် theme, localization နှင့် state foundation များကို ပြင်ထားပါတယ်။',
      },
      title: 'Foundation Home',
    },
    news: {
      description:
        'ဒီ news module ကို အတု article card များအတွက် မဟုတ်ဘဲ အမှန်တကယ် content flow များအတွက် scaffold လုပ်ထားပါတယ်။',
      sections: {
        categories: 'Malaysia, Myanmar, jobs, visa နှင့် community content များအတွက် typed category, article နှင့် source model များကို ပြင်ထားပါတယ်။',
        pagination: 'Feature contract နှင့် server-state tooling ထဲတွင် cursor-based pagination ကို ထောက်ပံ့နိုင်အောင် နေရာချန်ထားပါတယ်။',
        status: 'Screen တစ်ခုချင်းစီအတွက် logic မရေးဘဲ shared loading, empty, retry, offline state pattern ကို အသုံးပြုနိုင်အောင် ပြင်ထားပါတယ်။',
      },
      title: 'သတင်း Foundation',
    },
    profile: {
      description:
        'Profile ကို လက်ရှိအဆင့်တွင် ပေါ့ပါးစွာထားပြီး settings, session နှင့် account feature များကို dedicated stores/services နောက်ကွယ်တွင် စနစ်တကျ ခွဲထားပါတယ်။',
      sections: {
        preferences: 'Theme နှင့် language preference များကို feature business logic နှင့်မရောဘဲ persist လုပ်နိုင်အောင် စီမံထားပါတယ်။',
        privacy: 'Secure token handling ကို ပုံမှန် local storage နှင့် ခွဲထားပြီး sensitive logging မဖြစ်အောင် တားထားပါတယ်။',
        session: 'Fake sign-in screen မလုပ်ဘဲ authentication state, logout နှင့် session expiration flow များအတွက် foundation ကို ပြင်ထားပါတယ်။',
      },
      title: 'Profile Foundation',
    },
    services: {
      description:
        'Services area ကို အနာဂတ် directory, referrals နှင့် community utility များအတွက် reserve လုပ်ထားပြီး နောက်ပိုင်းတွင် feature ကြီးများအဖြစ် တိုးချဲ့နိုင်အောင် ပြင်ထားပါတယ်။',
      sections: {
        directory: 'Marketplace, jobs နှင့် useful locations ကဲ့သို့သော entities များကို navigation နှင့် tight coupling မဖြစ်အောင် ခွဲထားပါတယ်။',
        expansion: 'Jobs, marketplace, messaging နှင့် community services တို့ကို rewrite မလုပ်ဘဲ တိုးချဲ့နိုင်အောင် architecture ကို ပြင်ထားပါတယ်။',
        filters: 'Screen-only state မဟုတ်ဘဲ feature boundary နှင့် typed contract များသုံးထားသောကြောင့် richer discovery UI များကို နောက်မှ ထည့်နိုင်ပါတယ်။',
      },
      title: 'ဝန်ဆောင်မှု Foundation',
    },
  },
} as const;
