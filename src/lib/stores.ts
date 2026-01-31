export type Store = {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  lat: number;
  lng: number;
};

const stores: Store[] = [
  {
    id: "1",
    name: "Downtown Threads",
    address: "123 Queen St W, Toronto, ON",
    phone: "(416) 111-0101",
    rating: 4.5,
    lat: 43.65107,
    lng: -79.347015,
  },
  {
    id: "2",
    name: "Lakefront Apparel",
    address: "200 Harbour St, Toronto, ON",
    phone: "(416) 222-0202",
    rating: 4.2,
    lat: 43.6405,
    lng: -79.3817,
  },
  {
    id: "3",
    name: "Queen West Fashion",
    address: "456 Queen St W, Toronto, ON",
    phone: "(416) 333-0303",
    rating: 4.7,
    lat: 43.6486,
    lng: -79.3955,
  },
  {
    id: "4",
    name: "Bloor Street Boutique",
    address: "789 Bloor St W, Toronto, ON",
    phone: "(416) 444-0404",
    rating: 4.3,
    lat: 43.6683,
    lng: -79.3949,
  },
  {
    id: "5",
    name: "Young & Fashionable",
    address: "100 Yonge St, Toronto, ON",
    phone: "(416) 555-0505",
    rating: 4.1,
    lat: 43.6503,
    lng: -79.3761,
  },
  {
    id: "6",
    name: "Kensington Styles",
    address: "10 Kensington Ave, Toronto, ON",
    phone: "(416) 666-0606",
    rating: 4.6,
    lat: 43.6532,
    lng: -79.4001,
  },
  {
    id: "7",
    name: "Eaton Centre Fashion",
    address: "500 Yonge St, Toronto, ON",
    phone: "(416) 777-0707",
    rating: 4.0,
    lat: 43.6544,
    lng: -79.3801,
  },
  {
    id: "8",
    name: "Leslieville Clothiers",
    address: "123 Broadview Ave, Toronto, ON",
    phone: "(416) 888-0808",
    rating: 4.4,
    lat: 43.6689,
    lng: -79.3516,
  },
  {
    id: "9",
    name: "King Street Collective",
    address: "321 King St W, Toronto, ON",
    phone: "(416) 999-0909",
    rating: 4.2,
    lat: 43.6450,
    lng: -79.3908,
  },
  {
    id: "10",
    name: "Harbourfront Apparel",
    address: "50 Queens Quay W, Toronto, ON",
    phone: "(416) 101-1010",
    rating: 4.0,
    lat: 43.6386,
    lng: -79.3859,
  },
];

export default stores;
