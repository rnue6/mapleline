export type Store = {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  lat: number;
  lng: number;
  clothingTypes: string[];
  tagline: string;
};

const stores: Store[] = [
  {
    id: "1",
    name: "CN Tower Threads",
    address: "123 Queen St W, Toronto, ON",
    phone: "(416) 111-0101",
    rating: 4.5,
    lat: 43.65107,
    lng: -79.347015,
    clothingTypes: ["general clothing", "outerwear", "accessories"],
    tagline: "Ethically crafted basics and sustainable outerwear for the city explorer",
  },
  {
    id: "2",
    name: "Distillery District Fashion",
    address: "200 Mill St, Toronto, ON",
    phone: "(416) 222-0202",
    rating: 4.2,
    lat: 43.6405,
    lng: -79.3817,
    clothingTypes: ["general clothing", "shoes"],
    tagline: "Fair-trade everyday wear and eco-conscious footwear handpicked for authenticity",
  },
  {
    id: "3",
    name: "Bay Street Boutique",
    address: "456 Bay St, Toronto, ON",
    phone: "(416) 333-0303",
    rating: 4.7,
    lat: 43.6486,
    lng: -79.3955,
    clothingTypes: ["formalwear", "general clothing", "accessories"],
    tagline: "Sustainable luxury formalwear and ethical accessories for the conscious professional",
  },
  {
    id: "4",
    name: "Yorkville Styles",
    address: "789 Bloor St W, Toronto, ON",
    phone: "(416) 444-0404",
    rating: 4.3,
    lat: 43.6683,
    lng: -79.3949,
    clothingTypes: ["hats", "bags", "accessories"],
    tagline: "Handmade accessories and upcycled bags supporting local artisans and the planet",
  },
  {
    id: "5",
    name: "Kensington Market Clothiers",
    address: "100 Augusta Ave, Toronto, ON",
    phone: "(416) 555-0505",
    rating: 4.1,
    lat: 43.6503,
    lng: -79.3761,
    clothingTypes: ["general clothing", "shoes"],
    tagline: "Vintage-inspired, sustainably-sourced clothing and vegan shoes for the ethical fashionista",
  },
  {
    id: "6",
    name: "Gastown Threads",
    address: "10 Water St, Vancouver, BC",
    phone: "(604) 666-0606",
    rating: 4.6,
    lat: 49.2827,
    lng: -123.1207,
    clothingTypes: ["formalwear", "accessories"],
    tagline: "Ethically-produced formal pieces and zero-waste accessories for the modern gentleman",
  },
  {
    id: "7",
    name: "Granville Island Boutique",
    address: "500 Granville Island, Vancouver, BC",
    phone: "(604) 777-0707",
    rating: 4.0,
    lat: 49.2734,
    lng: -123.1364,
    clothingTypes: ["general clothing", "shoes", "bags"],
    tagline: "Locally-made sustainable fashion, eco-friendly footwear, and recycled bags for West Coast living",
  },
  {
    id: "8",
    name: "Commercial Drive Fashion",
    address: "123 Commercial Dr, Vancouver, BC",
    phone: "(604) 888-0808",
    rating: 4.4,
    lat: 49.2835,
    lng: -123.1448,
    clothingTypes: ["outerwear", "hats", "general clothing"],
    tagline: "Organic outerwear and fair-trade hats designed for adventure and environmental responsibility",
  },
  {
    id: "9",
    name: "Whistler Peak Apparel",
    address: "321 Robson St, Vancouver, BC",
    phone: "(604) 999-0909",
    rating: 4.2,
    lat: 49.2861,
    lng: -123.1519,
    clothingTypes: ["sleepwear", "general clothing"],
    tagline: "Eco-friendly sleepwear and sustainable basics made from organic fabrics for restful nights",
  },
  {
    id: "10",
    name: "Downtown Vancouver Styles",
    address: "50 Seymour St, Vancouver, BC",
    phone: "(604) 101-1010",
    rating: 4.0,
    lat: 49.2827,
    lng: -123.1169,
    clothingTypes: ["shoes", "bags", "general clothing"],
    tagline: "Ethically-crafted footwear, sustainable bags, and carbon-neutral everyday wear for the conscious urbanite",
  },
];

export default stores;
