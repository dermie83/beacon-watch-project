import { sql } from '@vercel/postgres';
import {Lighthouse} from './definitions';
// import { formatCurrency } from './utils';

export async function fetchLighthouse() {
  try {
    const data = await sql<Lighthouse>`SELECT * FROM lighthouse`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
