import { StoryViewport } from "@/components/landing/StoryViewport";
import story from "@/story/Story";

export default function Home() {
  return <StoryViewport story={story} />;
}