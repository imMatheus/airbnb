import { Search, Facebook, Instagram, Twitter } from "ui";
import ListingCard from "@/components/ListingCard";

export default function Web() {
  return (
    <div>
      <h1>Web då</h1>
      <Search />
      <Facebook />
      <Instagram />
      <Twitter />
      <ListingCard />
    </div>
  );
}
