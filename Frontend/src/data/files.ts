export interface FileItem {
  id: string;
  name: string;
  path: string;
  type: "file" | "folder";
  children?: FileItem[];
}

export const files: FileItem[] = [
  {
    id: "1",
    name: "src",
    path: "/src",
    type: "folder",
    children: [
      {
        id: "2",
        name: "index.ts",
        path: "/src/index.ts",
        type: "file",
      },
      {
        id: "3",
        name: "components",
        path: "/src/components",
        type: "folder",
        children: [
          {
            id: "4",
            name: "App.tsx",
            path: "/src/components/App.tsx",
            type: "file",
          },
          {
            id: "5",
            name: "Header.tsx",
            path: "/src/components/Header.tsx",
            type: "file",
            content: "",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "package.json",
    path: "/package.json",
    type: "file",
  },
  {
    id: "7",
    name: "README.md",
    path: "/README.md",
    type: "file",
  },
];
