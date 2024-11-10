import { NextRequest, NextResponse } from "next/server";
import { downloadFileByFileId } from "@/lib/crud/storage";
import { supabase } from "@/lib/supabase/supabase";
export async function GET(
  request: NextRequest,
  context: { params: { fileId: string } }
): Promise<NextResponse> {
  const blob = await downloadFileByFileId(supabase, context.params.fileId);
  return new NextResponse(blob);
}
