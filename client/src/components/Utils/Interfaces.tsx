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

export interface Error {
  isError: boolean;
  message: string;
}

export interface ReturnedError {
  status: number;
  message: string;
}
