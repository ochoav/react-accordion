import { ReactNode, ForwardedRef } from 'react';
import { TransitionStatus } from 'react-transition-state';
import { ElementProps, ItemState, ItemStateOptions } from '../utils/constants';
declare type ItemModifiers = {
    readonly status: TransitionStatus;
    readonly expanded: boolean;
};
interface ItemElementProps<E extends HTMLElement> extends ElementProps<E, ItemModifiers> {
    ref?: ForwardedRef<E>;
}
declare type NodeOrFunc = ReactNode | ((props: ItemState) => ReactNode);
interface AccordionItemProps extends ItemStateOptions, ElementProps<HTMLDivElement, ItemModifiers> {
    header?: NodeOrFunc;
    children?: NodeOrFunc;
    headingProps?: ItemElementProps<HTMLHeadingElement>;
    buttonProps?: ItemElementProps<HTMLButtonElement>;
    contentProps?: ItemElementProps<HTMLDivElement>;
    panelProps?: ItemElementProps<HTMLDivElement>;
}
declare const AccordionItem: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
export { AccordionItem, AccordionItemProps, ItemModifiers };
