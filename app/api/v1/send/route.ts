import { NextResponse } from "next/server";
import webPush from "web-push";
export async function POST(req: Request) {
  try {
    const { subscription, payload, vapidDetails } = await req.json();

    webPush.setVapidDetails(
      vapidDetails.subject,
      vapidDetails.publicKey,
      vapidDetails.privateKey,
    );

    const result = await webPush.sendNotification(subscription, payload);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Push error:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 },
      );
    }
  }
}
