
const dummy = {
  hotList: [
    {
      title: '牛仔短褲',
      image: 'https://picsum.photos/400/600?random=1',
    },
    {
      title: '西裝短褲',
      image: 'https://picsum.photos/400/600?random=2',
    },
    {
      title: '背心',
      image: 'https://picsum.photos/400/600?random=3',
    },
    {
      title: 'T 恤',
      image: 'https://picsum.photos/400/600?random=4',
    },
    {
      title: '漁夫帽',
      image: 'https://picsum.photos/400/600?random=5',
    },
    {
      title: '口罩',
      image: 'https://picsum.photos/400/600?random=6',
    },
    {
      title: '旅行組',
      image: 'https://picsum.photos/400/600?random=7',
    },
    {
      title: '生活',
      image: 'https://picsum.photos/400/600?random=8',
    },
  ],
  categoryList: [
    {
      title: '男士',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '女士',
      products: ['項目', '項目', '項目', '項目', '項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '童裝',
      products: ['項目', '項目項目項目項目項目項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '休閒',
      products: ['項目', '項目', '項目', '項目']
    },
    {
      title: '商務',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '潮流',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '鞋款',
      products: ['項目', '項目', '項目', '項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '包款',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
  ],
  banner: [
    { image: 'https://picsum.photos/800/400?random=1' },
    { image: 'https://picsum.photos/600/300?random=2' },
    { image: 'https://picsum.photos/800/500?random=3' },
    { image: 'https://picsum.photos/800/400?random=4' },
    { image: 'https://picsum.photos/600/400?random=5' },
    { image: 'https://picsum.photos/600/400?random=6' },
    { image: 'https://picsum.photos/600/400?random=7' },
  ],
  products: [
    {
      image: 'https://picsum.photos/300/300?random=10',
      description: '商品介紹...',
      info: {
        price: 99,
        isSale: false,
        isLimitedTime: true,
        isAddPurchase: false,
        isGiveaway: true,
      }
    },
    {
      image: 'https://picsum.photos/300/300?random=11',
      description: '商品介紹...',
      info: {
        price: 99,
        isSale: true,
        isLimitedTime: true,
        isAddPurchase: true,
        isGiveaway: true,
      }
    },
    {
      image: 'https://picsum.photos/300/300?random=12',
      description: '商品介紹...',
      info: {
        price: 99,
        isSale: true,
        isLimitedTime: true,
        isAddPurchase: false,
        isGiveaway: false,
      }
    },
    {
      image: 'https://picsum.photos/300/300?random=13',
      description: '商品介紹...',
      info: {
        price: 99,
        isSale: false,
        isLimitedTime: true,
        isAddPurchase: false,
        isGiveaway: false,
      }
    },
    {
      image: 'https://picsum.photos/300/300?random=14',
      description: '商品介紹...',
      info: {
        price: 99,
        isSale: false,
        isLimitedTime: false,
        isAddPurchase: true,
        isGiveaway: true,
      }
    },
    {
      image: 'https://picsum.photos/300/300?random=15',
      description: '商品介紹...',
      info: {
        price: 99,
        isSale: true,
        isLimitedTime: true,
        isAddPurchase: false,
        isGiveaway: true,
      }
    },
  ],
  introduce: {
    images: [
      'https://picsum.photos/600/600?random=10',
      'https://picsum.photos/600/600?random=11',
      'https://picsum.photos/600/600?random=12',
      'https://picsum.photos/600/600?random=13',
      'https://picsum.photos/600/600?random=14',
      'https://picsum.photos/600/600?random=15',
    ],
    content: {
      feature: ['特色1', '特色2', '特色3',],
      text: ['說明1', '說明2', '說明3', '說明4'],
      color: ['002211', '553311', '909033'],
      transportation: ['宅配', '郵局包裏', '超商取貨'],
      price: 199,
      specification: [
        { title: '材質', content: '铝' },
        { title: '產地', content: '中國大陸' },
        { title: '尺寸', content: '35cm X 35cm X 20cm' },
        { title: '其它', content: '每台電腦螢幕因設定及廠牌不同，皆會影響顯示器的顏色呈現，難免會有色差及個人感官認知的差異， 所以出貨以實際商品顏色為主。' },
      ]
    }

  },

}

export default dummy