"use client";
import { ItemContentPage } from "@/components/pages/items/item-content-page";

export default function Item({ params }: { params: { id: string } }) {
  return <ItemContentPage revision_id={params.id} />;
}
