function toLowerDash(str: string) {
  const sanitizedStr = str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s/g, "-"); // Replace spaces with hyphens
  return sanitizedStr;
}

const restaurantList = [
  {
    type: "restaurant",
    info: {
      resId: 20428346,
      name: "Sharma And Vishnu Fast Food : Hamidia Road",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/2600549/5f0e73e475f542deb7bed86fad3354fb_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/2600549/5f0e73e475f542deb7bed86fad3354fb_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "552",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "3 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "549",
            reviewTextSmall: "549 Reviews",
            subtext: "549 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Revenue Survey 449/450/2, Near Gurdwara And Manohar Dairy, Hamidia Road, Ward 18, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bhopal/sharma-and-vishnu-fast-food-hamidia-road-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bhopal/sharma-and-vishnu-fast-food-hamidia-road-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20428346%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20428346","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b975 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600047,
      name: "Bapu Ki Kutia",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600047/c213a1df34c7f8045badf9250d0165db_o2_featured_v2.jpeg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600047/c213a1df34c7f8045badf9250d0165db_o2_featured_v2.jpeg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "22.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "770",
            reviewTextSmall: "770 Reviews",
            subtext: "770 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "22K",
            reviewTextSmall: "22K Reviews",
            subtext: "22K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Near Rajbhavan, Roshanpura, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: true,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "27 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/bapu-ki-kutia-tt-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bapu-ki-kutia-tt-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600047%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600047","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18854172,
      name: "Mughal Darbar Family Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/18854172/02d951c69ca3b45eff3f5817db305324_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/18854172/02d951c69ca3b45eff3f5817db305324_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "24.6K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "318",
            reviewTextSmall: "318 Reviews",
            subtext: "318 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.6",
            reviewCount: "24.3K",
            reviewTextSmall: "24.3K Reviews",
            subtext: "24.3K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.6",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "JP Nagar, Bhopal",
        address:
          "Shop 4, Near Hanuman Ganj Thana, Nadra Bus Stand, JP Nagar, Bhopal",
        localityUrl: "bhopal/jp-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/mughal-darbar-family-restaurant-jp-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/mughal-darbar-family-restaurant-jp-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18854172%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18854172","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600818,
      name: "Mamaji Jalebi Wale",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/2600818/5297c64e4b3832a904ed61a1f368f352_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/2600818/5297c64e4b3832a904ed61a1f368f352_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "15.3K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "586",
            reviewTextSmall: "586 Reviews",
            subtext: "586 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "14.8K",
            reviewTextSmall: "14.8K Reviews",
            subtext: "14.8K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "8 & 9, Lakherapura, Peer Gate Area, Ibrahimpura, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "38 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/mamaji-jalebi-wale-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/mamaji-jalebi-wale-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600818%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600818","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19575671,
      name: "Mughal Darbar Fast Food",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/19575671/a9f033f686dab695dd232b89afa69f98_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/19575671/a9f033f686dab695dd232b89afa69f98_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,199",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "12",
            reviewTextSmall: "12 Reviews",
            subtext: "12 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "3,187",
            reviewTextSmall: "3,187 Reviews",
            subtext: "3,187 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Shop 62, Hamidia Road, Opposite Axis Bank, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/mughal-darbar-fast-food-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/mughal-darbar-fast-food-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19575671%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19575671","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9150 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601732,
      name: "Rajhans Thali",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/2601732/73905eb9dc077a24271592c17d1041f4_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/2601732/73905eb9dc077a24271592c17d1041f4_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,217",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "742",
            reviewTextSmall: "742 Reviews",
            subtext: "742 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "7,475",
            reviewTextSmall: "7,475 Reviews",
            subtext: "7,475 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "268, Near Sargam Talkies, Zone 2, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 43 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODhcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/rajasthani/",
          name: "Rajasthani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "44 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/rajhans-thali-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rajhans-thali-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2601732%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "3.2 km",
    isPromoted: true,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601732","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9250 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19931930,
      name: "Pizza Kitchen",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/19931930/9c66c9fea4bfd0d60b21835d85107d34_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/19931930/9c66c9fea4bfd0d60b21835d85107d34_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,400",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "21",
            reviewTextSmall: "21 Reviews",
            subtext: "21 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "2,379",
            reviewTextSmall: "2,379 Reviews",
            subtext: "2,379 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "F 127, Gautam Nagar, Govindpura, Huzur, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/pizza-kitchen-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/pizza-kitchen-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19931930%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19931930","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20223126,
      name: "Pizza Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/2600025/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/2600025/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,151",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "106",
            reviewTextSmall: "106 Reviews",
            subtext: "106 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.2",
            reviewCount: "2,045",
            reviewTextSmall: "2,045 Reviews",
            subtext: "2,045 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address:
          "Shop T-14 & T-15, Third Floor, DB City Mall, Arera Hills, MP Nagar, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "62 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/pizza-hut-arera-colony/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/pizza-hut-arera-colony/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20223126%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20223126","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20396939,
      name: "La Pino'z Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/20396835/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/20396835/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,819",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "42",
            reviewTextSmall: "42 Reviews",
            subtext: "42 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "1,777",
            reviewTextSmall: "1,777 Reviews",
            subtext: "1,777 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Kohefiza, Bhopal",
        address: "Shop G/8, Ground Floor, Alark Square, Kohefiza, Bhopal",
        localityUrl: "bhopal/kohefiza-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "42 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/la-pinoz-pizza-kohefiza/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/la-pinoz-pizza-kohefiza/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20396939%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "5.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20396939","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18780803,
      name: "Sharma Bhojnalaya",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/18780803/0538e0f7b64baaf20dc174396ec635d9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/18780803/0538e0f7b64baaf20dc174396ec635d9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "9,380",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "142",
            reviewTextSmall: "142 Reviews",
            subtext: "142 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "9,238",
            reviewTextSmall: "9,238 Reviews",
            subtext: "9,238 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address:
          "Shop 1, New Market, Near Jawahar Chowk Bus Stand, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "28 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/sharma-bhojnalaya-1-tt-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/sharma-bhojnalaya-1-tt-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18780803%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18780803","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600021,
      name: "McDonald's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/2600021/84984b837fd5e08a96810b76624060b0_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/2600021/84984b837fd5e08a96810b76624060b0_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "13.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "772",
            reviewTextSmall: "772 Reviews",
            subtext: "772 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "13.1K",
            reviewTextSmall: "13.1K Reviews",
            subtext: "13.1K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "DB City, Maharana Pratap Nagar, Bhopal",
        address: "Third Floor, DB City mall, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/restaurants/in/db-city-maharana-pratap-nagar",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/coffee/",
          name: "Coffee",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "44 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/mcdonalds-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/mcdonalds-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600021%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600021","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Free Veg Surprise",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19814000,
      name: "Al Azeez",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/19814000/4b032bbcd46e4db034cfebab158a720f_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/19814000/4b032bbcd46e4db034cfebab158a720f_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "1,286",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.4",
            reviewCount: "1,286",
            reviewTextSmall: "1,286 Reviews",
            subtext: "1,286 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9250 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Shop 3, Railway Station, Bazariya Main Road, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "44 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/al-azeez-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/al-azeez-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19814000%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19814000","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20802080,
      name: "Merhaba",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18787431/b7bbf01803867183b0f5fad6c0421fd5_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/18787431/b7bbf01803867183b0f5fad6c0421fd5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "45",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "0 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "45",
            reviewTextSmall: "45 Reviews",
            subtext: "45 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Shop 50, Unani Shafakhana Road, Near Masjid Yaqoob Kha, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "28 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/merhaba-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/merhaba-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20802080%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20802080","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20721518,
      name: "Al - Baik Zayqa",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20721518/528982b7909de795e69431eab09ed76c_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20721518/528982b7909de795e69431eab09ed76c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "209",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "209",
            reviewTextSmall: "209 Reviews",
            subtext: "209 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9250 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Jhangirabad, Bhopal",
        address: "Main Market, Near Thane Wali Masjid, Jhangirabad, Bhopal",
        localityUrl: "bhopal/jhangirabad-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "20 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/al-baik-zayqa-jhangirabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/al-baik-zayqa-jhangirabad/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20721518%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "194 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20721518","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19894183,
      name: "Ohh! Wow Momos",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19894183/6887b092edbe6156c41c9926b14425e9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19894183/6887b092edbe6156c41c9926b14425e9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "683",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "683",
            reviewTextSmall: "683 Reviews",
            subtext: "683 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address:
          "Shop 2, Choraha 7, Shivaji Nagar, Huzur, Opposite Bda Complex, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ohh-wow-momos-food-truck/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/ohh-wow-momos-food-truck/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19894183%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "3.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19894183","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600003,
      name: "Manohar Dairy And Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/2600003/2748a25a1a7a07bd8f9dc555f1384adb_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/2600003/2748a25a1a7a07bd8f9dc555f1384adb_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "21.4K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "1,064",
            reviewTextSmall: "1,064 Reviews",
            subtext: "1,064 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "20.4K",
            reviewTextSmall: "20.4K Reviews",
            subtext: "20.4K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "6, Hamidia Road, Opposite Alpana Cineplex, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 12 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/manohar-dairy-and-restaurant-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/manohar-dairy-and-restaurant-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600003%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600003","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b950 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18821752,
      name: "Burger King",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/18821752/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/18821752/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "16.3K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "299",
            reviewTextSmall: "299 Reviews",
            subtext: "299 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "16K",
            reviewTextSmall: "16K Reviews",
            subtext: "16K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "DB City, Maharana Pratap Nagar, Bhopal",
        address:
          "11 & 12, Food Court, 3rd Floor, DB City Mall, Zone 1, Arera Hills, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/restaurants/in/db-city-maharana-pratap-nagar",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "58 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/burger-king-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/burger-king-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18821752%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18821752","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "60% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18971331,
      name: "Bhopal Udipi Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/18971331/a30ca8937f8d25ef953c05e0143429a6_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/18971331/a30ca8937f8d25ef953c05e0143429a6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "9,198",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "66",
            reviewTextSmall: "66 Reviews",
            subtext: "66 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "9,132",
            reviewTextSmall: "9,132 Reviews",
            subtext: "9,132 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "JP Nagar, Bhopal",
        address: "89, Coach Factory Road, Dwarka Nagar, Near JP Nagar, Bhopal",
        localityUrl: "bhopal/jp-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "44 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/bhopal-udipi-restaurant-1-jp-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bhopal-udipi-restaurant-1-jp-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18971331%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18971331","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "60% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600029,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/2600029/83e71b55d4a73c3f0e1a5a353f90eb13_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/2600029/83e71b55d4a73c3f0e1a5a353f90eb13_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "7,436",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "793",
            reviewTextSmall: "793 Reviews",
            subtext: "793 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "6,643",
            reviewTextSmall: "6,643 Reviews",
            subtext: "6,643 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9450 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "DB City, Maharana Pratap Nagar, Bhopal",
        address:
          "R-7, Third Floor, Db City Mall, Arera Hills, Zone-1, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/restaurants/in/db-city-maharana-pratap-nagar",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "45 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/kfc-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/kfc-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600029%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600029","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19472556,
      name: "Ganesham Fast Food - New Market",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/19071208/ad048584d97f984715b0a7455cae7583_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/19071208/ad048584d97f984715b0a7455cae7583_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "3,352",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.9",
            reviewCount: "21",
            reviewTextSmall: "21 Reviews",
            subtext: "21 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "yellow",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "3,331",
            reviewTextSmall: "3,331 Reviews",
            subtext: "3,331 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Shop 2, Multi Line Parking, New Market, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/ganesham-fast-food-new-market-tt-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/ganesham-fast-food-new-market-tt-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19472556%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19472556","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600007,
      name: "Bake N Shake",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600007/8e91938b58a0e7b8a444a7745acff99b_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600007/8e91938b58a0e7b8a444a7745acff99b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,008",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "513",
            reviewTextSmall: "513 Reviews",
            subtext: "513 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "7,495",
            reviewTextSmall: "7,495 Reviews",
            subtext: "7,495 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Rangmahal Cineplex Compound, New Market, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/bakery/",
          name: "Bakery",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/bake-n-shake-tt-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bake-n-shake-tt-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600007%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600007","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18808572,
      name: "Rajoriya Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/18808572/c6f8ea4f20712066cf158537650864f5_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/18808572/c6f8ea4f20712066cf158537650864f5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "19.9K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "198",
            reviewTextSmall: "198 Reviews",
            subtext: "198 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "19.7K",
            reviewTextSmall: "19.7K Reviews",
            subtext: "19.7K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "BHEL, Bhopal",
        address: "22, Chanakyapuri, J K Road, Near Minal Gate 1, BHEL, Bhopal",
        localityUrl: "bhopal/bhel-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "42 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/rajoriya-restaurant-1-bhel/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rajoriya-restaurant-1-bhel/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18808572%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18808572","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "30% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19010012,
      name: "Sanjay Sweets",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/19010012/e7988f910c680ccab1381081d8cbe31a_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/19010012/e7988f910c680ccab1381081d8cbe31a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "16.6K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "175",
            reviewTextSmall: "175 Reviews",
            subtext: "175 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "16.4K",
            reviewTextSmall: "16.4K Reviews",
            subtext: "16.4K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "JP Nagar, Bhopal",
        address: "Plot 12, Karond Chouraha, JP Nagar, Bhopal",
        localityUrl: "bhopal/jp-nagar-restaurants",
      },
      timing: {
        text: "Opens at 10:29pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "49 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/sanjay-sweets-jp-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/sanjay-sweets-jp-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19010012%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "5.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19010012","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601445,
      name: "Guptaji Shakahari Bhojnalaya",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/2601445/68ff6a626ee3b835d2c7ee05585d8aa3_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/2601445/68ff6a626ee3b835d2c7ee05585d8aa3_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "25.9K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "353",
            reviewTextSmall: "353 Reviews",
            subtext: "353 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.6",
            reviewCount: "25.5K",
            reviewTextSmall: "25.5K Reviews",
            subtext: "25.5K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.6",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address: "Plot 90, Ground Floor, Zone 2, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "40 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bhopal/guptaji-shakahari-bhojnalaya-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bhopal/guptaji-shakahari-bhojnalaya-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2601445%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601445","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9175 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19222095,
      name: "Naveen's Bapu Ki Kutia - Bittan",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/2600079/7e75db28dc65c5cdfac9c95947f76767_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/2600079/7e75db28dc65c5cdfac9c95947f76767_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,630",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "78",
            reviewTextSmall: "78 Reviews",
            subtext: "78 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "3,552",
            reviewTextSmall: "3,552 Reviews",
            subtext: "3,552 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9700 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address:
          "E5/4, First Floor, Opposite Habibgang Police Station, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "Opens tomorrow at 8:30am",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/naveens-bapu-ki-kutia-bittan-arera-colony/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/naveens-bapu-ki-kutia-bittan-arera-colony/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19222095%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "3.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19222095","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600504,
      name: "Mahadev Bhojnalay",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/2600504/f055fe5d5efcc37659a7839f4bc018dc_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/2600504/f055fe5d5efcc37659a7839f4bc018dc_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "28.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "456",
            reviewTextSmall: "456 Reviews",
            subtext: "456 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.6",
            reviewCount: "27.6K",
            reviewTextSmall: "27.6K Reviews",
            subtext: "27.6K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.6",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "Shop 10, Ranthambor Complex, Zone 2, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "41 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/mahadev-bhojnalay-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/mahadev-bhojnalay-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600504%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600504","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9175 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19190518,
      name: "New Zam Zam",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/19190518/8a476a4e1f0573e0f0cfd69245fbb0b9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/19190518/8a476a4e1f0573e0f0cfd69245fbb0b9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "7,676",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "7,676",
            reviewTextSmall: "7,676 Reviews",
            subtext: "7,676 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E7, Vasant Kunj, Opposite SBI Bank, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "53 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/new-zam-zam-arera-colony/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/new-zam-zam-arera-colony/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19190518%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "6.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19190518","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601366,
      name: "Rajoriya DK Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/2601366/8cde3660ec9332be62fc52d061186719_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/2601366/8cde3660ec9332be62fc52d061186719_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "14.4K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "249",
            reviewTextSmall: "249 Reviews",
            subtext: "249 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "14.1K",
            reviewTextSmall: "14.1K Reviews",
            subtext: "14.1K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "BHEL, Bhopal",
        address: "Shop 22, J K Road, BHEL, Bhopal",
        localityUrl: "bhopal/bhel-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "43 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/rajoriya-dk-restaurant-bhel/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rajoriya-dk-restaurant-bhel/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2601366%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601366","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "40% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600051,
      name: "Al-Beik",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/2600051/b875fa5b9215447ed500d10de3b15e2a_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/2600051/b875fa5b9215447ed500d10de3b15e2a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "16.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "1,067",
            reviewTextSmall: "1,067 Reviews",
            subtext: "1,067 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "15.7K",
            reviewTextSmall: "15.7K Reviews",
            subtext: "15.7K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "Plot 7, Opposite Manohar Dairy, Near City Bank, Zone 1, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "Closes in 41 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "29 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/al-beik-2-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/al-beik-2-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600051%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600051","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19899514,
      name: "78 Degrees Cafe & Restro",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19899514/c5f75bdddcfd0b874f13c407bdad6506_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19899514/c5f75bdddcfd0b874f13c407bdad6506_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.3",
        rating_text: "3.3",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "2,058",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.0",
            reviewCount: "22",
            reviewTextSmall: "22 Reviews",
            subtext: "22 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "2,036",
            reviewTextSmall: "2,036 Reviews",
            subtext: "2,036 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Shop 14, Meenakshi Regency, Idgah Hills, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/tea/",
          name: "Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "40 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/78-degrees-cafe-restro-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/78-degrees-cafe-restro-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19899514%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "3.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19899514","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600335,
      name: "Hakeem's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/2600333/454fff006eae2f28764d961a3d05f970_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/2600333/454fff006eae2f28764d961a3d05f970_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "5,262",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "398",
            reviewTextSmall: "398 Reviews",
            subtext: "398 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "4,864",
            reviewTextSmall: "4,864 Reviews",
            subtext: "4,864 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "Plot 84, Infront Of Raymond Showroom, Zone 2, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/hakeems-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hakeems-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600335%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600335","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600042,
      name: "Filfora",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2600040/86afbbc7b1b192014891180ec085f83a_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2600040/86afbbc7b1b192014891180ec085f83a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "10.2K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "550",
            reviewTextSmall: "550 Reviews",
            subtext: "550 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "9,692",
            reviewTextSmall: "9,692 Reviews",
            subtext: "9,692 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9850 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Kohefiza, Bhopal",
        address: "18, BDA Colony, Opposite Koefiza Hospital, Kohefiza, Bhopal",
        localityUrl: "bhopal/kohefiza-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/rolls/",
          name: "Rolls",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/bbq/",
          name: "BBQ",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/filfora-kohefiza/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/filfora-kohefiza/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600042%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600042","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18773976,
      name: "Hotel Afghan",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/18773976/2e04f61586060dbca777f6c5af8b2a28_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/18773976/2e04f61586060dbca777f6c5af8b2a28_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "7,436",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "209",
            reviewTextSmall: "209 Reviews",
            subtext: "209 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "7,227",
            reviewTextSmall: "7,227 Reviews",
            subtext: "7,227 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Kohefiza, Bhopal",
        address: "Shop 2, 21 shaheed nagar, Kohefiza, Bhopal",
        localityUrl: "bhopal/kohefiza-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "37 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/hotel-afghan-kohefiza/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hotel-afghan-kohefiza/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18773976%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "3.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18773976","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18813678,
      name: "R. K. Udippi Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/18813678/f05b42b3d40f17af21cdc386ad640103_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/18813678/f05b42b3d40f17af21cdc386ad640103_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "9,125",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "117",
            reviewTextSmall: "117 Reviews",
            subtext: "117 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "9,008",
            reviewTextSmall: "9,008 Reviews",
            subtext: "9,008 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "JP Nagar, Bhopal",
        address:
          "House 1, Pushpa Nagar, 80 Fit Road, Ashoka Garden, JP Nagar, Bhopal",
        localityUrl: "bhopal/jp-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/r-k-udippi-restaurant-jp-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/r-k-udippi-restaurant-jp-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18813678%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18813678","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20489330,
      name: "Kwality Wall\u2019s Frozen Dessert and Ice Cream Shop",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/19649146/b62a5cf0ae92446aef6425255d0b6890_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/19649146/b62a5cf0ae92446aef6425255d0b6890_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "156",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "156",
            reviewTextSmall: "156 Reviews",
            subtext: "156 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "Shop 01, Shikhar Tower, Bus Stop 6, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 41 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "23 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bhopal/kwality-walls-frozen-dessert-and-ice-cream-shop-2-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bhopal/kwality-walls-frozen-dessert-and-ice-cream-shop-2-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20489330%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20489330","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601760,
      name: "Shri Gurukripa Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19190513/0325358ce0a802018308f5afe5399232_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/19190513/0325358ce0a802018308f5afe5399232_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "33.5K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.0",
            reviewCount: "11",
            reviewTextSmall: "11 Reviews",
            subtext: "11 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "33.5K",
            reviewTextSmall: "33.5K Reviews",
            subtext: "33.5K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "BHEL, Bhopal",
        address: "Shop 9, Nagam Nigam Complex, A Apoorti Mall, BHEL, Bhopal",
        localityUrl: "bhopal/bhel-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9250 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/shri-gurukripa-restaurant-bhel/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/shri-gurukripa-restaurant-bhel/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2601760%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601760","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600411,
      name: "Rajhans Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/2600411/297751ee4169d014f7d60b7b594f8c0e_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/2600411/297751ee4169d014f7d60b7b594f8c0e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "13.7K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "471",
            reviewTextSmall: "471 Reviews",
            subtext: "471 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "13.3K",
            reviewTextSmall: "13.3K Reviews",
            subtext: "13.3K Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Mandir Kamali Road, Ghora Nikkas, Near Nadara Bus Stand, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "42 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/rajhans-restaurant-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rajhans-restaurant-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600411%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600411","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601300,
      name: "Sawariya Bakery & Fast Food",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2601300/711264aab9016753c222d6ab96982fea_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2601300/711264aab9016753c222d6ab96982fea_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "10.1K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "214",
            reviewTextSmall: "214 Reviews",
            subtext: "214 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.6",
            reviewCount: "9,888",
            reviewTextSmall: "9,888 Reviews",
            subtext: "9,888 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.6",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9250 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Shop 16, Jain Tower, Nehru Nagar, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "44 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/sawariya-bakery-fast-food-tt-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/sawariya-bakery-fast-food-tt-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2601300%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601300","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b9200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19874516,
      name: "99 Rotiwala",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/19874516/1559759c5e4e4661d371a6f7045276bc_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/19874516/1559759c5e4e4661d371a6f7045276bc_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,592",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "3,592",
            reviewTextSmall: "3,592 Reviews",
            subtext: "3,592 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address: "13/1, Old Shubhash Nagar, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/99-rotiwala-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/99-rotiwala-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19874516%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19874516","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601652,
      name: "Vrindavan Dhaba's Timbuktoo",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/2601652/fe752cf64a86379f3a546b5a23d43865_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/2601652/fe752cf64a86379f3a546b5a23d43865_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "12.4K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "237",
            reviewTextSmall: "237 Reviews",
            subtext: "237 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "12.1K",
            reviewTextSmall: "12.1K Reviews",
            subtext: "12.1K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9350 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address:
          "Shop 20-21, Prakriti Eden, Near Shahpura Thana, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "Temporarily closed for dining, will be back soon!",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "45 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/vrindavan-dhabas-timbuktoo-gulmohar-colony/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/vrindavan-dhabas-timbuktoo-gulmohar-colony/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2601652%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "6.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601652","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20628316,
      name: "Indian Coffee House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20628316/0ba8678478dabcc7464ce2f8f619985a_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20628316/0ba8678478dabcc7464ce2f8f619985a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "61",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "0 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "61",
            reviewTextSmall: "61 Reviews",
            subtext: "61 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Jhangirabad, Bhopal",
        address: "7th Battalion, Jhangirabad, Bhopal",
        localityUrl: "bhopal/jhangirabad-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 26 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/ice-cream/",
          name: "Ice Cream",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "22 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/indian-coffee-house-jhangirabad/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/indian-coffee-house-jhangirabad/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F20628316%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "404 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20628316","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18923238,
      name: "The Belgian Waffle Co.",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/18923238/bd6d35499c5fb33bea73c32bbf4b0237_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/18923238/bd6d35499c5fb33bea73c32bbf4b0237_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,727",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "55",
            reviewTextSmall: "55 Reviews",
            subtext: "55 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "3,672",
            reviewTextSmall: "3,672 Reviews",
            subtext: "3,672 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address: "3rd Floor, DB City Mall, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 41 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/waffle/",
          name: "Waffle",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "38 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/the-belgian-waffle-co-maharana-pratap-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-belgian-waffle-co-maharana-pratap-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18923238%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18923238","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "\u20b975 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18772539,
      name: "Hotel Shikha",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18772539/9524df4b9867824fe798da464db38ee2_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18772539/9524df4b9867824fe798da464db38ee2_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "5,582",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "253",
            reviewTextSmall: "253 Reviews",
            subtext: "253 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "5,329",
            reviewTextSmall: "5,329 Reviews",
            subtext: "5,329 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9600 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address: "8, Azad Market, Jumerati, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/hotel-shikha-4-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hotel-shikha-4-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18772539%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "1.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18772539","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18969623,
      name: "Krishna Veg Biryani And Chowmeen Fast Food",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/18969623/66b9b744ae1d0a79594dbd38eb19805c_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/18969623/66b9b744ae1d0a79594dbd38eb19805c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "8,212",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "134",
            reviewTextSmall: "134 Reviews",
            subtext: "134 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "8,078",
            reviewTextSmall: "8,078 Reviews",
            subtext: "8,078 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address:
          "Shop 2, H 16, Sindhi Colony Shahjahanbad Road, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl:
          "/bhopal/krishna-veg-biryani-and-chowmeen-fast-food-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bhopal/krishna-veg-biryani-and-chowmeen-fast-food-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18969623%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18969623","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600172,
      name: "Amer Bakery Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2600170/4ec8a56b932532310af1f28b98f20022_o2_featured_v2.png",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2600170/4ec8a56b932532310af1f28b98f20022_o2_featured_v2.png",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,212",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "464",
            reviewTextSmall: "464 Reviews",
            subtext: "464 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "2,748",
            reviewTextSmall: "2,748 Reviews",
            subtext: "2,748 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9600 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address:
          "Prakash Swimming Pool Campus, Link Road 1, Opposite Arera Club New Market, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "Closes in 1 hour 41 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "39 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/amer-bakery-hut-tt-nagar/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/amer-bakery-hut-tt-nagar/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F2600172%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600172","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18788860,
      name: "Balveer Da Punjabi Dhaba",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/18788860/d928328bdf5ddd16e5ce66f6647d5a68_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/18788860/d928328bdf5ddd16e5ce66f6647d5a68_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,937",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "79",
            reviewTextSmall: "79 Reviews",
            subtext: "79 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "2,858",
            reviewTextSmall: "2,858 Reviews",
            subtext: "2,858 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "BHEL, Bhopal",
        address:
          "Shop G-7, Girnar Complex, JK Road, Indrapuri A Sector, BHEL, Bhopal",
        localityUrl: "bhopal/bhel-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "29 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/balveer-da-punjabi-dhaba-bhel/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/balveer-da-punjabi-dhaba-bhel/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18788860%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "4.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18788860","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          aspect_ratio: 2.0625,
        },
        text: "Restaurant partner follows WHO protocol",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 18154918,
      name: "Khan Sahab",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/18154918/15c9fe7820f473ec96ae3aa655488950_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/18154918/15c9fe7820f473ec96ae3aa655488950_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "15K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "935",
            reviewTextSmall: "935 Reviews",
            subtext: "935 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "14.1K",
            reviewTextSmall: "14.1K Reviews",
            subtext: "14.1K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9700 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Peer Gate Area, Bhopal",
        address: "Model Ground, Hamidia Road, Peer Gate Area, Bhopal",
        localityUrl: "bhopal/peer-gate-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "40 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/khan-sahab-peer-gate-area/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/khan-sahab-peer-gate-area/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F18154918%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "2.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18154918","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures to ensure your food is safe",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19941465,
      name: "Chai Sutta Boyz",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19941465/53ff2db3575b4920accbf2a2766834ff_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/19941465/53ff2db3575b4920accbf2a2766834ff_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "178",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "4",
            reviewTextSmall: "4 Reviews",
            subtext: "4 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "174",
            reviewTextSmall: "174 Reviews",
            subtext: "174 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9350 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address:
          "Shop 10A, K.K Platinum Plaza, Trilanga Road, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/tea/",
          name: "Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9150 for one",
      },
    },
    order: {
      deliveryTime: "52 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bhopal/chai-sutta-boyz-gulmohar-colony/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/chai-sutta-boyz-gulmohar-colony/order",
      clickActionDeeplink:
        "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F19941465%3Futm_campaign%3Df16b9bab82e976b739a91f907ed5a57e%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard",
    },
    distance: "7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"68db2a00-2d29-4060-95f5-acb93366de72","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19941465","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },

  {
    type: "restaurant",
    info: {
      resId: 19656645,
      name: "Blue Lagoon Farm",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19656645/3677269dc5a2358b0053393793316bbd_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/19656645/3677269dc5a2358b0053393793316bbd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/19656645/4e9630aa19d3fabaa42ffb15478b42e8_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "7",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "7",
            reviewTextSmall: "7 Reviews",
            subtext: "7 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Kohefiza, Bhopal",
        address: "Near Sai Acadmy, Bisankhedi, Kohefiza, Bhopal",
        localityUrl: "bhopal/kohefiza-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/blue-lagoon-farm-kohefiza/info",
      clickActionDeeplink: "",
    },
    distance: "8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19656645","element_type":"listing","rank":46}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601732,
      name: "Rajhans Thali",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/2/2601732/54df0c86e8cd8517c899d59778951c74_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/2/2601732/54df0c86e8cd8517c899d59778951c74_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/2601732/73905eb9dc077a24271592c17d1041f4_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "8,238",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "742",
            reviewTextSmall: "742 Reviews",
            subtext: "742 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "7,496",
            reviewTextSmall: "7,496 Reviews",
            subtext: "7,496 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "268, Near Sargam Talkies, Zone 2, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODhcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/rajasthani/",
          name: "Rajasthani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rajhans-thali-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601732","element_type":"listing","rank":47}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18755604,
      name: "Ranjit's Lakeview",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/18755604/c20124f82f6b4644b2d19f2e2e3f76db_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/18755604/c20124f82f6b4644b2d19f2e2e3f76db_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/18755604/509c445989f7c063f74f734e93ff81d4_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,078",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "118",
            reviewTextSmall: "118 Reviews",
            subtext: "118 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "1,960",
            reviewTextSmall: "1,960 Reviews",
            subtext: "1,960 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9600 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Van Vihar Road, Shamla Hills, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9600 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/ranjits-lakeview-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18755604","element_type":"listing","rank":49}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601875,
      name: "Domino's Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/2600026/3007424e599ae07036eab7ee1b4ed93a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/6/2600026/3007424e599ae07036eab7ee1b4ed93a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/2600026/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,849",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "344",
            reviewTextSmall: "344 Reviews",
            subtext: "344 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "4,505",
            reviewTextSmall: "4,505 Reviews",
            subtext: "4,505 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Airport Area, Bhopal",
        address:
          "Shop 5-8, Ground Floor, First Floor, Taparia Estate, Lalghati, Airport Area, Bhopal",
        localityUrl: "bhopal/airport-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/dominos-pizza-2-airport-area/info",
      clickActionDeeplink: "",
    },
    distance: "6.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601875","element_type":"listing","rank":50}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/dominos-pizza?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18791127,
      name: "Drinx Exchange",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/18791127/7409614fb20ee0228cabad78db03a9db_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/7/18791127/7409614fb20ee0228cabad78db03a9db_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/18791127/00bf312f207595fb1209be21ed817c4b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "264",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.4",
            reviewCount: "239",
            reviewTextSmall: "239 Reviews",
            subtext: "239 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "25",
            reviewTextSmall: "25 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,500 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "T1 & T2, Third Floor, DB City Mall, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mexican/",
          name: "Mexican",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,500 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/drinx-exchange-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18791127","element_type":"listing","rank":51}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20337404,
      name: "Celebrations Resort",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20337404/b829ba4b792c8d05c9ff9f31c5a1172f_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/20337404/b829ba4b792c8d05c9ff9f31c5a1172f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20337404/5e4236b7534822884b2a614bfc05f0df_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "41",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "11",
            reviewTextSmall: "11 Reviews",
            subtext: "11 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "30",
            reviewTextSmall: "30 Reviews",
            subtext: "30 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Kolar, Bhopal",
        address: "House 58/1-57/1-58/2, Vinit Kunj, Kolar Road, Kolar, Bhopal",
        localityUrl: "bhopal/kolar-restaurants",
      },
      timing: {
        text: "Opens at 12:30pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/celebrations-resort-kolar/info",
      clickActionDeeplink: "",
    },
    distance: "8.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20337404","element_type":"listing","rank":52}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19761784,
      name: "Shakes Appeal",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/5/20492455/fbf7a31977896b952cd92e3f7fb0fce7_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/5/20492455/fbf7a31977896b952cd92e3f7fb0fce7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19761784/426807b40a25dedec00133cd7f0c79ea_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,663",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "113",
            reviewTextSmall: "113 Reviews",
            subtext: "113 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "1,550",
            reviewTextSmall: "1,550 Reviews",
            subtext: "1,550 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E/3-118, Near 10 Stop, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/waffle/",
          name: "Waffle",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/shakes-appeal-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "4.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19761784","element_type":"listing","rank":53}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/shakes-appeal-arera-colony/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/shakes-appeal-1?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20473763,
      name: "Coffee Therapy",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/20473763/529c0d965824ffc1d16590adf4efe343_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/20473763/529c0d965824ffc1d16590adf4efe343_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20473763/d13d8d7bc6db3f886927d4916b709cb1_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "20",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "5",
            reviewTextSmall: "5 Reviews",
            subtext: "5 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "15",
            reviewTextSmall: "15 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9350 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E3/ 283 B, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/tea/",
          name: "Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9350 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/coffee-therapy-3-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "4.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20473763","element_type":"listing","rank":54}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20345446,
      name: "House Of Delici",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20345446/af0787fdf765d5e983ec121c110327d6_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/20345446/af0787fdf765d5e983ec121c110327d6_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20345446/e1b106a9ccfabbb32998edcead927865_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.3",
        rating_text: "3.3",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "204",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.1",
            reviewCount: "16",
            reviewTextSmall: "16 Reviews",
            subtext: "16 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "188",
            reviewTextSmall: "188 Reviews",
            subtext: "188 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,600 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Airport Area, Bhopal",
        address:
          "Rooftop, Alark Squre, Gram Nayapura, Lalghati Squre, Airport Area, Bhopal",
        localityUrl: "bhopal/airport-area-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,600 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/house-of-delici-airport-area/info",
      clickActionDeeplink: "",
    },
    distance: "5.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20345446","element_type":"listing","rank":55}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18886628,
      name: "The Brunch House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/18886628/d1c17fb9a023bcdaba1c9c25d5ce28c8_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/18886628/d1c17fb9a023bcdaba1c9c25d5ce28c8_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/18886628/ec4dc057f7612ec5b78ea2a854785767_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,165",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "178",
            reviewTextSmall: "178 Reviews",
            subtext: "178 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "3,987",
            reviewTextSmall: "3,987 Reviews",
            subtext: "3,987 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "Courtyard By Marriot, Maharana Pratap Nagar, Bhopal",
        address: "26-27, Near I.S.B.T, Maharana Pratap Nagar, Bhopal",
        localityUrl:
          "bhopal/restaurants/in/courtyard-by-marriot-maharana-pratap-nagar",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9300 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-brunch-house-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18886628","element_type":"listing","rank":56}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/the-brunch-house-maharana-pratap-nagar/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20583968,
      name: "Tabbar House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20583968/00c7442d77013dd9e7d6c64507f3251e_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20583968/00c7442d77013dd9e7d6c64507f3251e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20583968/952f4a54d1713ddcf2730133002363ca_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "81",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "17",
            reviewTextSmall: "17 Reviews",
            subtext: "17 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "64",
            reviewTextSmall: "64 Reviews",
            subtext: "64 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "BHEL, Bhopal",
        address:
          "Plot 16 And 17, Gaurav Tower, Minal Residency, JK Road, BHEL, Bhopal",
        localityUrl: "bhopal/bhel-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: {
      instant: 25,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "25% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/tabbar-house-bhel/info",
      clickActionDeeplink: "",
    },
    distance: "5.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20583968","element_type":"listing","rank":57}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },

  {
    type: "restaurant",
    info: {
      resId: 19225830,
      name: "Cafe Latte",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/19225830/db8aefb88d90669fdd0874a1ad087e2e_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/0/19225830/db8aefb88d90669fdd0874a1ad087e2e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/19225830/6e4b897c6e3f7e1e6134d2432fc48ac4_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "40",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "40",
            reviewTextSmall: "40 Reviews",
            subtext: "40 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9600 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Kohefiza, Bhopal",
        address: "Khanugaon, VIP Road, Kohefiza, Bhopal",
        localityUrl: "bhopal/kohefiza-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9600 for two",
      },
    },
    order: null,
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/cafe-latte-3-kohefiza/info",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19225830","element_type":"listing","rank":58}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/cafe-latte-3-kohefiza/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19235036,
      name: "Atmosphere",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/19235036/d20d5318abadfe1d8c62fc087359972c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/19235036/d20d5318abadfe1d8c62fc087359972c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.4",
        rating_text: "3.4",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "35",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.4",
            reviewCount: "35",
            reviewTextSmall: "35 Reviews",
            subtext: "35 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "239, Sunny Palace, Shashwat Tower, Near Surendra Vilas, Zone-I, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/atmosphere-1-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19235036","element_type":"listing","rank":59}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20644078,
      name: "Shamby's Cafe",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20644078/f55e81454d1751e54d82e69709592c55_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20644078/f55e81454d1751e54d82e69709592c55_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20644078/5cbbb7ccf98877254253412cfc8eac37_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "74",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "8",
            reviewTextSmall: "8 Reviews",
            subtext: "8 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.4",
            reviewCount: "66",
            reviewTextSmall: "66 Reviews",
            subtext: "66 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9450 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Kolar, Bhopal",
        address: "DK-5/276, Ground Floor, Danish Kunj, Kolar, Bhopal",
        localityUrl: "bhopal/kolar-restaurants",
      },
      timing: {
        text: "Opens in 12 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9450 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/shambys-cafe-kolar/info",
      clickActionDeeplink: "",
    },
    distance: "8.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20644078","element_type":"listing","rank":60}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20026513,
      name: "Ba Dastoor",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/20026513/0dce32207212b2074c0e5b260809cbdd_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/20026513/0dce32207212b2074c0e5b260809cbdd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/20026513/b2faa805da23b16e3fc66e2d3d7edee6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "994",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.0",
            reviewCount: "27",
            reviewTextSmall: "27 Reviews",
            subtext: "27 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "967",
            reviewTextSmall: "967 Reviews",
            subtext: "967 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Kohefiza, Bhopal",
        address:
          "A-12, Near Al-Asr Academia, Housing Board Colony, Main Road, Ward 7, Kohefiza, Bhopal",
        localityUrl: "bhopal/kohefiza-restaurants",
      },
      timing: {
        text: "Opens at 12:45pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sichuan/",
          name: "Sichuan",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/ba-dastoor-kohefiza/info",
      clickActionDeeplink: "",
    },
    distance: "4.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20026513","element_type":"listing","rank":61}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/ba-dastoor?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2601132,
      name: "Bapu Ki Kutia",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600047/af0565a156825a2258da4a2197d57843_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/7/2600047/af0565a156825a2258da4a2197d57843_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600047/c213a1df34c7f8045badf9250d0165db_o2_featured_v2.jpeg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "12.8K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "501",
            reviewTextSmall: "501 Reviews",
            subtext: "501 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "12.3K",
            reviewTextSmall: "12.3K Reviews",
            subtext: "12.3K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9700 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Kolar, Bhopal",
        address: "Sector A, Sarvdharm Colony, Kolar Main Road, Kolar, Bhopal",
        localityUrl: "bhopal/kolar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9700 for two",
      },
    },
    order: null,
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bapu-ki-kutia-kolar/info",
      clickActionDeeplink: "",
    },
    distance: "7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2601132","element_type":"listing","rank":62}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/bapu-ki-kutia-kolar/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/bapu-ki-kutia?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19784618,
      name: "Hot & Crunchy Fried Chicken",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/19784618/8155ab8a16055baee1994433b5f07131_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/19784618/8155ab8a16055baee1994433b5f07131_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/19784618/b0aeab25f7f11b5926a948ea7326cca5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "352",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "14",
            reviewTextSmall: "14 Reviews",
            subtext: "14 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "338",
            reviewTextSmall: "338 Reviews",
            subtext: "338 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Aashima Mall, Hoshangabad Road, Bhopal",
        address: "C-4, Second Floor, Aashima Mall, Hoshangabad Road, Bhopal",
        localityUrl: "bhopal/restaurants/in/aashima-mall-hoshangabad-road",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/arabian/",
          name: "Arabian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9400 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hot-crunchy-fried-chicken-hoshangabad-road/info",
      clickActionDeeplink: "",
    },
    distance: "8.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19784618","element_type":"listing","rank":63}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20547084,
      name: "Biggies Burger",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19806294/00b6b3284d9e2aec58fad7a3d2aa86d5_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/4/19806294/00b6b3284d9e2aec58fad7a3d2aa86d5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19806294/a7f97508bd43ce39fa4f0ddf06b15c49_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "456",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "46",
            reviewTextSmall: "46 Reviews",
            subtext: "46 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "410",
            reviewTextSmall: "410 Reviews",
            subtext: "410 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9450 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address: "Shop 06, Rohit Nagar, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9450 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/biggies-burger-gulmohar-colony/info",
      clickActionDeeplink: "",
    },
    distance: "8.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20547084","element_type":"listing","rank":64}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/biggies-burger?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18965982,
      name: "Alfresco",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/18965982/e19b0e1b062a557b2832ae16ca3d33e0_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/18965982/e19b0e1b062a557b2832ae16ca3d33e0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/18965982/cec2224fb868c032bab743e3062a94f5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,416",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "174",
            reviewTextSmall: "174 Reviews",
            subtext: "174 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "1,242",
            reviewTextSmall: "1,242 Reviews",
            subtext: "1,242 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address:
          "Second Floor, Towns Delight, Bawadiya Kalan, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/alfresco-gulmohar-colony/info",
      clickActionDeeplink: "",
    },
    distance: "7.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18965982","element_type":"listing","rank":65}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/alfresco-gulmohar-colony/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/MaxSafety/DiningBadge/a9e3f60f5ed05ff69a6bfa5eb87b442e1611745067.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures for a safe dining experience",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 20710037,
      name: "The Palm",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/20710037/6bb3bc659feb4235825c47976f1c09e5_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/20710037/6bb3bc659feb4235825c47976f1c09e5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/20710037/e3aa7ff0bc9aa79a8b2023f71a84275c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "12",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "5",
            reviewTextSmall: "5 Reviews",
            subtext: "5 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "7",
            reviewTextSmall: "7 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: true,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Airport Area, Bhopal",
        address: "Sehore Naka, Bhawani Road, Airport Area, Bhopal",
        localityUrl: "bhopal/airport-area-restaurants",
      },
      timing: {
        text: "Opens in 12 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-palm-airport-area/info",
      clickActionDeeplink: "",
    },
    distance: "8.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20710037","element_type":"listing","rank":66}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19392442,
      name: "Mr. Idli Ultimate Food House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/19392442/1e58f8112dd555a798dfac15e1d50271_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/19392442/1e58f8112dd555a798dfac15e1d50271_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/19392442/2ac299ec03edc18726e05857a185fddc_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "946",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "44",
            reviewTextSmall: "44 Reviews",
            subtext: "44 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "902",
            reviewTextSmall: "902 Reviews",
            subtext: "902 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address:
          "3, Lower Ground Floor, Bawadiya Kalan, Opposite Aura Mall, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9400 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/mr-idli-ultimate-food-house-gulmohar-colony/info",
      clickActionDeeplink: "",
    },
    distance: "7.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19392442","element_type":"listing","rank":67}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20725573,
      name: "Above & Beyond, Garden Kitchen & Club",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/20725573/35798765d1ddf7ad5367346362ff52e0_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/3/20725573/35798765d1ddf7ad5367346362ff52e0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "0",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,200 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Plot 50, Barkhedi Kalan, Nagar Nigam, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/bar-food/",
          name: "Bar Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,200 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/above-beyond-garden-kitchen-club-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "7.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20725573","element_type":"listing","rank":68}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20537099,
      name: "The China Terrace",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20537099/99346290ae5e416b6edc25a6aca0db9b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/20537099/99346290ae5e416b6edc25a6aca0db9b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/20537099/17ab2cf5756df2529a887cc90a33877d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "128",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "14",
            reviewTextSmall: "14 Reviews",
            subtext: "14 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "114",
            reviewTextSmall: "114 Reviews",
            subtext: "114 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9150 for one",
      },
      locality: {
        name: "Kolar, Bhopal",
        address: "G/3, Khasra 162, Sarvdharam Kolar Road, Kolar, Bhopal",
        localityUrl: "bhopal/kolar-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/momos/",
          name: "Momos",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-china-terrace-kolar/info",
      clickActionDeeplink: "",
    },
    distance: "7.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20537099","element_type":"listing","rank":69}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19663373,
      name: "Marbella's Cafe and Lounge",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19663373/d45093a237251930a74d1c077c0b0e00_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/19663373/d45093a237251930a74d1c077c0b0e00_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19663373/565458828ff16017a6c87108d67fb527_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "241",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "28",
            reviewTextSmall: "28 Reviews",
            subtext: "28 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.5",
            reviewCount: "213",
            reviewTextSmall: "213 Reviews",
            subtext: "213 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Airport Area, Bhopal",
        address:
          "3rd Floor, Signature Plaza, Airport Road, Indra Vihar Colony, Lal Ghati, Opposite Manuabhan Tekri, Airport Area, Bhopal",
        localityUrl: "bhopal/airport-area-restaurants",
      },
      timing: {
        text: "Opens at 1pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/roast-chicken/",
          name: "Roast Chicken",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/marbellas-cafe-and-lounge-airport-area/info",
      clickActionDeeplink: "",
    },
    distance: "6.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19663373","element_type":"listing","rank":70}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/marbellas-cafe-and-lounge-airport-area/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19036554,
      name: "The Bhopal Canteen",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19036554/d8c450285358f3e9de1f9437151377c9_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/19036554/d8c450285358f3e9de1f9437151377c9_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19036554/6d5abb5891e01cb7a244a4b312e80ced_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,916",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "101",
            reviewTextSmall: "101 Reviews",
            subtext: "101 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "2,815",
            reviewTextSmall: "2,815 Reviews",
            subtext: "2,815 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "B 93, Kasturba Nagar, Chetak Bridge, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9300 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-bhopal-canteen-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19036554","element_type":"listing","rank":71}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19191155,
      name: "Rise N Dine",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19191155/35884f498ee3e69255a4b694ebc1132c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/19191155/35884f498ee3e69255a4b694ebc1132c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/19191155/8adf4e4c979536b9a36384bc82033c0f_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,197",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "210",
            reviewTextSmall: "210 Reviews",
            subtext: "210 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "987",
            reviewTextSmall: "987 Reviews",
            subtext: "987 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9700 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address: "Plot 190, Near Board Office, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9700 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rise-n-dine-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19191155","element_type":"listing","rank":72}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/rise-n-dine-maharana-pratap-nagar/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600172,
      name: "Amer Bakery Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2600170/7b23080d4f1493c82a46889b4a939a63_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/0/2600170/7b23080d4f1493c82a46889b4a939a63_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/2600170/4ec8a56b932532310af1f28b98f20022_o2_featured_v2.png",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,214",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "464",
            reviewTextSmall: "464 Reviews",
            subtext: "464 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "2,750",
            reviewTextSmall: "2,750 Reviews",
            subtext: "2,750 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9600 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address:
          "Prakash Swimming Pool Campus, Link Road 1, Opposite Arera Club New Market, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9600 for two",
      },
    },
    order: null,
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/amer-bakery-hut-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600172","element_type":"listing","rank":73}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/amer-bakery-hut-tt-nagar/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/amer-bakery-hut?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600174,
      name: "Under The Mango Tree - Jehan Numa Palace",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/2600174/4227d9bc4193bdba90078a7cb080c651_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/2600174/4227d9bc4193bdba90078a7cb080c651_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "327",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "327",
            reviewTextSmall: "327 Reviews",
            subtext: "327 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b93,000 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "157, Shymala Hills, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "Opens at 7pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b93,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/under-the-mango-tree-jehan-numa-palace-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600174","element_type":"listing","rank":74}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl:
          "/bhopal/under-the-mango-tree-jehan-numa-palace-tt-nagar/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20393851,
      name: "The Brunch House 2.0",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20393851/d7df96baff217bd6f1aa92589af5d01d_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/20393851/d7df96baff217bd6f1aa92589af5d01d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20393851/fecb65a6f00fba9f491e471e4eb848f4_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "168",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "20",
            reviewTextSmall: "20 Reviews",
            subtext: "20 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "148",
            reviewTextSmall: "148 Reviews",
            subtext: "148 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9700 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Hoshangabad Road, Bhopal",
        address:
          "Plot 6, Vidya Nagar, Sector C, Opposite Bagmugaliya Thana, Hoshangabad Road, Bhopal",
        localityUrl: "bhopal/hoshangabad-road-restaurants",
      },
      timing: {
        text: "Opens at 12:15pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/kebab/",
          name: "Kebab",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9700 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-brunch-house-2-0-hoshangabad-road/info",
      clickActionDeeplink: "",
    },
    distance: "7.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20393851","element_type":"listing","rank":75}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600008,
      name: "Bake N Shake",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/2600008/80d20adef8e6d427e7f69ba816e5e59b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/2600008/80d20adef8e6d427e7f69ba816e5e59b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/2600007/8e91938b58a0e7b8a444a7745acff99b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "15.6K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "752",
            reviewTextSmall: "752 Reviews",
            subtext: "752 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "14.8K",
            reviewTextSmall: "14.8K Reviews",
            subtext: "14.8K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "B1, GM Tower, Stop 10, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/bakery/",
          name: "Bakery",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9400 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bake-n-shake-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "4.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600008","element_type":"listing","rank":76}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/bake-n-shake-arera-colony/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/bake-n-shake?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20155439,
      name: "Infinity - Taj Lakefront",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20155439/a80ff7bc4ead46afc8c1901462b3fa5a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/20155439/a80ff7bc4ead46afc8c1901462b3fa5a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "17",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "15",
            reviewTextSmall: "15 Reviews",
            subtext: "15 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "2",
            reviewTextSmall: "2 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b93,000 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address:
          "10th Floor, Taj Lake Front, Bhopal Link Road 3, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "Opens at 5pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mediterranean/",
          name: "Mediterranean",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b93,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/infinity-taj-lakefront-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "5.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20155439","element_type":"listing","rank":77}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20201865,
      name: "The Bastion",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20201865/489dc91653f0c8fd87a79efc9d58545c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/20201865/489dc91653f0c8fd87a79efc9d58545c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20201865/0313bac647d343e25a14518592b6cc78_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,021",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.7",
            reviewCount: "22",
            reviewTextSmall: "22 Reviews",
            subtext: "22 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.7",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "999",
            reviewTextSmall: "999 Reviews",
            subtext: "999 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,200 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Hoshangabad Road, Bhopal",
        address:
          "Plot-5, Vidhya Nagar, Sector A, Near Barkatullah University, Hoshangabad Road, Bhopal",
        localityUrl: "bhopal/hoshangabad-road-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,200 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-bastion-hoshangabad-road/info",
      clickActionDeeplink: "",
    },
    distance: "6.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20201865","element_type":"listing","rank":78}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19826515,
      name: "Lux Sky Lounge",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/19826515/401271ed6c87f535f88f994dd8e7f631_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/19826515/401271ed6c87f535f88f994dd8e7f631_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/19826515/2742d2a84138a950f98a587e59b6141e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "942",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "49",
            reviewTextSmall: "49 Reviews",
            subtext: "49 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "893",
            reviewTextSmall: "893 Reviews",
            subtext: "893 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9700 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E-5/7, Bittan Market Arera Colony Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9700 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/lux-sky-lounge-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "3.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19826515","element_type":"listing","rank":79}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20294598,
      name: "Handcrafted Cafe & Roastery",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20294598/effec005c9d9095b73b9e3ff4dcf9b57_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20294598/effec005c9d9095b73b9e3ff4dcf9b57_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20294598/351d5e41b40f54c9af0f6a1313f4f989_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "350",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "15",
            reviewTextSmall: "15 Reviews",
            subtext: "15 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "335",
            reviewTextSmall: "335 Reviews",
            subtext: "335 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E-3/75, Near Narmada Trauma Centre, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/cafes/",
          name: "Cafe",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTg5XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/panini/",
          name: "Panini",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/handcrafted-cafe-roastery-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "4.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20294598","element_type":"listing","rank":80}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19472739,
      name: "The Giant Panda",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/19472739/10cf95c7f3719edef310ef17bb2d9b48_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/19472739/10cf95c7f3719edef310ef17bb2d9b48_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/19472739/237a999efdce27a96432bfd463800e4d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,973",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.4",
            reviewCount: "162",
            reviewTextSmall: "162 Reviews",
            subtext: "162 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.4",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "1,811",
            reviewTextSmall: "1,811 Reviews",
            subtext: "1,811 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,200 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "DB City, Maharana Pratap Nagar, Bhopal",
        address: "T-12 -13, 3rd Floor, DB Mall, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/restaurants/in/db-city-maharana-pratap-nagar",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,200 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-giant-panda-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19472739","element_type":"listing","rank":81}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20195796,
      name: "Hummus Nest",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20195796/b7a29f2cc5d0e34fd37dad4b5750fe72_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/20195796/b7a29f2cc5d0e34fd37dad4b5750fe72_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20195796/2b25782c4799dedeb96d1ad6edb0aa9c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "227",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.6",
            reviewCount: "5",
            reviewTextSmall: "5 Reviews",
            subtext: "5 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "222",
            reviewTextSmall: "222 Reviews",
            subtext: "222 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E4, 384 Arera Colony Ground Floor, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/arabian/",
          name: "Arabian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/lebanese/",
          name: "Lebanese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hummus-nest-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "4.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20195796","element_type":"listing","rank":82}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/hummus-nest-arera-colony/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20455831,
      name: "Chai Nagri",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/20455831/a40a45ae2c7383a04c5a527d20d626b8_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/20455831/a40a45ae2c7383a04c5a527d20d626b8_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/20455831/d38da8486ecbcc5045808e8c380185d2_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "394",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "51",
            reviewTextSmall: "51 Reviews",
            subtext: "51 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "343",
            reviewTextSmall: "343 Reviews",
            subtext: "343 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address: "49, Sahyog Vihar, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "Closes in 27 minutes",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/tea/",
          name: "Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9400 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/chai-nagri-gulmohar-colony/info",
      clickActionDeeplink: "",
    },
    distance: "7.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20455831","element_type":"listing","rank":83}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18971331,
      name: "Bhopal Udipi Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/18971331/14108cc719926189a7c8bdafb67fd3bd_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/1/18971331/14108cc719926189a7c8bdafb67fd3bd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/18971331/a30ca8937f8d25ef953c05e0143429a6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "9,232",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "67",
            reviewTextSmall: "67 Reviews",
            subtext: "67 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "9,165",
            reviewTextSmall: "9,165 Reviews",
            subtext: "9,165 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "JP Nagar, Bhopal",
        address: "89, Coach Factory Road, Dwarka Nagar, Near JP Nagar, Bhopal",
        localityUrl: "bhopal/jp-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9300 for two",
      },
    },
    order: null,
    gold: {
      instant: 25,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "25% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bhopal-udipi-restaurant-1-jp-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18971331","element_type":"listing","rank":84}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/bhopal/restaurants/bhopal-udipi-restaurant-1?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20642478,
      name: "Kake Da Dhaba",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20642478/91d4a1fd4f9e78df69dc4f62170431d5_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20642478/91d4a1fd4f9e78df69dc4f62170431d5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/20642478/64577d7914e8bd9a612c97fae3ef0e35_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "39",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "4",
            reviewTextSmall: "4 Reviews",
            subtext: "4 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.1",
            reviewCount: "35",
            reviewTextSmall: "35 Reviews",
            subtext: "35 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9650 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address:
          "18, 19, Ultimate Heights, Bawadiya Kalan, Shahpura Road, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9650 for two",
      },
    },
    order: null,
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/kake-da-dhaba-gulmohar-colony/info",
      clickActionDeeplink: "",
    },
    distance: "7.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20642478","element_type":"listing","rank":85}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20078438,
      name: "House 230- The Gourmet Kitchen",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/20078438/3289345b7860577b959fd2c663f08577_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/20078438/3289345b7860577b959fd2c663f08577_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.0",
        rating_text: "3.0",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "7",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.0",
            reviewCount: "7",
            reviewTextSmall: "7 Reviews",
            subtext: "7 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "230, Kerwa Dam Road, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/momos/",
          name: "Momos",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/house-230-the-gourmet-kitchen-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "8.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20078438","element_type":"listing","rank":86}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19795852,
      name: "Rajashthan Sweets & Namkeen",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/19795852/1ed02711eaab3f3da6cf04591af7ac2f_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/19795852/1ed02711eaab3f3da6cf04591af7ac2f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/19795852/7253fb136f0c6dece5282cc5d2ac66f3_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "802",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "7",
            reviewTextSmall: "7 Reviews",
            subtext: "7 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "795",
            reviewTextSmall: "795 Reviews",
            subtext: "795 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9200 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Kolar, Bhopal",
        address: "Plot-355, Mandakni Colony, Kolar Road, Kolar, Bhopal",
        localityUrl: "bhopal/kolar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mithai/",
          name: "Mithai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/rajashthan-sweets-namkeen-kolar/info",
      clickActionDeeplink: "",
    },
    distance: "7.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19795852","element_type":"listing","rank":87}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19596984,
      name: "Hongkong Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19596984/80d1d6fc56d3efdc1159d0e38895fcdb_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/19596984/80d1d6fc56d3efdc1159d0e38895fcdb_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19596984/709d7d17c7acd932e1b092e4628e4e4d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,937",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.6",
            reviewCount: "336",
            reviewTextSmall: "336 Reviews",
            subtext: "336 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.6",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "2,601",
            reviewTextSmall: "2,601 Reviews",
            subtext: "2,601 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Airport Area, Bhopal",
        address: "Plot 8, Aditya Avenue, Airport Area, Bhopal",
        localityUrl: "bhopal/airport-area-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sichuan/",
          name: "Sichuan",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hongkong-restaurant-airport-area/info",
      clickActionDeeplink: "",
    },
    distance: "7.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19596984","element_type":"listing","rank":88}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19293313,
      name: "Shahi Durbar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19293313/21770f6b14dd45913c41c9fb91a61a6c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/3/19293313/21770f6b14dd45913c41c9fb91a61a6c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19293313/80d1abd785530d7d15a6c0e1efe47d5a_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.5",
        rating_text: "4.5",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "2,621",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.8",
            reviewCount: "153",
            reviewTextSmall: "153 Reviews",
            subtext: "153 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "2,468",
            reviewTextSmall: "2,468 Reviews",
            subtext: "2,468 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9400 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "129- A, Malviya Nagar, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/ice-cream/",
          name: "Ice Cream",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/waffle/",
          name: "Waffle",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9400 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/shahi-durbar-1-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19293313","element_type":"listing","rank":89}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600248,
      name: "Hotel Rajhans Regent",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/2600248/3e5be4202f368679095d5c1dbb9cf173_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/8/2600248/3e5be4202f368679095d5c1dbb9cf173_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/2600248/4181a32d04050eae377cfa519bc41744_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,463",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "359",
            reviewTextSmall: "359 Reviews",
            subtext: "359 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "3,104",
            reviewTextSmall: "3,104 Reviews",
            subtext: "3,104 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "Plot 12-14-15, Commercial Area, Near Chetak Bridge Circle, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/hotel-rajhans-regent-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600248","element_type":"listing","rank":90}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600304,
      name: "Black Mamba Pub & Club",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/2600304/6e6e89c000580ed086cc7cc722e5b6e8_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/2600304/6e6e89c000580ed086cc7cc722e5b6e8_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/2600304/a3eb531ce4d5cfc1e7a82a3023dd642c_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.8",
        rating_text: "4.8",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "63",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.8",
            reviewCount: "63",
            reviewTextSmall: "63 Reviews",
            subtext: "63 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Aashima Mall, Hoshangabad Road, Bhopal",
        address:
          "Near Hyundai Showroom, Ahmedpur Kalan, Chinar Fortune, Hoshangabad Road, Bhopal",
        localityUrl: "bhopal/restaurants/in/aashima-mall-hoshangabad-road",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/black-mamba-pub-club-hoshangabad-road/info",
      clickActionDeeplink: "",
    },
    distance: "7.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600304","element_type":"listing","rank":91}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/black-mamba-pub-club-hoshangabad-road/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20532784,
      name: "Cloud - 9 Espresso",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/20532784/9387ebab37f45c4bae17373baf62c266_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/4/20532784/9387ebab37f45c4bae17373baf62c266_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/20532784/1f90db5ab1877384d6bd26993c00026d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "298",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "20",
            reviewTextSmall: "20 Reviews",
            subtext: "20 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.3",
            reviewCount: "278",
            reviewTextSmall: "278 Reviews",
            subtext: "278 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9300 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address:
          "M-1, Plot 231, 2nd Floor, Trimurti Complex Zone-1, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/tea/",
          name: "Tea",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9300 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/cloud-9-espresso-2-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20532784","element_type":"listing","rank":92}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600328,
      name: "Baker's Castle",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/8/2600328/55a746dea2759918d4a6451e6d0b0815_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/8/2600328/55a746dea2759918d4a6451e6d0b0815_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/8/2600328/e8d3f2b955dbb86f337d137a3c0e57f5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "489",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "150",
            reviewTextSmall: "150 Reviews",
            subtext: "150 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "339",
            reviewTextSmall: "339 Reviews",
            subtext: "339 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9450 for two",
      },
      cfo: {
        text: "\u20b9250 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "E5/33, Near Apex Bank, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9450 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bakers-castle-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "4.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"8d87834d-0fb6-4f72-b186-98a5b3c45667","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600328","element_type":"listing","rank":93}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20707207,
      name: "Hookah Lounge Rooftop Sheesha Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/20707207/109d5aff478274c401cecd8c13669957_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/20707207/109d5aff478274c401cecd8c13669957_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/20707207/44310d3fb7e9b40e89a081ec0737a016_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "0",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "5E/16 Rooftop, Bittan Market, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl:
        "/bhopal/hookah-lounge-rooftop-sheesha-restaurant-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "3.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20707207","element_type":"listing","rank":22}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18985764,
      name: "The Heaven Cafe And Lounge",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/18985764/6ba392451f249cf303aa1dc5bd6d0429_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/18985764/6ba392451f249cf303aa1dc5bd6d0429_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "7",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "7",
            reviewTextSmall: "7 Reviews",
            subtext: "7 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9500 for two",
      },
      cfo: {
        text: "\u20b9200 for one",
      },
      locality: {
        name: "Maharana Pratap Nagar, Bhopal",
        address: "Chetak Bridge, Maharana Pratap Nagar, Bhopal",
        localityUrl: "bhopal/maharana-pratap-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/the-heaven-cafe-and-lounge-maharana-pratap-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18985764","element_type":"listing","rank":23}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600212,
      name: "Laziz",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/2600212/d02ffe58518f9eb40b3bfb2c22ff0876_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/2600212/d02ffe58518f9eb40b3bfb2c22ff0876_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "90",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "90",
            reviewTextSmall: "90 Reviews",
            subtext: "90 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b9800 for two",
      },
      cfo: {
        text: "\u20b9350 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address:
          "Hotel Ranjit, Van Vihar, Near Boat Club, Lake View Road, Shyamla Hills, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9800 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/laziz-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600212","element_type":"listing","rank":24}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 2600419,
      name: "Nasha",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/2600419/0580bac923ed9056d55db6a24d111390_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/2600419/0580bac923ed9056d55db6a24d111390_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "4",
            reviewTextSmall: "4 Reviews",
            subtext: "4 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,100 for two",
      },
      cfo: {
        text: "\u20b9450 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address: "Hotel Sarthak, 1, Link Road, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,100 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/nasha-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"2600419","element_type":"listing","rank":25}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18791419,
      name: "Sizzlers Bar & Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18791419/f2bc2728525bf989837b7bfd554b5b8d_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/chains/9/18791419/f2bc2728525bf989837b7bfd554b5b8d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/9/18791419/8d7d4f1aae3f6f97a45bf8ad2f24e2e7_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "777",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "30",
            reviewTextSmall: "30 Reviews",
            subtext: "30 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "747",
            reviewTextSmall: "747 Reviews",
            subtext: "747 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9400 for one",
      },
      locality: {
        name: "Gulmohar Colony, Bhopal",
        address:
          "Shop 23-25, Bawadiya Kala, Rohit Nagar, Gulmohar Colony, Bhopal",
        localityUrl: "bhopal/gulmohar-colony-restaurants",
      },
      timing: {
        text: "Opens at 6pm",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/sizzlers-bar-restaurant-gulmohar-colony/info",
      clickActionDeeplink: "",
    },
    distance: "8.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18791419","element_type":"listing","rank":26}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/bhopal/sizzlers-bar-restaurant-gulmohar-colony/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20707279,
      name: "Pixel Lounge",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20707279/a6f28a1306fc9699f256ea131baa366c_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/20707279/a6f28a1306fc9699f256ea131baa366c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "0",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,000 for two",
      },
      cfo: {
        text: "\u20b9400 for one",
      },
      locality: {
        name: "Airport Area, Bhopal",
        address:
          "15-16, Tilak Society, Lalghati, Tilak Nagar, Airport Area, Bhopal",
        localityUrl: "bhopal/airport-area-restaurants",
      },
      timing: {
        text: "Opens at 12noon",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/bar-food/",
          name: "Bar Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,000 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/pixel-lounge-airport-area/info",
      clickActionDeeplink: "",
    },
    distance: "6.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20707279","element_type":"listing","rank":27}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20442556,
      name: "Bottom's Up Cafe & Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20442556/cc6b3d0f383f74c0aa910f2d206ff71e_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/20442556/cc6b3d0f383f74c0aa910f2d206ff71e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20442556/50cb63b8e9cddedf2f44353614312f48_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "1",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "1",
            reviewTextSmall: "1 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,200 for two",
      },
      cfo: {
        text: "\u20b9500 for one",
      },
      locality: {
        name: "Arera Colony, Bhopal",
        address: "45, Chunna Bhatti, Kolar Road, Arera Colony, Bhopal",
        localityUrl: "bhopal/arera-colony-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,200 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/bottoms-up-cafe-bar-2-arera-colony/info",
      clickActionDeeplink: "",
    },
    distance: "5.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20442556","element_type":"listing","rank":28}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20588040,
      name: "King's Union Bar & Grill",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/20588040/7852b0d40d49dc0f1d24ddb654009bd2_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/0/20588040/7852b0d40d49dc0f1d24ddb654009bd2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/20588040/43824c5da05971357e348aba08d7f6ed_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "0",
        rating_text: "-",
        rating_subtitle: "Not rated",
        rating_color: "CBCBCB",
        votes: "0",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Reviews",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "\u20b91,500 for two",
      },
      cfo: {
        text: "\u20b9600 for one",
      },
      locality: {
        name: "TT Nagar, Bhopal",
        address:
          "Brahma Krishna Tower, Near Durga Mata Mandir Main Road, TT Nagar, Bhopal",
        localityUrl: "bhopal/tt-nagar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/mughlai/",
          name: "Mughlai",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bhopal/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/bhopal/restaurants/bar-food/",
          name: "Bar Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b91,500 for two",
      },
    },
    order: null,
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/bhopal/kings-union-bar-grill-tt-nagar/info",
      clickActionDeeplink: "",
    },
    distance: "9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"e64219a7-1ff1-4cf2-9bfd-cd4c16a9f40d","location_type":"delivery_cell","location_id":"4142258890903388160","page_type":"nightlife","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20588040","element_type":"listing","rank":29}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];

export const restaurants = restaurantList.map((data) => {
  return { ...data, slug: toLowerDash(data.info.name) };
});
