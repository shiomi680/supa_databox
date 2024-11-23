"use client";
import { ItemPageContainer } from "@/components/pages/items/item-page-container";

export default function Item({ params }: { params: { id: string } }) {
  return <ItemPageContainer revision_id={params.id} />;
}
