import { AccordionProviderProps } from '../utils/constants';
import { ACCORDION_BLOCK } from '../utils/constants';
import { bem } from '../utils/bem';
import { AccordionProvider } from './AccordionProvider';
import { useAccordion } from '../hooks/useAccordion';

const Accordion = ({
  className,
  children,
  ...rest
}: AccordionProviderProps & { className?: string }) => {
  const { accordionProps } = useAccordion();
  return (
    <AccordionProvider {...rest}>
      <div className={bem(ACCORDION_BLOCK, undefined, undefined, className)} {...accordionProps}>
        {children}
      </div>
    </AccordionProvider>
  );
};

export { Accordion };
