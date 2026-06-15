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
  const latestVersion = '0.2.0';
  const pubDate = '2026-06-14T17:09:49+00:00';
  const hasUpdate = semver.lt(current_version, latestVersion);

  if (!hasUpdate) {
    return new Response(null, { status: 204 });
  }

  return Response.json({
    version: '0.2.0',
    notes: 'Testing update 0.2.0',
    pub_date: pubDate,
    platforms: {
      'windows-x86_64': {
        signature:
          'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTTXlZTlYvekZKU25XSncwM2FUMmFNYkVUTnFZMGJ2ajZCREl4UlRKQVZoYkVtYzVnazY1QTB6bVVxTE5CVVUxbTAvRXZVNGkycmpXQjN0MGgvNVUxb3lCOFNiSUpxK0FNPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzgxMjE5MTE2CWZpbGU6UG9tb3BsYW50XzAuMS4wX3g2NF9lbi1VUy5tc2kKZXhDLzVMV2JVVXU2cFFLcGo0L3RiWGVseWhPSTVVdW9hYUpnTDFRY2x2N2o4NUhXYlgzMHk2M2dxWGwycmxXU1pkaUJIZG84bVVsWHl1L2UrTlB3Q0E9PQo=',
        url: 'https://pomoplant.io/downloads/Pomoplant_0.1.0_x64_en-US.msi',
      },
    },
  });
}
