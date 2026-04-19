import { archetypes } from "@/data/archetypes";
import DialogueClient from "./DialogueClient";

export function generateStaticParams() {
  return archetypes.map((a) => ({ archetype: a.id }));
}

export default function ArchetypeDialoguePage() {
  return <DialogueClient />;
}
