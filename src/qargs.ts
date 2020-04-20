export default function qargs(...parts: string[]): string {
  return `{?${parts.join(",")}}`;
}
