import { useLocation } from "react-router-dom";
import { Location } from "history";

export default function useBreadcrumb(): Array<TLocation> {
  const location = useLocation();

  const locationItems: Array<TLocation> = [];
  addLocationItemToHome(locationItems);
  addLocationItemToProduct(locationItems, location);
  addLocationDefault(locationItems, location, "carrinho");
  addLocationDefault(locationItems, location, "checkout");

  return locationItems;
}

function addLocationItemToHome(locationItems: Array<TLocation>): void {
  locationItems.push({name: "home", uri: "/"})
}

function addLocationDefault(locationItems: Array<TLocation>, location: Location, expectedPath: string): void {
  const locations = location.pathname.split("/");
  const [,name] = locations
  if (locations.some((path: string) => path === expectedPath)) {
    locationItems.push({name: name, uri: location.pathname}) 
  }
}

function addLocationItemToProduct(locationItems: Array<TLocation>, location: Location): void {
  const locations = location.pathname.split("/");
  if (locations.some((path: string) => path === "produto")) {
    const [, , id ]  = locations;
    locationItems.push({
      name: `produto - ${id}`,
      uri: location.pathname
    })
  }
}

export type TLocation = {
  name: string
  uri: string
}