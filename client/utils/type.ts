type Brand = {
  name: string;
  logo: string;
};

type Advertisement = {
  ad_1_image: string;
  ad_2_image: string;
};

type Product = {
  briefref: string;
  brand: Brand;
  name: string;
  description: string;
  feed_title: string;
  banner_text: string;
  banner_image: string;
  starts_on: string;
};

type ProductWithAds = Product & Advertisement;

export { Brand, Advertisement, Product, ProductWithAds };
