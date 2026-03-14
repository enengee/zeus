import { NextResponse } from 'next/server';
import { problems } from '@/app/lib/mock/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ topicId: string }> }
) {
  const { topicId } = await params;
  const filteredProblems = problems.filter((problem) => problem.topicId === topicId);
  return NextResponse.json(filteredProblems);
}
