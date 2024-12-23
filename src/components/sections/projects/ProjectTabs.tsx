import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MacbookFrame } from "@/components/ui/macbook-frame";

interface ProjectTabsProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export function ProjectTabs({ beforeImage, afterImage, title }: ProjectTabsProps) {
  return (
    <Tabs defaultValue="after" className="w-full">
      <TabsList className="mb-4 bg-muted/50">
        <TabsTrigger value="before" className="text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
          Original Design
        </TabsTrigger>
        <TabsTrigger value="after" className="text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
          New Design
        </TabsTrigger>
      </TabsList>
      <TabsContent value="before">
        <MacbookFrame>
        <img
          src={beforeImage}
          alt={`${title} Original Design`}
          className="rounded-lg border w-full"
        />
        </MacbookFrame>
      </TabsContent>
      <TabsContent value="after">
        <MacbookFrame>
        <img
          src={afterImage}
          alt={`${title} New Design`}
          className="rounded-lg border w-full"
        />
        </MacbookFrame>
      </TabsContent>
    </Tabs>
  );
}