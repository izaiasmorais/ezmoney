import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	return NextResponse.json({ id });
}
