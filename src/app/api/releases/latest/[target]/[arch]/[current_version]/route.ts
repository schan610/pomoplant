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
    version: latestVersion,
    notes: `Testing update ${latestVersion}`,
    pub_date: pubDate,
    platforms: {
      'windows-x86_64': {
        signature:
          'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTTXlZTlYvekZKU3VPOG42MVQydzBySC9DU1BrNXIvemFrVWdGR3dRekZaaFJiRFJQSHJjNk91RE1tVUo3eDdPUTNQTWlEQjE2V0RZbTJ1c1kzL0o4dVp3VTc0R1VYOEF3PQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzgxNjM1MDcwCWZpbGU6UG9tb3BsYW50XzAuMi4wX3g2NF9lbi1VUy5tc2kKOEo1SU8vRldPR0RlVXVhYndwMmZ6MUQ0bzhoUkJwLy9ib2dsVnE0UnFmaVNqeGxXZnp1REptVE9IWU9iZkhxeHg4TXhnRm40aGpkWmc0RS9SNlh5QkE9PQo=',
        url: 'https://pomoplant.io/downloads/Pomoplant_0.2.0_x64_en-US.msi',
      },
    },
  });
}
