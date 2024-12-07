export type MarkdownFileInfo = {
  path: string;
  title: string;
  route: string;
};

export default async function getMarkdownInfo(paths: string[]): Promise<MarkdownFileInfo[]> {
  // Helper function to fetch the markdown content
  async function fetchMarkdownContent(path: string): Promise<string> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file at ${path}`);
    }
    return await response.text();
  }

  // Helper function to extract the first header 1 as the title
  function extractTitle(markdown: string): string {
    const match = markdown.match(/^#\s+(.+)/m); // Match first "# <title>"
    return match ? match[1].trim() : "Untitled"; // Default to "Untitled" if no title found
  }

  // Map each path to the desired object
  const result: MarkdownFileInfo[] = await Promise.all(
    paths.map(async (filePath, i) => {
      try {
        const markdownContent = await fetchMarkdownContent(filePath);
        const title = `${String(i + 1)}. ` + extractTitle(markdownContent);
        const fileName = filePath.split("/").pop() || ""; // Get the file name

        const route = fileName.match(/(?<=\d{2}_)\w+(?=\.md)/)![0];

        return {
          path: filePath,
          title,
          route,
        };
      } catch (error) {
        console.error(`Error processing file at ${filePath}:`, error);
        return {
          path: filePath,
          title: "Error",
          route: "error",
        };
      }
    })
  );

  return result;
}
