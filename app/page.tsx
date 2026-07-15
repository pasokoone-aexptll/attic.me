import { StoryViewport } from "@/components/StoryViewport";
import story from "@/story/Story";

export default function Home() {
  return <StoryViewport story={story} />;
}