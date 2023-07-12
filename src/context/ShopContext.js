import React from "react";
import { useState, useEffect, useContext, createContext } from "react";
import { createClient } from "contentful";

const ShopContext = createContext();

export const ShopsProvider = ({children}) => {
    const [shops, setShops] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "csxq12xuh6fu",
      accessToken: "tsSmymq8jtYGomyQoP6lpS9hdOhyM9Gq-dNbjF9ubRQ",
    });

    client
      .getEntries({
        content_type: "shops",
      })
      .then((response) => {
        const fetchedImages = response.items.map((item) => ({
          title: item.fields.shopTitle,
          id: item.sys.id,
          address: item.fields.address.content[0].content[0].value,
          preview: item.fields.photo.fields.file.url,
          about: item.fields.about.content[0].content[0].value,
          location: {
            lat: item.fields.location.lat,
            lon: item.fields.location.lon,
          },
        }));
        setShops(fetchedImages);
      })
      .catch(console.error);
  }, []);

    return (
        <ShopContext.Provider value={{shops}}>
            {children}
        </ShopContext.Provider>
    )
};

export function useShopContext() {
    return useContext(ShopContext)
}