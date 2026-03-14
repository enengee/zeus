import { NextResponse } from 'next/server';
import { problems } from '@/app/lib/mock/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ problemId: string }> }
) {
  const { problemId } = await params;
  const problem = problems.find((p) => p.id === problemId);

  if (!problem) {
    return NextResponse.json({ error: 'Problem not found' }, { status: 404 });
  }

  return NextResponse.json(problem);
}
