import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AProps = {
  isToggled?: boolean;
  useButton?: boolean;
};

export const Accordion: React.FC<AProps> = ({
  children,
  useButton = true,
  isToggled = true,
  ...rest
}) => {
  const [intIsToggled, setIntIsToggled] = useState(isToggled);
  return (
    <>
      {useButton && (
        <button onClick={() => setIntIsToggled(prev => !prev)}>Toggle</button>
      )}
      <AccordionChild
        isToggled={useButton ? intIsToggled : isToggled}
        {...rest}
      >
        {children}
      </AccordionChild>
    </>
  );
};

type Props = {
  isToggled: boolean;
};

export const AccordionChild: React.FC<Props> = ({
  children,
  isToggled,
  ...rest
}) => (
  <AnimatePresence>
    {isToggled && (
      <motion.div
        style={{ overflow: 'hidden' }}
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        exit={{ height: 0 }}
        {...rest}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
