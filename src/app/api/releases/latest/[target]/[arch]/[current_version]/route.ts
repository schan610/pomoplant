import { type NextRequest } from 'next/server';
import { DOWNLOAD_URL, LATEST_VERSION } from '@/lib/constants';
import semver from 'semver';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ target: string; arch: string; current_version: string }> },
) {
  const { target, arch, current_version } = await params;
  console.log(`Update: ${target} ${arch} ${current_version}`);
  console.log(current_version);
  console.log(target);
  const latestVersion = LATEST_VERSION;
  const pubDate = '2026-06-18T05:10:50+00:00';
  const hasUpdate = semver.lt(current_version, latestVersion);

  if (!hasUpdate) {
    return new Response(null, { status: 204 });
  }

  return Response.json({
    version: latestVersion,
    notes: `Testing update ${latestVersion}`,
    pub_date: pubDate,
    platforms: {
      'windows-x86_64': {
        signature:
          'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTTXlZTlYvekZKU3ZFaTNZZ01NaktRbVlwVEJRTVM0SHdmeEJoQURlWVAvcXcveForZzRmbDJlVE9SeE1MSSs0MzBRbUFGTUNFdzhHWm5VOUVkN1dRYXJTMVlDWE5ZNXdjPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzgxODIxMzQ0CWZpbGU6UG9tb3BsYW50XzAuMy4yX3g2NF9lbi1VUy5tc2kKaTROMWZEL0dML1cwZG4xN1R4bk9CUXZmTml4TTc1WkFtNjM5eVhaTWtWMjRHQUh3S3BhTEtJT0FYNHBQT2Q1bWhaV1JBSzVOS3JvelU3UjlnTm82Q1E9PQo=',
        url: `https://pomoplant.io${DOWNLOAD_URL}`,
      },
    },
  });
}
