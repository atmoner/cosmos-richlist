export default [
  {
    chainId: 'bitcanna-1',
    name: 'BitCanna',
    desc: 'Harnessing the power of blockchain to create equal opportunities for cannabis-related industries ',
    slot: "bitcanna",
    mode: 'mainnet',
    apiURL: 'https://lcd.bitcanna.io',
    rpcURL: 'https://rpc.bitcanna.io',
    coinLookup: {
      viewDenom: 'BCNA',
      chainDenom: 'ubcna',
      addressPrefix: 'bcna',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg`,
      banner: "https://pbs.twimg.com/profile_banners/602625556/1649007099/1500x500",
    },
    explorerUrl: 'https://www.mintscan.io/bitcanna/txs/',
    coingeckoId: 'bitcanna',
    feeMultiplier: 1.9,
    gasPrice: 0.0025,
    color: '#33ffc9',
    colorChart: ["#b3ffeb", "#33ffc9", "#00b383", "#004d38"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: true,
    }
  },
  {
    chainId: 'gitopia',
    name: 'Gitopia',
    desc: 'Gitopia is the next-generation Code Collaboration Platform fuelled by a decentralized network and interactive token economy.',
    slot: "gitopia",
    mode: 'mainnet',
    apiURL: 'https://gitopia.api.kjnodes.com',
    rpcURL: 'https://gitopia.rpc.kjnodes.com',
    coinLookup: {
      viewDenom: 'LORE',
      chainDenom: 'ulore',
      addressPrefix: 'gitopia',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png`,
      banner: "https://i.imgur.com/RONXDnZ.png",
    },
    feeMultiplier: 1.3,
    gasPrice: 0.0016,
    color: '#562085',
    colorChart: ["#a66fd6", "#562085", "#390666", "#995803"],
    explorerUrl: 'https://bigdipper.live/gitopia',
    coingeckoId: 'gitopia',
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: true,
    }
  },
  {
    chainId: 'chihuahua-1',
    name: 'Chihuahua',
    slot: "chihuahua",
    desc: 'Chihuahua is the first interoperable meme coin with a POS blockchain, making it one of the most utilized chains in the Cosmos ecosystem',
    mode: 'mainnet',
    apiURL: 'https://api.chihuahua.wtf',
    rpcURL: 'https://rpc.chihuahua.wtf',
    //apiURL: 'https://rest.cosmos.directory/chihuahua',
    //rpcURL: 'https://rpc.cosmos.directory/chihuahua',
    coinLookup: {
      viewDenom: 'HUAHUA',
      chainDenom: 'uhuahua',
      addressPrefix: 'chihuahua',
      icon: `https://avatars.githubusercontent.com/u/94940349?v=4`,
      banner: "https://raw.githubusercontent.com/BitCannaGlobal/cosmospay-woocommerce/main/public/img/Chihuahua.png",
    },
    coingeckoId: 'chihuahua-token',
    feeMultiplier: 1.3,
    gasPrice: 1000,
    color: '#F0A841',
    colorChart: ["#efc283", "#F0A841", "#c67f21", "#995803"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: true,
      group: true,
    }
  },  
  {
    chainId: 'dydx-mainnet-1',
    name: 'Dydx',
    desc: '',
    slot: "dydx",
    mode: 'mainnet',
    apiURL: 'https://dydx-dao-api.polkachu.com',
    rpcURL: 'https://dydx-dao-rpc.polkachu.com',
    coinLookup: {
      viewDenom: 'DYDX',
      chainDenom: 'adydx',
      addressPrefix: 'dydx',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png`,
      banner: "",
    },
    coingeckoId: 'dydx',
    feeMultiplier: 1.3,
    gasPrice: 0.075,
    color: '#F34C2D',
    colorChart: ["#b25747", "#F34C2D", "#ad594a", "#89584f"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
    }
  },
  {
    chainId: 'teritori-1',
    name: 'Teritori',
    desc: 'Tori token (TORI) is the Teritoti Network’s native utility token, used as the primary means to govern, secure the blockchain.',
    slot: "teritori",
    mode: 'mainnet',
    apiURL: 'https://teritori-api.polkachu.com',
    rpcURL: 'https://teritori-rpc.polkachu.com',
    coinLookup: {
      viewDenom: 'TORI',
      chainDenom: 'utori',
      addressPrefix: 'tori',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png`,
      banner: "https://i.imgur.com/qWOgkAo.png",
    },
    coingeckoId: 'teritori',
    feeMultiplier: 1.3,
    gasPrice: 0.25,
    color: '#2EC4F9',
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
    }
  },
  {
    chainId: "cosmoshub-4",
    name: "Atom",
    desc: "Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.",
    slot: "atom",
    mode: 'mainnet',
    apiURL: "https://cosmoshub.lava.build:443",
    rpcURL: "https://rpc.lavenderfive.com:443/cosmoshub",
    coinLookup: {
      viewDenom: "ATOM",
      chainDenom: "uatom",
      addressPrefix: "cosmos",
      icon: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
      banner: "https://pbs.twimg.com/profile_banners/1019126440233615361/1684483223/1500x500",
    },
    coingeckoId: 'cosmos',
    feeMultiplier: 1.3,
    gasPrice: 0.025,
    explorerUrl: 'https://www.mintscan.io/cosmos/txs/',
    coingeckoId: 'cosmos',
    color: "#0091EA",
    colorChart: ['#20212b', '#2E3148', '#0091EA', '#004d38'],
  }   
]
