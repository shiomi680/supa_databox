"use client";
import { ItemContentPageContainer } from "@/components/pages/items/item-content-page-container";

export default function Item({ params }: { params: { id: string } }) {
  return <ItemContentPageContainer revision_id={params.id} />;
}
