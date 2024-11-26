"use client";
import { KabuPageContainer } from "@/components/pages/kabu/kabu-page-container";

export default function Kabu({ params }: { params: { id: string } }) {
  return <KabuPageContainer id={params.id} />;
}
