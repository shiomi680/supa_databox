import { supabase } from "@/lib/supabase/supabase";
import { Share, ShareInfo } from "../types/kabu";

// Fetch all shares
export async function fetchShares() {
  const { data: shares, error } = await supabase.from("share").select(`
    id,
    code,
    name,
    english_name,
    sector33_code,
    sector33_name,
    sector17_code,
    sector17_name,
    market_code,
    market_name
  `);
  if (error) {
    console.error("Error fetching shares:", error);
    return [];
  }
  return shares.map(
    (share) =>
      ({
        Id: share.id,
        Code: share.code,
        Name: share.name,
        EnglishName: share.english_name,
        Sector33Code: share.sector33_code,
        Sector33Name: share.sector33_name,
        Sector17Code: share.sector17_code,
        Sector17Name: share.sector17_name,
        MarketCode: share.market_code,
        MarketName: share.market_name,
      } as ShareInfo)
  );
}

// Fetch a single share by ID
export async function fetchShare(share_id: string) {
  const { data: share, error } = await supabase
    .from("share")
    .select(
      `
        id,
        code,
        name,
        english_name,
        sector33_code,
        sector33_name,
        sector17_code,
        sector17_name,
        market_code,
        market_name,
        price_relation(
          id,
          stock_capitalization,
          stock_price_date,
          per,
          pbr
        ),
        my_evaluation(
          id,
          update_date,
          business_overview,
          interest_score,
          profitability_score,
          tags
        ),
        share_link(
          id,
          name,
          link
        ),
        document(
          id,
          document
        ),
        share_content(
          id,
          business,
          my_point,
          my_current_judgment
        ),
      `
    )
    .eq("id", share_id)
    .single();
  if (error) {
    console.error("Error fetching share:", error);
    return null;
  }
  return share;
}

// Add a new share
export async function addShare(shareData: any) {
  const { data: newShare, error } = await supabase
    .from("share")
    .insert(shareData)
    .select();
  if (error) {
    console.error("Error adding share:", error);
    return null;
  }
  return newShare[0];
}

// Update price relation for a share
export async function updatePriceRelation(share_id: string, priceData: any) {
  const { data, error } = await supabase
    .from("price_relation")
    .update(priceData)
    .eq("share_id", share_id);
  if (error) {
    console.error("Error updating price relation:", error);
    return null;
  }
  return data;
}

// Update my evaluation for a share
export async function updateMyEvaluation(
  share_id: string,
  evaluationData: any
) {
  const { data, error } = await supabase
    .from("my_evaluation")
    .update(evaluationData)
    .eq("share_id", share_id);
  if (error) {
    console.error("Error updating my evaluation:", error);
    return null;
  }
  return data;
}

// Update other related tables as needed
// Example: Update share content
export async function updateShareContent(share_id: string, contentData: any) {
  const { data, error } = await supabase
    .from("share_content")
    .update(contentData)
    .eq("share_id", share_id);
  if (error) {
    console.error("Error updating share content:", error);
    return null;
  }
  return data;
}
