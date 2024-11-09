"use client";
import { ItemPage } from "@/components/pages/items/item-page";

export default function Item({ params }: { params: { id: string } }) {
  return <ItemPage item_id={params.id} />;
}
