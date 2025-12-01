import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};
export const Filesystem1 = (props: Props) => {
  const [file, setfile] = useState("");
  const [folder, setfolder] = useState(true);
  const [isExpanded, setisExpanded] = useState(false);

  return (
    <div>
      filesystem
      <div>header</div>
      <div>
        <div key="node.id" className="flex items-center gap-2">
          <div>{folder ? <FolderComponent /> : <FileComponent />} </div>
        </div>
      </div>
    </div>
  );
};

const FolderComponent = (props: Props) => {
  return (
    <div>
      {
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      }
    </div>
  );
};

export default FolderComponent;

export const FileComponent = (props: Props) => {
  return <div>component</div>;
};
