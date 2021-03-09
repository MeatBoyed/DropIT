export interface ProductCardModel {
  _id: string;
  vendor: string;
  title: string;
  price: number;
  thumbnails: { mainThumbnail: string };
}

export interface ProductViewerModel {
  id: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
  rating: number;
  frequency: number;
}

export interface ClientProfileModel {
  title: string;
  location: string;
  description: string;
  socialMedia: [
    {
      accountName: string;
      link: string;
      iconImage: string;
    }
  ];
  images: {
    bannerImage: string;
    profileImage: string;
  };
}

export interface ProductDescription {
  id: string;
  currentURL: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  description: string;
  rating: number;
  frequency: number;
}

export interface Error {
  isError: boolean;
  message: string;
}

export interface ReturnedError {
  status: number;
  message: string;
}

export interface CartProduct {
  image: string;
  frequency: number;
  frequencyList: string[];
}

export interface Payload {
  query: string;
  operation: number;
}
