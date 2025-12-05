import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    className?: string;
}

export function AccordionItem({ title, children, isOpen: controlledIsOpen, onClick: controlledOnClick, className }: AccordionItemProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

    const handleClick = () => {
        if (controlledOnClick) {
            controlledOnClick();
        } else {
            setInternalIsOpen(!isOpen);
        }
    };

    return (
        <div className={cn("border-b border-gray-200 last:border-0", className)}>
            <button
                className="flex w-full items-center justify-between py-4 text-left font-medium transition-colors hover:text-brand-purple focus:outline-none"
                onClick={handleClick}
            >
                <span className={cn("text-lg", isOpen ? "text-brand-purple" : "text-gray-700")}>
                    {title}
                </span>
                <span className={cn("material-symbols-outlined transition-transform duration-300", isOpen ? "rotate-180 text-brand-purple" : "text-gray-400")}>
                    expand_more
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
    allowMultiple?: boolean;
    className?: string;
}

export default function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const handleClick = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes(prev =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className={cn("w-full rounded-xl bg-white p-2 shadow-sm", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
