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
          'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTTXlZTlYvekZKU3U4SitvMllYWE5aVzF1WVpaR2dGeU5adnk2bUtRRXBDTEplckdwSkIwWDZjS1NqL1RXS0VYempURzBsNXI0YlVzbTdMUVA5aTBhYlRFUkFEQlNmamdzPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzgxNzYzNTYzCWZpbGU6UG9tb3BsYW50XzAuMy4xX3g2NF9lbi1VUy5tc2kKUjlTMzE1cllpdFhuaEE4czdQQ1kzUmFrbjlLaS9IQ1hWdXkxR1l3amRCTjV4TVV2SDJCSUd2UTJjSWpkYnR6SlF3QVNKclZIY0REL05XQzIvODRnQ0E9PQo=',
        url: `https://pomoplant.io${DOWNLOAD_URL}`,
      },
    },
  });
}
