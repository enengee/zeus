import { NextResponse } from 'next/server';
import { topics } from '@/app/lib/mock/data';

export async function GET() {
  return NextResponse.json(topics);
}
