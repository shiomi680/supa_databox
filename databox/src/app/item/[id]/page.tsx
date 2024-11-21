"use client";
import { ItemContentPage } from "@/components/pages/items/item-content-page-container";

export default function Item({ params }: { params: { id: string } }) {
  return <ItemContentPage revision_id={params.id} />;
}
