import { type NextRequest } from 'next/server';
import semver from 'semver';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ target: string; arch: string; current_version: string }> },
) {
  const { target, arch, current_version } = await params;
  console.log(`Update: ${target} ${arch} ${current_version}`);
  console.log(current_version);
  console.log(target);
  const latestVersion = '0.1.0';
  const pubDate = '2026-06-14T17:09:49+00:00';
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
          'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTTXlZTlYvekZKU214anlIaWVwcktFVUQvMnBlbnVZNkpNZE15SDVXYzM1ZWRtczluNC9Ia2k3UG1EcEZMN2FkMk53UElDOEVlTE1RZS9QQS91enFscFdac1REV1NyUEE4PQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzgxNTYzNTg5CWZpbGU6UG9tb3BsYW50XzAuMS4wX3g2NF9lbi1VUy5tc2kKUXpjaGd0UHdZbDg4dVJPazVHMUkxbzFMczFCYWd1c0UyZWhZcm5VTkx4Qm5yMEUwSDY3QzA2QVdsdE9HQ2wvdjVkb2lnay83NC9kSTNYQ2xPaFkxQ0E9PQo=',
        url: 'https://pomoplant.io/downloads/Pomoplant_0.1.0_x64_en-US.msi',
      },
    },
  });
}
