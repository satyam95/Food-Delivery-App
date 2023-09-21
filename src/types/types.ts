interface IMAGES {
  [photoId: string]: {
    photoId: string;
    url: string;
    thumbUrl: string;
    uploaderName: string;
    uploaderProfilePic: string;
    uploaderProfileUrl: string;
    timestamp: string;
    likeCount: number;
    commentCount: number;
    comments: never[];
    isLiked: number;
    hash: string;
  };
}

export interface Restaurant {
  slug: string;
  type: string;
  info: {
    resId: number;
    name: string;
    image: {
      url: string;
    };
    o2FeaturedImage: {
      url: string;
    };
    rating: {
      has_fake_reviews: number;
      aggregate_rating: string;
      rating_text: string;
      rating_subtitle: string;
      rating_color: string;
      votes: string;
      subtext: string;
      is_new: boolean;
    };
    ratingNew: {
      newlyOpenedObj?: any;
      suspiciousReviewObj?: any;
      ratings:
        | {
            DINING?: {
              rating_type: string;
              rating: string;
              reviewCount: string;
              reviewTextSmall: string;
              subtext: string;
              color: string;
              ratingV2: string;
              subtitle: string;
              sideSubTitle: string;
              bgColorV2: {
                type: string;
                tint: string;
              };
            };
            DELIVERY?: {
              rating_type: string;
              rating: string;
              reviewCount: string;
              reviewTextSmall: string;
              subtext: string;
              color: string;
              ratingV2: string;
              subtitle: string;
              sideSubTitle: string;
              bgColorV2: {
                type: string;
                tint: string;
              };
              newOnDelivery: boolean;
            };
          }
        | [];
    };
    cft: {
      text: string;
    };
    cfo: {
      text: string;
    };
    locality: {
      name: string;
      address: string;
      localityUrl: string;
    };
    timing: {
      text: string;
      color: string;
    };
    cuisine: {
      deeplink: string;
      url: string;
      name: string;
    }[];
    should_ban_ugc: boolean;
    costText: {
      text: string;
    };
  };
  order?:
    | {
        deliveryTime: string;
        isServiceable: boolean;
        hasOnlineOrdering: boolean;
        actionInfo:
          | {
              text: string;
              clickUrl: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  gold:
    | {
        instant: number;
        welcome_offer: boolean;
        gold_offer: boolean;
        text: string;
        offerValue: string;
        isGoldIcon: boolean;
      }
    | []
    | {
        instant: number;
        welcome_offer: boolean;
        gold_offer: boolean;
        text: string;
        offerValue: string;
        isGoldIcon: boolean;
      }[]
    | null
    | undefined;

  takeaway: any[];
  cardAction: {
    text: string;
    clickUrl: string;
    clickActionDeeplink: string;
  };
  distance: string;
  isPromoted: boolean;
  promotedText: string;
  trackingData: {
    table_name: string;
    payload: string;
    event_names: {
      tap: string;
      impression: string;
    };
  }[];
  allCTA: any[];
  promoOffer: string;
  checkBulkOffers: boolean;
  bulkOffers: {
    text: string;
    color: {
      tint: string;
      type: string;
    };
  }[];
  isDisabled: boolean;
  bottomContainers: any[];
}

export interface RestaurantProps {
  restaurant: Restaurant[]; // Correctly typed restaurant prop
}

export interface TabOverType {
  cuisine:
    | {
        deeplink: string;
        url: string;
        name: string;
      }[]
    | undefined;
  safetyCheck:
    | {
        image: {
          url: string;
          aspect_ratio: number;
        };
        text: string;
      }[]
    | undefined;
    cft: string | undefined;
}

export interface TabType {
  cuisine:
    | {
        deeplink: string;
        url: string;
        name: string;
      }[]
    | undefined;
  safetyCheck:
    | {
        image: {
          url: string;
          aspect_ratio: number;
        };
        text: string;
      }[]
    | undefined;
    cft: string | undefined;
    order: any | undefined;
    reviews: any | undefined;
    restaurantName: string | undefined;
    menu: any | undefined;
}
