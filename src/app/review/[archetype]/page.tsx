import { archetypes } from "@/data/archetypes";
import ReviewClient from "./ReviewClient";

export function generateStaticParams() {
  return archetypes.map((a) => ({ archetype: a.id }));
}

export default function ReviewPage() {
  return <ReviewClient />;
}
