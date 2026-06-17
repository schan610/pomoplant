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
  const latestVersion = '0.3.0';
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
          'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTTXlZTlYvekZKU2pYOUIyeTRyRWU3cDZGVWkza28xeUlIaVkySWdvUDZYYWF5akF1NFl1Z1dEakQyelI0WjlrNHpHR3d4aWQwbUF0SGNHODBIaGNsKzlpdGVsOEtDYlFzPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzgxNjU3ODI0CWZpbGU6UG9tb3BsYW50XzAuMy4wX3g2NF9lbi1VUy5tc2kKbEthV3RacjZXT1NzdTY5V3ZJdFpxMWVOcGZGS3VzMmhZdDE4N3R2VTY4bzlKNmNwVEMwcVA3VlJ2VXhLV3NVM0JVcEYyK0J4VTVGb2dVVmNiVE83QlE9PQo=',
        url: 'https://pomoplant.io/downloads/Pomoplant_0.3.0_x64_en-US.msi',
      },
    },
  });
}
