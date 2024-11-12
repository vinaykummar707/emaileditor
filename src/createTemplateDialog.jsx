import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const CreateTemplateDialog = ({ onCreate }) => {
  const [templateName, setTemplateName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCreate = () => {
    if (templateName.trim()) {
      onCreate(templateName);
      setTemplateName("");
      setIsOpen(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} modal={true} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="bg-stone-900 text-white flex flex-row justify-center items-center gap-2 hover:bg-stone-700 px-3 py-2.5 rounded font-medium text-sm">
          Create New Template
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Create New Template
          </Dialog.Title>
          <div className="mb-4">
            <label
              htmlFor="templateName"
              className="block text-sm font-medium text-stone-700"
            >
              Template Name
            </label>
            <input
              type="text"
              id="templateName"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="mt-1 px-3 py-2 border border-stone-300 outline-none ring-0 rounded w-full"
              placeholder="Enter template name"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Dialog.Close asChild>
              <button className="bg-stone-200 px-4 py-2 rounded text-sm">
                Cancel
              </button>
            </Dialog.Close>
            <button
              onClick={handleCreate}
              className="bg-stone-900 text-white px-4 py-2 rounded text-sm"
            >
              Submit
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateTemplateDialog;
