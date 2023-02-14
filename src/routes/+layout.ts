import type { Page } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { CURRENT_VERSION } from '$/lib/constants';

export async function load(page: Page): Promise<void> {
  if (page.url.pathname === '/') {
    throw redirect(307, CURRENT_VERSION);
  }
}
